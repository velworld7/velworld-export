import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeSEO from './components/HomeSEO';
import VisionMission from './components/VisionMission';

// Lazy load below-the-fold components for performance
const Products = React.lazy(() => import('./components/Products'));
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));
const Chatbot = React.lazy(() => import('./components/Chatbot'));

// Loading fallback
const SectionLoader = () => <div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-[#0066cc] border-t-transparent rounded-full animate-spin"></div></div>;

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Handle initial navigation based on URL path
    const path = window.location.pathname;
    if (path !== '/' && path.length > 1) {
      const sectionId = path.substring(1); // remove leading slash
      // Map common paths to section IDs if they differ, or use direct mapping
      const sectionMap: Record<string, string> = {
        'about': 'about',
        'services': 'services',
        'contact': 'contact',
        'products': 'products',
        'vision': 'vision'
      };

      const targetId = sectionMap[sectionId] || sectionId;

      // Increased delay slightly to allow for lazy loaded chunks
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 800);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ${darkMode ? 'dark' : ''}`}>
      <Header scrolled={scrolled} darkMode={darkMode} toggleDarkMode={toggleDarkMode} onResetCategory={() => setActiveCategory(null)} />

      <main className="bg-[var(--bg)] transition-colors duration-700">
        {!activeCategory && (
          <>
            <Hero />
            <HomeSEO />
            <VisionMission />
          </>
        )}

        <div className={activeCategory ? "pt-24 min-h-[70vh]" : ""}>
          <Suspense fallback={<SectionLoader />}>
            <Products activeCatId={activeCategory} onSelectCategory={setActiveCategory} />
          </Suspense>
        </div>

        {!activeCategory && (
          <Suspense fallback={<SectionLoader />}>
            <About />
            <Services />
            <Contact />
          </Suspense>
        )}
      </main>

      {!activeCategory && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}

      {/* Persistent Floating Elements */}
      <Suspense fallback={null}>
        <WhatsAppButton />
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default App;