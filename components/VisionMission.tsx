
import React from 'react';
import { Target, Compass, Star } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="relative py-32 bg-[var(--bg)] overflow-hidden transition-colors duration-700">
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-sky-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-500/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-32 opacity-0 animate-apple-in">
          <span className="text-[12px] font-bold tracking-[0.5em] text-[#0066cc] uppercase mb-6 block">Foundation & Trust</span>
          <h3 className="text-6xl md:text-8xl font-bebas tracking-tight text-[var(--text)] transition-colors duration-700 uppercase">OUR GLOBAL STANDARDS</h3>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#0066cc] to-transparent mx-auto mt-8 opacity-20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-12 glass-card rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mb-10 p-8 bg-[#0066cc]/[0.05] rounded-[2rem] group-hover:bg-[#0066cc]/[0.1] transition-colors">
                <Target size={56} className="text-[#0066cc]" strokeWidth={1.5} />
              </div>
              <h4 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">OUR VISION</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg text-balance">
                To bridge the gap between world markets and Indian excellence, pioneering a new era of global growth through constant innovation.
              </p>
              <div className="mt-auto pt-10 text-[10px] tracking-[0.5em] text-[var(--text)] opacity-20 font-bold uppercase">GLOBAL GROWTH</div>
            </div>
          </div>

          {/* Mission */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-12 glass-card rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mb-10 p-8 bg-indigo-500/[0.05] rounded-[2rem] group-hover:bg-indigo-500/[0.1] transition-colors">
                <Compass size={56} className="text-indigo-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">OUR MISSION</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg text-balance">
                Deliver premium quality products with assured safety, transparent pricing, and 100% international compliance at every step.
              </p>
              <div className="mt-auto pt-10 text-[10px] tracking-[0.5em] text-[var(--text)] opacity-20 font-bold uppercase">RELIABILITY</div>
            </div>
          </div>

          {/* Promises */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative p-12 glass-card rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mb-10 p-8 bg-blue-500/[0.05] rounded-[2rem] group-hover:bg-blue-500/[0.1] transition-colors">
                <Star size={56} className="text-[#007aff]" strokeWidth={1.5} />
              </div>
              <h4 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">OUR PROMISES</h4>
              <div className="space-y-6 w-full">
                {['Guaranteed Quality', 'Total Transparency', 'Global Reach'].map((text, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[var(--text)] font-bold text-[12px] tracking-[0.4em] uppercase mb-2">{text}</span>
                    <div className="h-0.5 w-10 bg-[#0066cc]/40" />
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-10 text-[10px] tracking-[0.5em] text-[var(--text)] opacity-20 font-bold uppercase">EXCELLENCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
