
import React from 'react';
import { ShieldCheck, Package, Ship, FileText, SearchCode, Globe2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    desc: "Sourcing high-quality products across continents with a strong manufacturer network."
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
    desc: "Conducting strict quality checks to ensure products meet international standards."
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Expert handling of complex documentation and compliance requirements for every region."
  },
  {
    icon: Package,
    title: "Premium Packaging",
    desc: "Ensuring safety during transit with specialized international packaging solutions."
  },
  {
    icon: Ship,
    title: "Intl. Shipping",
    desc: "Comprehensive logistics management for timely delivery across the world."
  },
  {
    icon: SearchCode,
    title: "Transparent Tracking",
    desc: "Real-time updates and clear communication at every stage of the export process."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[var(--bg)] transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-28">
          <span className="text-[#0066cc] font-bold uppercase tracking-[0.5em] text-[11px] mb-6 block">End-to-End Solutions</span>
          <h2 className="text-6xl md:text-8xl font-bebas font-bold text-[var(--text)] mb-8 uppercase tracking-tight">INTEGRATED EXPORT JOURNEY</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#0066cc] to-transparent mx-auto opacity-20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group p-12 bg-[var(--card-bg)] border border-[var(--border)] rounded-[3.5rem] shadow-premium hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066cc]/[0.02] -mr-20 -mt-20 rounded-full group-hover:bg-[#0066cc]/[0.05] transition-all duration-500" />
              <div className="p-6 bg-[var(--accent)]/[0.05] rounded-[2rem] w-fit mb-10 group-hover:scale-110 transition-transform duration-500">
                <s.icon className="text-[#0066cc]" size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl font-bebas font-bold text-[var(--text)] mb-6 uppercase tracking-widest">{s.title}</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-lg mb-10">{s.desc}</p>

              <div className="pt-8 border-t border-[var(--border)] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[#0066cc] text-[10px] font-bold uppercase tracking-[0.4em]">Learn More</span>
                <ArrowUpRight size={20} className="text-[#0066cc]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
