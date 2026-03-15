/**
 * useAllVotes — real-time subscription to every game's vote aggregate.
 *
 * Subscribes to the entire `votes/` tree via onValue so that Home card
 * like counts update automatically whenever any game is voted on.
 */

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase';

export interface GameVoteSummary {
  likes: number;
  dislikes: number;
}

export type VotesMap = Record<string, GameVoteSummary>;

export function useAllVotes(): { votes: VotesMap; loading: boolean } {
  const [votes, setVotes] = useState<VotesMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const unsub = onValue(
      ref(db, 'votes'),
      (snap) => {
        if (snap.exists()) {
          const raw = snap.val() as Record<string, { likes?: number; dislikes?: number }>;
          const result: VotesMap = {};
          for (const [slug, data] of Object.entries(raw)) {
            result[slug] = {
              likes: data.likes ?? 0,
              dislikes: data.dislikes ?? 0,
            };
          }
          setVotes(result);
        } else {
          setVotes({});
        }
        setLoading(false);
      },
      (err) => {
        console.error('[useAllVotes] listener error:', err);
        setLoading(false);
      },
    );
    return unsub;
  }, []);

  return { votes, loading };
}
