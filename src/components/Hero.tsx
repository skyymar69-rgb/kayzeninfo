import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

interface HeroProps {
  /** Short eyebrow label displayed above the headline */
  eyebrow?: string
  headline: string
  /** Highlighted part of the headline (rendered in indigo) */
  highlight?: string
  subheading: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: 'easeOut' as const, delay },
  }
}

export default function Hero({
  eyebrow,
  headline,
  highlight,
  subheading,
  ctaLabel = 'Découvrir nos services',
  ctaHref = '/services',
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  const titleParts = highlight
    ? headline.split(highlight)
    : [headline]

  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-slate-950 px-4 py-24 sm:px-6">
      {/* Background gradient blobs – decorative, aria-hidden */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-900/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <motion.p
            {...fadeUp(0)}
            className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {highlight ? (
            <>
              {titleParts[0]}
              <span className="text-indigo-400">{highlight}</span>
              {titleParts[1]}
            </>
          ) : (
            headline
          )}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          {subheading}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to={ctaHref}
            className="rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all hover:bg-indigo-500 hover:shadow-indigo-800/50 focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {ctaLabel}
          </Link>

          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              to={secondaryCtaHref}
              className="rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:text-white"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
