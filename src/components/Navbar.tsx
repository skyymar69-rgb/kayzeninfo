import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { href: '/',          label: 'Accueil' },
  { href: '/services',  label: 'Services' },
  { href: '/methode',   label: 'Méthode' },
  { href: '/blog',      label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-white"
          aria-label="Kayzen – accueil"
        >
          Kayzen
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                to={href}
                end={href === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-indigo-400 ${
                    isActive ? 'text-indigo-400' : 'text-slate-300'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/services"
          className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 md:inline-flex"
        >
          Nous contacter
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    to={href}
                    end={href === '/'}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                        isActive ? 'text-indigo-400' : 'text-slate-300'
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Nous contacter
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
