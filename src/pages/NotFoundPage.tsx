import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page introuvable (404)" noIndex />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-slate-950 px-4 text-center">
        <p className="font-display text-8xl font-extrabold text-indigo-500/30 select-none">
          404
        </p>
        <h1 className="font-display text-3xl font-bold text-white">
          Page introuvable
        </h1>
        <p className="max-w-sm text-slate-400">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Retourner à l&apos;accueil
        </Link>
      </div>
    </>
  )
}
