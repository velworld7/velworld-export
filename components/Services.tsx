
import React from 'react';
import { ShieldCheck, Package, Ship, FileText, SearchCode, Globe2, ArrowUpRight, X } from 'lucide-react';

const services = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    desc: "Sourcing high-quality products across continents with a strong manufacturer network for export."
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
    desc: "Conducting strict quality checks to ensure products meet international export standards."
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Expert handling of complex documentation and compliance requirements for every export region."
  },
  {
    icon: Package,
    title: "Premium Packaging",
    desc: "Ensuring safety during transit with specialized international packaging solutions for exports."
  },
  {
    icon: Ship,
    title: "Intl. Shipping",
    desc: "Comprehensive logistics management for timely delivery across the world's major ports."
  },
  {
    icon: SearchCode,
    title: "Transparent Tracking",
    desc: "Real-time updates and clear communication at every stage of the export trade process."
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<typeof services[0] | null>(null);

  const ServiceModal = ({ service, onClose }: { service: typeof services[0]; onClose: () => void }) => (
    <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-black/5 animate-apple-up max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-black/5 rounded-full hover:bg-black/10 transition-all">
          <X size={20} />
        </button>
        <div className="mb-8 p-6 bg-[#0066cc]/5 rounded-[2rem] w-fit">
          <service.icon className="text-[#0066cc]" size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-4xl font-bebas tracking-tight text-[var(--text)] uppercase mb-6">{service.title}</h3>
        <p className="text-[var(--text-secondary)] text-xl font-medium leading-relaxed mb-8">
          {service.desc}
        </p>
        <div className="prose prose-lg text-[var(--text-secondary)]">
          <p>
            At VEL WORLD, our <strong>{service.title}</strong> service is designed to exceed global standards.
            We leverage cutting-edge technology and a vast network of partners to ensure seamless operations.
            Whether it is checking for quality assurance or managing complex logistics, our team acts as an extended arm of your business.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>International Standard Compliance</li>
            <li>24/7 Expert Support</li>
            <li>Cost-Effective Solutions</li>
            <li>Real-time Transparency</li>
          </ul>
        </div>
        <button onClick={onClose} className="mt-10 w-full py-5 bg-[#0066cc] text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-black transition-all">
          Close Details
        </button>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-[var(--bg)] transition-colors duration-700">
      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
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
              onClick={() => setSelectedService(s)}
              className="group p-12 bg-[var(--card-bg)] border border-[var(--border)] rounded-[3.5rem] shadow-premium hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden cursor-pointer"
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
