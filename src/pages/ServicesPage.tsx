import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SEO from '../components/SEO'

const services = [
  {
    icon: '🌐',
    title: 'Création de sites web',
    description:
      'Sites vitrine, e-commerce, landing pages : nous concevons des expériences web performantes et accessibles, optimisées pour PageSpeed et SEO.',
    features: ['Design responsive', 'PageSpeed 90+', 'Accessibilité WCAG', 'CMS intégré'],
  },
  {
    icon: '🔍',
    title: 'SEO & Référencement naturel',
    description:
      'Audit technique complet, optimisation on-page, stratégie de contenu et netlinking pour améliorer votre visibilité sur Google durablement.',
    features: ['Audit technique', 'Recherche de mots-clés', 'Optimisation on-page', 'Rapports mensuels'],
  },
  {
    icon: '📱',
    title: 'Design UI/UX',
    description:
      'Interfaces soignées, prototypage Figma, accessibilité et micro-animations qui engagent vos utilisateurs sans nuire aux performances.',
    features: ['Prototypage Figma', 'Design system', 'Tests utilisateurs', 'Motion design'],
  },
  {
    icon: '⚡',
    title: 'Optimisation des performances',
    description:
      'Audit Core Web Vitals, optimisation des images, code splitting, caching avancé et réduction du temps de chargement pour un score PageSpeed parfait.',
    features: ['Audit Core Web Vitals', 'Optimisation images', 'Code splitting', 'Cache avancé'],
  },
  {
    icon: '🤖',
    title: 'Automatisation & API',
    description:
      'Intégration de services tiers, automatisation de processus métier et développement d\'APIs robustes, sécurisées et documentées.',
    features: ['Intégration API REST', 'Webhooks', 'Automatisation', 'Documentation'],
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description:
      'Mise en place de tableaux de bord personnalisés, suivi des KPIs et recommandations basées sur vos données réelles.',
    features: ['Tableaux de bord', 'KPIs personnalisés', 'Data Studio', 'Alertes automatiques'],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Kayzen',
    url: 'https://kayzen.fr',
  },
  name: 'Services digitaux',
  description: 'Création de sites web, SEO, design UI/UX et optimisation des performances.',
}

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Découvrez tous les services de Kayzen : création de sites web, SEO, design UI/UX, optimisation des performances et analytics."
        canonical="/services"
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
              Ce que nous faisons
            </p>
            <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              Nos services
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Des solutions digitales complètes pour développer votre présence en ligne et atteindre vos objectifs business.
            </p>
          </motion.div>

          <ul className="grid gap-8 md:grid-cols-2" role="list">
            {services.map((service, i) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-900 p-8"
              >
                <span className="mb-4 block text-4xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h2 className="mb-3 font-display text-xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mb-5 text-slate-400">{service.description}</p>
                <ul className="flex flex-wrap gap-2" role="list" aria-label="Inclus dans ce service">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-xs font-medium text-indigo-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl border border-indigo-500/20 bg-indigo-950/30 p-10 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-white">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mb-6 text-slate-400">
              Discutons de vos besoins lors d'un premier appel gratuit de 30 minutes.
            </p>
            <Link
              to="mailto:contact@kayzen.fr"
              className="inline-flex rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
