import React from 'react';
import { Target, Compass, Globe, Eye, ShieldCheck } from 'lucide-react';

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
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-[var(--border)] shadow-premium relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Globe size={180} />
              </div>
              <Eye className="text-[#0066cc] w-12 h-12 mb-8" />
              <h3 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">Our Vision</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg text-balance">
                We connect global buyers with Indian excellence in agro, coconut, matches, engineering, leather, garments and construction products, focusing on long-term partnerships across Europe, Middle East, Asia and the Americas.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-12 glass-card rounded-[3rem] h-full flex flex-col items-center text-center shadow-premium transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl">
              <div className="mb-10 p-8 bg-indigo-500/[0.05] rounded-[2rem] group-hover:bg-indigo-500/[0.1] transition-colors">
                <Compass size={56} className="text-indigo-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">Our Mission</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg text-balance">
                Our mission is to deliver export-grade products from India with strict quality checks, transparent pricing and full international compliance across documentation, logistics and delivery.
              </p>
            </div>
          </div>

          {/* Promises */}
          <div className="group opacity-0 animate-apple-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-[var(--border)] shadow-premium relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <ShieldCheck size={180} />
              </div>
              <ShieldCheck className="text-[#0066cc] w-12 h-12 mb-8" />
              <h3 className="text-4xl font-bebas tracking-widest text-[var(--text)] mb-8 uppercase">Our Promises</h3>
              <ul className="space-y-4">
                {['Guaranteed quality on every export shipment.', 'Total transparency in pricing, documentation and logistics.', 'Global reach across major importing markets worldwide.'].map((text, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-[var(--text)] font-bold text-[12px] tracking-[0.05em] uppercase mb-2 text-center text-balance">{text}</span>
                    <div className="h-0.5 w-10 bg-[#0066cc]/40" />
                  </div>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
