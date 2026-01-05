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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-700 ${darkMode ? 'dark' : ''}`}>
      <Header scrolled={scrolled} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

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