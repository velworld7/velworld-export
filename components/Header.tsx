
import React, { useState, useEffect } from 'react';
import { Menu, Globe, Search, Lightbulb, LightbulbOff, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, darkMode, toggleDarkMode }) => {
  const [isPulling, setIsPulling] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handlePull = () => {
    setIsPulling(true);
    toggleDarkMode();
    setTimeout(() => setIsPulling(false), 400);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Our Standards', id: 'vision' },
    { name: 'Global Portfolio', id: 'products' },
    { name: 'Our Identity', id: 'about' },
    { name: 'Expert Services', id: 'services' },
    { name: 'Get In Touch', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsNavOpen(false);
    const element = document.getElementById(id);
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
  };

  // Prevent body scroll when nav is open (only on mobile)
  useEffect(() => {
    if (isNavOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 py-2 flex items-center justify-between ${scrolled
          ? (darkMode ? 'bg-black/90 border-white/5' : 'bg-white/80 border-black/5') + ' backdrop-blur-2xl border-b shadow-sm'
          : 'bg-transparent border-transparent'
          }`}
      >
        {/* Left Navigation Area */}
        <div className="flex-1 hidden md:flex items-center">
          <button className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--text)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all flex items-center gap-3">
            <Globe size={14} strokeWidth={2.5} />
            <span>GLOBAL HUB</span>
          </button>
        </div>

        {/* PREMIUM CENTERED BRAND LOGO */}
        <div className="flex flex-col items-center justify-center">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative h-12 md:h-16 lg:h-20 w-auto flex flex-col items-center justify-center cursor-pointer transition-all duration-700 hover:scale-105 active:scale-95 group"
          >
            <img
              src="/image/logo_png.png"
              alt="VEL WORLD"
              className="h-full w-auto object-contain drop-shadow-md transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Action Suite */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <div className="relative group flex flex-col items-center">
            <button
              onClick={handlePull}
              className={`relative flex flex-col items-center transition-all duration-500 cursor-pointer ${isPulling ? 'animate-bulb-pull' : ''}`}
            >
              <div className={`w-px h-6 transition-colors duration-700 ${darkMode ? 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.4)]' : 'bg-gray-400'}`}></div>
              <div className={`p-2 rounded-full transition-all duration-700 border ${darkMode
                ? 'bg-yellow-400/20 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] border-yellow-400/40'
                : 'bg-black/[0.03] text-gray-500 border-black/5'
                } hover:scale-110 active:scale-90`}>
                {darkMode ? <Lightbulb size={18} fill="currentColor" /> : <LightbulbOff size={18} />}
              </div>
            </button>
          </div>



          <button
            onClick={() => setIsNavOpen(true)}
            className="text-[var(--text)] hover:text-white hover:bg-[var(--text)] transition-all group flex items-center gap-3 bg-[var(--text)]/[0.05] px-5 py-2.5 rounded-full border border-black/5 shadow-sm"
          >
            <span className="hidden md:block text-[10px] font-black tracking-[0.3em] uppercase">Navigator</span>
            <Menu size={18} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-700" />
          </button>
        </div>
      </header>

      {/* COMPACT SIDE-DRAWER NAVIGATION (The "Small Box") */}
      <div className={`fixed inset-0 z-[200] transition-all duration-700 ${isNavOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Background Overlay Dim */}
        <div
          onClick={() => setIsNavOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-700 ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* The Drawer Content */}
        <div className={`absolute top-0 right-0 h-full w-[320px] md:w-[400px] bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header of Drawer */}
          <div className="flex items-center justify-between px-8 py-10 border-b border-[var(--border)]">
            <div>
              <span className="text-[9px] font-black tracking-[0.4em] text-[var(--accent)] uppercase mb-1 block">Menu</span>
              <h3 className="text-2xl font-bebas text-[var(--text)] tracking-widest uppercase">Navigator</h3>
            </div>
            <button
              onClick={() => setIsNavOpen(false)}
              className="p-3 bg-[var(--text)]/[0.05] hover:bg-[var(--text)] hover:text-[var(--bg)] rounded-full transition-all duration-500 hover:rotate-90 group"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-4 py-8 space-y-2">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full group flex items-center justify-between p-6 rounded-3xl transition-all duration-500 hover:bg-[var(--text)]/[0.03] text-left ${isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-2xl font-bebas text-[var(--text)] tracking-wider uppercase group-hover:text-[var(--accent)] transition-colors">
                  {link.name}
                </span>
                <div className="w-10 h-10 rounded-full border border-[var(--text)]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={16} className="text-[var(--accent)]" />
                </div>
              </button>
            ))}
          </div>

          {/* Footer of Drawer */}
          <div className="p-10 border-t border-[var(--border)] text-center">
            <p className="text-[9px] font-bold tracking-[0.3em] text-[var(--text-secondary)] uppercase opacity-50">
              Global Trade Excellence &copy; 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
