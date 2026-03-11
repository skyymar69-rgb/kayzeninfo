import { motion } from 'motion/react'
import SEO from '../components/SEO'

const steps = [
  {
    number: '01',
    title: 'Découverte',
    description:
      'Entretien approfondi pour comprendre vos objectifs, votre cible et vos contraintes. Audit de l\'existant si nécessaire.',
    detail:
      'Nous organisons un atelier de découverte de 2h pour cartographier votre situation actuelle, vos ambitions à 6/12 mois et les obstacles potentiels. Le livrable est un brief validé par les deux parties.',
  },
  {
    number: '02',
    title: 'Stratégie',
    description:
      'Définition de la feuille de route, de l\'architecture de l\'information et des KPIs à atteindre.',
    detail:
      'Nous produisons un document stratégique détaillant l\'approche recommandée, les technologies sélectionnées, le planning et les indicateurs de succès mesurables.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Prototypage Figma, maquettes desktop + mobile, validation avec vos équipes avant développement.',
    detail:
      'Deux tours de révisions sont inclus. Nous livrons un design system léger réutilisable pour vos futurs besoins.',
  },
  {
    number: '04',
    title: 'Développement',
    description:
      'Code propre, performant et maintenable. Tests cross-browser, accessibilité WCAG, optimisation Core Web Vitals.',
    detail:
      'Développement en sprints de 2 semaines avec démo intermédiaire. Revue de code, couverture de tests et documentation technique incluses.',
  },
  {
    number: '05',
    title: 'Lancement',
    description:
      'Déploiement sur une infrastructure adaptée, configuration DNS, certificat SSL, soumission à Google Search Console.',
    detail:
      'Checklist de lancement complète : performance, SEO, sécurité, accessibilité. Accompagnement pendant les 48h post-mise en ligne.',
  },
  {
    number: '06',
    title: 'Suivi & Optimisation',
    description:
      'Monitoring des performances, rapports mensuels et itérations continues pour améliorer votre ROI.',
    detail:
      'Tableau de bord partagé avec vos KPIs en temps réel, rapport mensuel commenté et roadmap évolutive mise à jour chaque trimestre.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Méthode Kayzen : du brief au lancement',
  description: 'Notre processus en 6 étapes pour livrer des projets digitaux réussis.',
  step: steps.map((step) => ({
    '@type': 'HowToStep',
    name: step.title,
    text: step.description,
  })),
}

export default function MethodPage() {
  return (
    <>
      <SEO
        title="Notre méthode"
        description="Découvrez la méthode Kayzen : un processus en 6 étapes éprouvé pour livrer des projets digitaux performants, de la stratégie au suivi post-lancement."
        canonical="/methode"
        jsonLd={jsonLd}
      />

      <section className="bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Notre approche
            </p>
            <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              Une méthode éprouvée
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Chaque projet suit un processus rigoureux en 6 étapes pour garantir des livrables de qualité, dans les délais et dans le budget.
            </p>
          </motion.div>

          <ol className="relative space-y-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-slate-900 p-8"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="shrink-0 font-display text-5xl font-extrabold text-indigo-500/30 leading-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div>
                    <h2 className="mb-2 font-display text-xl font-bold text-white">
                      {step.title}
                    </h2>
                    <p className="mb-4 text-slate-400">{step.description}</p>
                    <p className="text-sm text-slate-500">{step.detail}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
