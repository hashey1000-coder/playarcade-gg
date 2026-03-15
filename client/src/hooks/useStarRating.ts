/**
 * useStarRating — real-time 1-5 star ratings backed by Firebase Realtime Database.
 *
 * RTDB structure:
 *   ratings/
 *     {slug}/
 *       total:  number   (sum of all submitted star values)
 *       count:  number   (number of individual raters)
 *
 * average = total / count  (yields a 1–5 float, e.g. 4.3)
 *
 * The user's own rating is stored in localStorage so it persists across
 * page reloads without requiring auth. Aggregate totals live in RTDB and
 * are shared across all users in real time.
 *
 * Behaviour:
 *   - First rating: total += stars, count += 1
 *   - Changing rating: total = total - oldStars + newStars  (count unchanged)
 *   - Re-clicking same star: toggles off — total -= stars, count -= 1
 */

import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { db } from '@/lib/firebase';

export interface StarRatingResult {
  average: number;
  count: number;
  userRating: number;        // 0 means not rated
  rate: (stars: 1 | 2 | 3 | 4 | 5) => Promise<void>;
  loading: boolean;
  submitting: boolean;
}

export function useStarRating(slug: string): StarRatingResult {
  const storageKey = `game-star-${slug}`;

  const getUserRating = (): number => {
    try {
      const v = localStorage.getItem(storageKey);
      const n = v ? parseInt(v, 10) : 0;
      return n >= 1 && n <= 5 ? n : 0;
    } catch {
      return 0;
    }
  };

  const [ratingData, setRatingData] = useState<{ total: number; count: number }>({
    total: 0,
    count: 0,
  });
  const [userRating, setUserRating] = useState<number>(getUserRating);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Reset when slug changes
  useEffect(() => {
    setUserRating(getUserRating());
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Subscribe to real-time rating aggregates
  useEffect(() => {
    if (!slug || !db) {
      setLoading(false);
      return;
    }
    const ratingRef = ref(db, `ratings/${slug}`);
    const unsub = onValue(
      ratingRef,
      (snap) => {
        const data = snap.val();
        setRatingData({ total: data?.total ?? 0, count: data?.count ?? 0 });
        setLoading(false);
      },
      (err) => {
        console.error('[useStarRating] snapshot error:', err);
        setLoading(false);
      },
    );
    return unsub;
  }, [slug]);

  const average =
    ratingData.count > 0 ? ratingData.total / ratingData.count : 0;

  const rate = async (stars: 1 | 2 | 3 | 4 | 5) => {
    if (!slug || !db || submitting) return;
    setSubmitting(true);

    const prevRating = getUserRating();
    const isToggleOff = prevRating === stars;
    const ratingRef = ref(db, `ratings/${slug}`);

    // Optimistic local update
    if (isToggleOff) {
      localStorage.removeItem(storageKey);
      setUserRating(0);
    } else {
      localStorage.setItem(storageKey, String(stars));
      setUserRating(stars);
    }

    try {
      await runTransaction(ratingRef, (current) => {
        const data: { total: number; count: number } = current ?? {
          total: 0,
          count: 0,
        };

        if (isToggleOff) {
          // Remove this user's rating entirely
          data.total = Math.max(0, (data.total ?? 0) - prevRating);
          data.count = Math.max(0, (data.count ?? 0) - 1);
        } else if (prevRating > 0) {
          // User is changing their existing rating — adjust total only
          data.total = Math.max(0, (data.total ?? 0) - prevRating + stars);
          // count stays the same
        } else {
          // Brand-new rating
          data.total = (data.total ?? 0) + stars;
          data.count = (data.count ?? 0) + 1;
        }

        return data;
      });
    } catch (err) {
      console.error('[useStarRating] write failed:', err);
      // Roll back optimistic local change
      if (prevRating > 0) localStorage.setItem(storageKey, String(prevRating));
      else localStorage.removeItem(storageKey);
      setUserRating(prevRating);
    } finally {
      setSubmitting(false);
    }
  };

  return { average, count: ratingData.count, userRating, rate, loading, submitting };
}
