# Kayzen – Site web

Site vitrine de Kayzen, agence digitale. Construit avec **Vite + React + TypeScript + Tailwind CSS**.

## Stack

| Techno | Rôle |
|---|---|
| [Vite](https://vite.dev) | Bundler & dev server |
| [React 19](https://react.dev) | UI |
| [React Router v7](https://reactrouter.com) | Routing SPA |
| [Tailwind CSS v4](https://tailwindcss.com) | Styles utilitaires |
| [Motion](https://motion.dev) | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | Gestion des thèmes |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | SEO / meta tags |

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le dev server (http://localhost:5173)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Architecture

```
src/
├── components/          # Composants partagés
│   ├── CustomCursor.tsx      # Curseur custom (lazy, desktop uniquement)
│   ├── CustomCursorLoader.tsx # Chargeur conditionnel du curseur
│   ├── Footer.tsx
│   ├── Hero.tsx              # Section hero réutilisable
│   ├── Navbar.tsx
│   ├── PageLoader.tsx        # Skeleton de chargement pour lazy routes
│   └── SEO.tsx               # Meta tags, OG, JSON-LD
├── data/
│   └── articles.ts      # Contenu statique du blog
├── pages/               # Pages (chargées via React.lazy)
│   ├── ArticlePage.tsx
│   ├── BlogPage.tsx
│   ├── HomePage.tsx
│   ├── MethodPage.tsx
│   ├── NotFoundPage.tsx
│   └── ServicesPage.tsx
├── sections/            # Sections lourdes chargées lazily dans HomePage
│   ├── MethodSection.tsx
│   └── ServicesSection.tsx
├── App.tsx              # Routing + Suspense boundaries
├── index.css            # Styles globaux (Tailwind, pas de @import Google Fonts)
└── main.tsx             # Point d'entrée React
public/
├── favicon.svg
├── site.webmanifest
├── robots.txt
└── sitemap.xml
```

## Optimisations PageSpeed / Core Web Vitals

### Fonts (LCP)
Les polices Google Fonts sont chargées via le pattern `preload + onload` dans `index.html` (pas de `@import` CSS bloquant) avec `font-display: swap`.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="https://fonts.googleapis.com/..." as="style"
      onload="this.onload=null;this.rel='stylesheet'" />
```

### Code splitting (TTI / TBT)
Toutes les pages sont chargées via `React.lazy` + `Suspense`. Les sections lourdes de la homepage (Services, Méthode) sont également lazy. Le bundle initial ne contient que le strict nécessaire.

### Custom cursor (INP)
Le `CustomCursor` n'est jamais inclus dans le bundle critique :
- Chargé via `React.lazy` uniquement après le premier `pointermove` de l'utilisateur.
- Désactivé sur mobile (`pointer: coarse`) et avec `prefers-reduced-motion`.
- Les listeners utilisent `{ passive: true }`.

### Images
Appliquer systématiquement :
```html
<img
  src="..."
  alt="..."
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
/>
<!-- Pour l'image LCP (hero) : -->
<img fetchpriority="high" loading="eager" ... />
```

### Cache headers (hébergement)
Configurer côté serveur / CDN :
- `index.html` : `Cache-Control: no-cache`
- `assets/**` (JS/CSS avec hash) : `Cache-Control: public, max-age=31536000, immutable`
- `public/**` (images, fonts) : `Cache-Control: public, max-age=86400`

### Sécurité (headers recommandés)
Ajouter côté hébergeur (Vercel, Netlify, Cloudflare…) :
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https:
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Variables d'environnement
**Ne jamais** exposer de clés API privées côté client. Les variables préfixées `VITE_` sont bundlées dans le JS public. Pour des appels API sécurisés, utiliser un proxy serverless (Edge Function Vercel/Netlify) ou un backend dédié.

## SEO

- `react-helmet-async` gère `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph, Twitter Card et JSON-LD sur chaque page.
- `public/robots.txt` autorise l'indexation et déclare le sitemap.
- `public/sitemap.xml` liste toutes les URLs publiques.
- `public/site.webmanifest` déclare l'application web progressive.

## Déploiement

Le site est une SPA React. Il nécessite une configuration de **fallback 404 → index.html** côté serveur :

- **Vercel** : créer `vercel.json` avec `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`
- **Netlify** : créer `public/_redirects` avec `/* /index.html 200`
- **Nginx** : `try_files $uri $uri/ /index.html;`
