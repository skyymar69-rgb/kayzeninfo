/**
 * CustomCursorLoader
 *
 * Conditionally loads the CustomCursor component only on non-touch,
 * non-reduced-motion desktop environments.  Loading is deferred until
 * after the first user interaction so it never blocks the critical path.
 */
import { lazy, Suspense, useEffect, useState } from 'react'

const CustomCursor = lazy(() => import('./CustomCursor'))

function shouldEnableCursor(): boolean {
  if (typeof window === 'undefined') return false
  // Disable on touch/coarse-pointer devices (mobile / tablet)
  if (window.matchMedia('(pointer: coarse)').matches) return false
  // Disable when user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return true
}

export default function CustomCursorLoader() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!shouldEnableCursor()) return

    // Activate cursor only after first interaction to avoid blocking LCP
    const activate = () => {
      setEnabled(true)
      document.body.classList.add('custom-cursor-active')
      window.removeEventListener('pointermove', activate)
    }
    window.addEventListener('pointermove', activate, { passive: true, once: true })

    return () => {
      window.removeEventListener('pointermove', activate)
    }
  }, [])

  if (!enabled) return null

  return (
    <Suspense fallback={null}>
      <CustomCursor />
    </Suspense>
  )
}
