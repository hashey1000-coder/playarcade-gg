/**
 * useAllRatings — one-shot fetch of every game's star-rating aggregate.
 *
 * Reads the entire `ratings/` tree from Firebase RTDB once on mount and
 * returns a map of slug → { average, count }.
 *
 * Used by listing pages (Home, AllGames) to show live community averages
 * on game cards without subscribing to dozens of individual listeners.
 */

import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
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
    get(ref(db, 'ratings'))
      .then((snap) => {
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
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('[useAllRatings] fetch failed:', err);
        setLoading(false);
      });
  }, []);

  return { ratings, loading };
}
