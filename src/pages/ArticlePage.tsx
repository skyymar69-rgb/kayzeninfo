import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import SEO from '../components/SEO'
import { getArticleBySlug } from '../data/articles'

export default function ArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <>
        <SEO title="Article introuvable" noIndex canonical={`/blog/${slug}`} />
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-950 px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Article introuvable</h1>
          <p className="text-slate-400">Cet article n'existe pas ou a été supprimé.</p>
          <Link
            to="/blog"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            Retour au blog
          </Link>
        </div>
      </>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://kayzen.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kayzen',
      url: 'https://kayzen.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kayzen.fr/favicon.svg',
      },
    },
    mainEntityOfPage: `https://kayzen.fr/blog/${article.slug}`,
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <article className="bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-300 transition-colors">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400" aria-current="page">{article.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-indigo-950/60 px-3 py-1 text-xs font-semibold text-indigo-400">
              {article.category}
            </span>

            <h1 className="mb-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {article.title}
            </h1>

            <div className="mb-8 flex items-center gap-4 text-sm text-slate-500">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>{article.date}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime} de lecture</span>
            </div>
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose prose-invert prose-indigo max-w-none text-slate-300"
          >
            {article.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return (
                  <h2 key={i} className="mt-10 mb-4 font-display text-2xl font-bold text-white">
                    {line.slice(3)}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={i} className="mt-7 mb-3 font-display text-xl font-bold text-white">
                    {line.slice(4)}
                  </h3>
                )
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={i} className="ml-4 list-disc text-slate-400">
                    {line.slice(2)}
                  </li>
                )
              }
              if (line.trim() === '') return <br key={i} />
              return (
                <p key={i} className="my-4 leading-relaxed text-slate-400">
                  {line}
                </p>
              )
            })}
          </motion.div>

          {/* Back to blog */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
