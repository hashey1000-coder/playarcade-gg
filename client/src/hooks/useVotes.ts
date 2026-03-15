/**
 * useVotes — real-time vote counts backed by Firebase Realtime Database.
 *
 * RTDB structure:
 *   votes/
 *     {slug}/
 *       likes:    number
 *       dislikes: number
 *
 * The user's own vote (did *this* device like/dislike) is stored in
 * localStorage so it persists across page reloads without requiring auth.
 * The aggregate counts live in RTDB and are shared across all users in real time.
 */

import { useState, useEffect } from 'react';
import {
  ref,
  onValue,
  runTransaction,
} from 'firebase/database';
import { db } from '@/lib/firebase';

export function useVotes(slug: string) {
  const userVoteKey = `game-uservote-${slug}`;

  const getUserVote = (): 'like' | 'dislike' | null => {
    try {
      return localStorage.getItem(userVoteKey) as 'like' | 'dislike' | null;
    } catch {
      return null;
    }
  };

  const [votes, setVotes]         = useState({ likes: 0, dislikes: 0 });
  const [userVote, setUserVote]   = useState<'like' | 'dislike' | null>(getUserVote);
  const [loading, setLoading]     = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Re-read userVote from localStorage whenever the slug changes
  useEffect(() => {
    setUserVote(getUserVote());
    setLoading(true);
  }, [slug]);

  // Subscribe to real-time vote counts for this game
  useEffect(() => {
    if (!slug || !db) {
      setLoading(false);
      return;
    }
    const votesRef = ref(db, `votes/${slug}`);
    const unsub = onValue(
      votesRef,
      (snap) => {
        const data = snap.val();
        setVotes({ likes: data?.likes ?? 0, dislikes: data?.dislikes ?? 0 });
        setLoading(false);
      },
      (err) => {
        console.error('[useVotes] snapshot error:', err);
        setLoading(false);
      },
    );
    return unsub;
  }, [slug]);

  const vote = async (type: 'like' | 'dislike') => {
    if (!slug || !db || submitting) return;
    setSubmitting(true);
    const currentUserVote = getUserVote();
    const votesRef = ref(db, `votes/${slug}`);

    // Optimistically update localStorage before the async write
    if (currentUserVote === type) {
      localStorage.removeItem(userVoteKey);
      setUserVote(null);
    } else {
      localStorage.setItem(userVoteKey, type);
      setUserVote(type);
    }

    try {
      // runTransaction reads the current value and writes atomically —
      // safe against concurrent votes from multiple users
      await runTransaction(votesRef, (current) => {
        const data = current ?? { likes: 0, dislikes: 0 };
        if (currentUserVote === type) {
          // Toggle off (undo)
          data[type === 'like' ? 'likes' : 'dislikes'] = Math.max(0, (data[type === 'like' ? 'likes' : 'dislikes'] ?? 0) - 1);
        } else {
          // Remove old vote if switching
          if (currentUserVote === 'like')    data.likes    = Math.max(0, (data.likes    ?? 0) - 1);
          if (currentUserVote === 'dislike') data.dislikes = Math.max(0, (data.dislikes ?? 0) - 1);
          // Add new vote
          data[type === 'like' ? 'likes' : 'dislikes'] = (data[type === 'like' ? 'likes' : 'dislikes'] ?? 0) + 1;
        }
        return data;
      });
    } catch (err) {
      console.error('[useVotes] write failed:', err);
      // Roll back the optimistic localStorage change
      if (currentUserVote) localStorage.setItem(userVoteKey, currentUserVote);
      else localStorage.removeItem(userVoteKey);
      setUserVote(currentUserVote);
    } finally {
      setSubmitting(false);
    }
  };

  return { votes, userVote, vote, loading, submitting };
}
