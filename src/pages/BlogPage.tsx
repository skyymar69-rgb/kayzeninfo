import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SEO from '../components/SEO'
import { articles } from '../data/articles'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Kayzen',
  description: 'Articles sur la performance web, le SEO, le design et les tendances digitales.',
  url: 'https://kayzen.fr/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Kayzen',
    url: 'https://kayzen.fr',
  },
}

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog"
        description="Articles et guides sur la performance web, le SEO technique, le design UI/UX et les tendances digitales par l'équipe Kayzen."
        canonical="/blog"
        jsonLd={jsonLd}
      />

      <section className="bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Ressources & insights
            </p>
            <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              Le blog Kayzen
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Conseils, tutoriels et analyses sur la performance web, le SEO et les dernières tendances du digital.
            </p>
          </motion.div>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
            {articles.map((article, i) => (
              <motion.li
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900 p-7 transition-all hover:border-indigo-500/40 hover:bg-slate-800"
                >
                  <span className="mb-4 inline-block self-start rounded-full bg-indigo-950/60 px-3 py-1 text-xs font-semibold text-indigo-400">
                    {article.category}
                  </span>
                  <h2 className="mb-3 font-display text-lg font-bold leading-snug text-white group-hover:text-indigo-300 transition-colors">
                    {article.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm text-slate-400">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.author}</span>
                    <span>{article.readTime} · {article.date}</span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
