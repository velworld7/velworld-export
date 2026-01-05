
import React from 'react';

const Network: React.FC = () => {
  const continents = ["ASIA", "EUROPE", "AMERICAS", "AFRICA", "OCEANIA"];

  return (
    <section id="network" className="relative py-48 bg-[#fbfbfd] border-t border-black/5">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-[#0066cc] font-bold uppercase tracking-[0.5em] text-[11px] mb-8 block">Global Connectivity</span>
        <h2 className="text-6xl md:text-9xl font-bebas font-bold text-[#1d1d1f] mb-12 leading-[0.85] max-w-6xl mx-auto uppercase tracking-tight">
          PARTNER WITH <span className="text-[#0066cc]">VEL WORLD</span> TO SCALE YOUR <span className="text-[#86868b]/40">GLOBAL SUCCESS.</span>
        </h2>
        
        <p className="text-[#86868b] max-w-5xl mx-auto text-xl md:text-3xl font-medium leading-snug mb-24 text-balance">
          We operate a resilient network of manufacturers, suppliers, and logistics partners across continents, providing 
          <span className="text-[#1d1d1f]"> unhindered access </span> 
          to global markets.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {continents.map((c, i) => (
            <div key={i} className="group p-10 bg-white border border-black/5 rounded-[3rem] shadow-premium hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-4 transition-all duration-700">
              <div className="text-[#1d1d1f] font-bebas text-4xl tracking-widest uppercase mb-4 group-hover:text-[#0066cc] transition-colors">{c}</div>
              <div className="w-10 h-0.5 bg-[#0066cc] mx-auto opacity-20 group-hover:opacity-100 group-hover:w-full transition-all"></div>
              <p className="mt-6 text-[10px] font-bold tracking-[0.4em] text-black/10 uppercase">Active Hub</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
