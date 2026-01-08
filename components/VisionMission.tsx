import React from 'react';
import { Target, Compass, Globe, Eye, ShieldCheck, Star } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="relative py-32 bg-[var(--bg)] overflow-hidden transition-colors duration-700">
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-sky-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-500/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 opacity-0 animate-apple-in">
          <span className="text-[#0066cc] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Core Pillars</span>
          <h2 className="text-[12vw] md:text-[6vw] lg:text-[5vw] font-bebas leading-[0.85] tracking-tight text-[var(--text)] uppercase">
            Our Global <span className="text-[#0066cc]/40">Standards</span>
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#0066cc] to-transparent mx-auto mt-8 opacity-20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-12 bg-white rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl border border-black/5">
              <div className="mb-10 p-8 bg-sky-50 rounded-[2rem] group-hover:bg-[#0066cc]/10 transition-colors">
                <Target size={56} className="text-[#0066cc]" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-bebas tracking-widest text-[#1d1d1f] mb-8 uppercase">Our Vision</h3>
              <p className="text-[#86868b] leading-relaxed font-medium text-lg text-balance">
                To bridge between world markets and Indian excellence, pioneering a new era of global growth through constant innovation.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-12 bg-white rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl border border-black/5">
              <div className="mb-10 p-8 bg-indigo-50 rounded-[2rem] group-hover:bg-indigo-500/[0.1] transition-colors">
                <Compass size={56} className="text-indigo-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-bebas tracking-widest text-[#1d1d1f] mb-8 uppercase">Our Mission</h3>
              <p className="text-[#86868b] leading-relaxed font-medium text-lg text-balance">
                Deliver premium quality products with assured safety, transparent pricing, and 100% international compliance at every step.
              </p>
            </div>
          </div>

          {/* Promises */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative p-12 bg-white rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl border border-black/5">
              <div className="mb-10 p-8 bg-sky-50 rounded-[2rem] group-hover:bg-[#0066cc]/10 transition-colors">
                <Star size={56} className="text-[#0066cc]" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-bebas tracking-widest text-[#1d1d1f] mb-8 uppercase">Our Promises</h3>
              <ul className="space-y-6 w-full">
                <li className="flex flex-col items-center">
                  <span className="text-[var(--text)] font-bold text-[11px] tracking-[0.3em] uppercase mb-3">Guaranteed Quality</span>
                  <div className="h-0.5 w-8 bg-[#0066cc]/40" />
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-[var(--text)] font-bold text-[11px] tracking-[0.3em] uppercase mb-3">Total Transparency</span>
                  <div className="h-0.5 w-8 bg-[#0066cc]/40" />
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-[var(--text)] font-bold text-[11px] tracking-[0.3em] uppercase mb-3">Global Reach</span>
                  <div className="h-0.5 w-8 bg-[#0066cc]/40" />
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
