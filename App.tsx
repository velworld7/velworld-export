import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Products from './components/Products';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

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
      }, 500); // Small delay to ensure components are mounted
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
            <VisionMission />
          </>
        )}

        <div className={activeCategory ? "pt-24 min-h-[70vh]" : ""}>
          <Products activeCatId={activeCategory} onSelectCategory={setActiveCategory} />
        </div>

        {!activeCategory && (
          <>
            <About />
            <Services />
            <Contact />
          </>
        )}
      </main>

      {!activeCategory && <Footer />}

      {/* Persistent Floating Elements */}
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

export default App;