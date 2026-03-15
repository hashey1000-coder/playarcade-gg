/**
 * useAllRatings — real-time subscription to every game's star-rating aggregate.
 *
 * Subscribes to the entire `ratings/` tree via onValue so that Home/AllGames
 * card ratings update automatically whenever any game is rated — no need to
 * reload the page.
 */

import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase';

export interface GameRatingSummary {
  average: number;   // 0–5
  count: number;
}

export type RatingsMap = Record<string, GameRatingSummary>;

export function useAllRatings(): { ratings: RatingsMap; loading: boolean } {
  const [ratings, setRatings] = useState<RatingsMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const unsub = onValue(
      ref(db, 'ratings'),
      (snap) => {
        if (snap.exists()) {
          const raw = snap.val() as Record<
            string,
            { total?: number; count?: number }
          >;
          const result: RatingsMap = {};
          for (const [slug, data] of Object.entries(raw)) {
            const count = data.count ?? 0;
            const total = data.total ?? 0;
            result[slug] = {
              average: count > 0 ? total / count : 0,
              count,
            };
          }
          setRatings(result);
        } else {
          setRatings({});
        }
        setLoading(false);
      },
      (err) => {
        console.error('[useAllRatings] listener error:', err);
        setLoading(false);
      },
    );
    return unsub;
  }, []);

  return { ratings, loading };
}

