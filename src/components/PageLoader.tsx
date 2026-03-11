/**
 * PageLoader – lightweight skeleton shown while lazy routes load.
 * Kept minimal so it doesn't block LCP.
 */
export default function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-label="Chargement en cours…"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
      <span className="sr-only">Chargement…</span>
    </div>
  )
}
