import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import CustomCursorLoader from './components/CustomCursorLoader'

/* -------------------------------------------------------
   Route-level code splitting with React.lazy
   Each page bundle is only loaded when the user visits it
   ------------------------------------------------------- */
const HomePage    = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const MethodPage  = lazy(() => import('./pages/MethodPage'))
const BlogPage    = lazy(() => import('./pages/BlogPage'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <BrowserRouter>
          {/* Custom cursor is loaded lazily and only on non-touch devices */}
          <CustomCursorLoader />

          <Navbar />

          <main id="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"           element={<HomePage />} />
                <Route path="/services"   element={<ServicesPage />} />
                <Route path="/methode"    element={<MethodPage />} />
                <Route path="/blog"       element={<BlogPage />} />
                <Route path="/blog/:slug" element={<ArticlePage />} />
                <Route path="*"           element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
