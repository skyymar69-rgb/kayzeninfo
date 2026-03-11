import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { href: '/',         label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/methode',  label: 'Méthode' },
  { href: '/blog',     label: 'Blog' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-900 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="font-display text-lg font-bold text-white hover:text-indigo-400 transition-colors"
            aria-label="Kayzen – accueil"
          >
            Kayzen
          </Link>

          {/* Nav */}
          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6" role="list">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          © {year} Kayzen. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
