export interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  content: string
}

export const articles: Article[] = [
  {
    slug: 'optimiser-vitesse-site-web',
    title: 'Comment optimiser la vitesse de votre site web en 2025',
    description:
      'Découvrez les meilleures pratiques pour améliorer les Core Web Vitals de votre site et atteindre un score PageSpeed parfait.',
    date: '2025-03-01',
    author: 'Équipe Kayzen',
    category: 'Performance',
    readTime: '6 min',
    content: `
L'optimisation des performances web est devenue un facteur clé du référencement naturel depuis que Google a intégré les **Core Web Vitals** dans son algorithme.

## Les 3 métriques essentielles

- **LCP (Largest Contentful Paint)** : temps de chargement du plus grand élément visible. Cible : < 2,5 s.
- **INP (Interaction to Next Paint)** : réactivité aux interactions utilisateur. Cible : < 200 ms.
- **CLS (Cumulative Layout Shift)** : stabilité visuelle. Cible : < 0,1.

## Techniques d'optimisation

### 1. Images optimisées
Utilisez les formats modernes \`avif\` et \`webp\`, définissez des attributs \`width\`/\`height\` pour éviter les décalages, et appliquez \`loading="lazy"\` aux images hors viewport.

### 2. Chargement des polices
Remplacez les \`@import\` CSS bloquants par des balises \`<link rel="preload" as="style">\` dans \`<head>\`.

### 3. Code splitting
Avec Vite + React, utilisez \`React.lazy\` et \`Suspense\` pour charger les composants à la demande.

### 4. Mise en cache
Configurez des en-têtes \`Cache-Control\` longs pour les assets versionnés (\`immutable\`) et courts pour \`index.html\`.
    `.trim(),
  },
  {
    slug: 'seo-technique-spa-react',
    title: 'SEO technique pour une SPA React : tout ce qu\'il faut savoir',
    description:
      'Les SPA React ont la réputation d\'être mal référencées. Voici comment maximiser leur visibilité dans les moteurs de recherche.',
    date: '2025-02-15',
    author: 'Équipe Kayzen',
    category: 'SEO',
    readTime: '8 min',
    content: `
Le référencement d'une **Single Page Application React** présente des défis spécifiques que les développeurs doivent anticiper.

## Problème principal : le rendu côté client

Par défaut, une SPA React envoie un \`<div id="root"></div>\` vide aux moteurs de recherche. Googlebot exécute JavaScript, mais pas forcément au même moment que vos utilisateurs.

## Solutions disponibles

### react-helmet-async
Permet de gérer dynamiquement les balises \`<title>\`, \`<meta>\`, \`<link rel="canonical">\` et les données structurées JSON-LD depuis vos composants.

### Prerendering statique
Pour les sites avec peu de pages, un prerendering statique (via vite-plugin-ssr ou Vike) génère du HTML statique sans migration vers Next.js.

### Sitemap & robots.txt
Un fichier \`sitemap.xml\` est indispensable pour guider Googlebot. Assurez-vous que \`robots.txt\` n'est pas restrictif.

## Checklist SEO pour SPA

1. ✅ \`react-helmet-async\` avec title + description + canonical par page
2. ✅ Données structurées JSON-LD
3. ✅ \`sitemap.xml\` avec toutes les URLs publiques
4. ✅ \`robots.txt\` correct
5. ✅ Open Graph pour les réseaux sociaux
6. ✅ \`manifest.webmanifest\` pour PWA
    `.trim(),
  },
  {
    slug: 'tendances-design-2025',
    title: 'Tendances design web 2025 : ce qui va dominer',
    description:
      'Glassmorphism, dark mode généralisé, micro-interactions, typographie expressive… voici les tendances qui façonnent le web en 2025.',
    date: '2025-01-20',
    author: 'Équipe Kayzen',
    category: 'Design',
    readTime: '5 min',
    content: `
Le design web évolue constamment. En 2025, plusieurs tendances se démarquent et influencent les créations les plus remarquées.

## 1. Dark mode comme standard
Le dark mode n'est plus une option mais un standard. Les utilisateurs s'attendent à pouvoir basculer entre les thèmes, et les moteurs de recherche valorisent l'accessibilité des couleurs.

## 2. Typographie expressive
Les grandes marques osent des typographies XXL, des contrastes forts et des polices variables. \`Syne\`, \`Clash Display\`, \`Cabinet Grotesk\` sont parmi les favorites.

## 3. Micro-animations
Des animations légères sur les interactions (hover, scroll, click) améliorent l'expérience sans pénaliser les performances. La bibliothèque **Motion** permet de les implémenter avec \`prefers-reduced-motion\` intégré.

## 4. Composants flottants / glassmorphism
Le verre dépoli (\`backdrop-blur\`) reste tendance mais doit être utilisé avec parcimonie car il est coûteux en GPU.

## 5. Design inclusif
Contrastes WCAG AA minimum, focus-visible bien visible, labels ARIA, tailles de cibles tactiles ≥ 44px.
    `.trim(),
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
