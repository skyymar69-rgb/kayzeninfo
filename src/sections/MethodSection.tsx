import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Découverte',
    description:
      'Entretien approfondi pour comprendre vos objectifs, votre cible et vos contraintes. Audit de l\'existant si nécessaire.',
  },
  {
    number: '02',
    title: 'Stratégie',
    description:
      'Définition de la feuille de route, de l\'architecture de l\'information et des KPIs à atteindre.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Prototypage Figma, maquettes desktop + mobile, validation avec vos équipes avant développement.',
  },
  {
    number: '04',
    title: 'Développement',
    description:
      'Code propre, performant et maintenable. Tests cross-browser, accessibilité WCAG, optimisation Core Web Vitals.',
  },
  {
    number: '05',
    title: 'Lancement',
    description:
      'Déploiement sur une infrastructure adaptée, configuration DNS, certificat SSL, soumission à Google Search Console.',
  },
  {
    number: '06',
    title: 'Suivi & Optimisation',
    description:
      'Monitoring des performances, rapports mensuels et itérations continues pour améliorer votre ROI.',
  },
]

export default function MethodSection() {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6" id="methode">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Notre méthode
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Un process éprouvé
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            De la stratégie au lancement, chaque étape est conçue pour maximiser la valeur livrée et minimiser les risques.
          </p>
        </motion.div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <span className="mb-4 block font-display text-4xl font-extrabold text-indigo-500/40">
                {step.number}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
