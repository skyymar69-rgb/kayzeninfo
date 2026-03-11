import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const services = [
  {
    icon: '🌐',
    title: 'Création de sites web',
    description:
      'Sites vitrine, e-commerce, landing pages : nous concevons des expériences web performantes et accessibles, optimisées pour PageSpeed.',
  },
  {
    icon: '🔍',
    title: 'SEO & Référencement',
    description:
      'Audit technique, optimisation on-page, stratégie de contenu et netlinking pour améliorer durablement votre visibilité sur Google.',
  },
  {
    icon: '📱',
    title: 'Design UI/UX',
    description:
      'Interfaces soignées, prototypage Figma, accessibilité WCAG et micro-animations qui engagent sans nuire aux performances.',
  },
  {
    icon: '⚡',
    title: 'Optimisation des performances',
    description:
      'Audit Core Web Vitals, optimisation des images, code splitting, caching et réduction du temps de chargement.',
  },
  {
    icon: '🤖',
    title: 'Automatisation & API',
    description:
      'Intégration de services tiers, automatisation de processus métier et développement d\'APIs robustes et sécurisées.',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description:
      'Mise en place de tableaux de bord personnalisés, suivi des KPIs et recommandations basées sur les données réelles.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6" id="services">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Nos services
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Des solutions sur mesure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Nous couvrons l'ensemble des besoins digitaux de votre entreprise, de la conception à la mise en ligne et au suivi.
          </p>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <span className="mb-4 block text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
