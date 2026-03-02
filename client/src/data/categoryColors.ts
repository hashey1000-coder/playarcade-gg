/**
 * Shared category → Tailwind class mapping.
 * Import this everywhere instead of duplicating the map per page/component.
 * Colours are tuned for WCAG AA contrast (≥4.5:1) in both light and dark modes.
 */
export const CATEGORY_COLORS: Record<string, string> = {
  classic: "text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-950/50",
  arcade: "text-fuchsia-700 bg-fuchsia-50 dark:text-fuchsia-300 dark:bg-fuchsia-950/50",
  sports: "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/50",
  puzzle: "text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/50",
  creative: "text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-950/50",
};

/** Same palette but with border classes — useful for badges that need outlines. */
export const CATEGORY_COLORS_BORDERED: Record<string, string> = {
  classic: "text-cyan-700 bg-cyan-50 border border-cyan-200 dark:text-cyan-300 dark:bg-cyan-950/50 dark:border-cyan-800",
  arcade: "text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 dark:text-fuchsia-300 dark:bg-fuchsia-950/50 dark:border-fuchsia-800",
  sports: "text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/50 dark:border-emerald-800",
  puzzle: "text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-950/50 dark:border-amber-800",
  creative: "text-indigo-700 bg-indigo-50 border border-indigo-200 dark:text-indigo-300 dark:bg-indigo-950/50 dark:border-indigo-800",
};

/** Map category id to the accent colour for colour bars / indicators. */
export const CATEGORY_ACCENT: Record<string, string> = {
  classic: "bg-cyan-500",
  arcade: "bg-fuchsia-500",
  sports: "bg-emerald-500",
  puzzle: "bg-amber-500",
  creative: "bg-indigo-500",
};

export const CATEGORY_FALLBACK = "text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-950/50";
export const CATEGORY_BORDERED_FALLBACK = "text-cyan-700 bg-cyan-50 border border-cyan-200 dark:text-cyan-300 dark:bg-cyan-950/50 dark:border-cyan-800";
