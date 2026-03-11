/**
 * CustomCursor – premium animated cursor for desktop devices.
 * Loaded lazily after first pointer interaction (see CustomCursorLoader).
 * Uses RAF via motion's useAnimationFrame for smooth 60fps tracking.
 */
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef    = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth lag for the ring
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ring – follows with spring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400 mix-blend-difference"
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      />
      {/* Inner dot – follows instantly */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400"
        style={{ x: mouseX, y: mouseY }}
        aria-hidden="true"
      />
    </>
  )
}
