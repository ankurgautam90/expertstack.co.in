/** Minimal class-name joiner — no runtime dependency needed for this site. */
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
