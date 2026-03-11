import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import { articles } from '../data/articles'

/* Heavy sections loaded only when they scroll into view */
const ServicesSection = lazy(() => import('../sections/ServicesSection'))
const MethodSection   = lazy(() => import('../sections/MethodSection'))

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kayzen',
  url: 'https://kayzen.fr',
  logo: 'https://kayzen.fr/favicon.svg',
  description:
    'Agence digitale spécialisée en création de sites web, stratégie SEO et solutions digitales innovantes.',
}

export default function HomePage() {
  const latestArticles = articles.slice(0, 3)

  return (
    <>
      <SEO canonical="/" jsonLd={jsonLd} />

      {/* Hero – above the fold, no lazy */}
      <Hero
        eyebrow="Agence digitale"
        headline="Votre présence en ligne, "
        highlight="repensée."
        subheading="Kayzen conçoit des sites web performants, accessibles et optimisés pour les moteurs de recherche qui transforment vos visiteurs en clients."
        ctaLabel="Découvrir nos services"
        ctaHref="/services"
        secondaryCtaLabel="Notre méthode"
        secondaryCtaHref="/methode"
      />

      {/* Services & Method – below fold, lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <MethodSection />
      </Suspense>

      {/* Latest articles */}
      <section className="bg-slate-950 py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Derniers articles
            </h2>
            <Link
              to="/blog"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Voir tout →
            </Link>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {latestArticles.map((article, i) => (
              <motion.li
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-slate-900 p-6 transition-all hover:border-indigo-500/40 hover:bg-slate-800"
                >
                  <span className="mb-3 inline-block rounded-full bg-indigo-950/60 px-3 py-1 text-xs font-semibold text-indigo-400">
                    {article.category}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-white group-hover:text-indigo-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3">
                    {article.description}
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    {article.readTime} · {article.date}
                  </p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-hidden="true">
      <div className="mb-10 h-8 w-48 animate-pulse rounded-lg bg-white/10" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-48 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
