import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[var(--bg)] overflow-hidden border-t border-[var(--border)] transition-colors duration-700">
      {/* Premium subtle light background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0066cc]/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Modern Section Header */}
        <div className="mb-24 opacity-0 animate-apple-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-[#0066cc] font-bold tracking-[0.5em] uppercase text-[11px] mb-6 block">Premium Identity</span>
          <h2 className="text-7xl md:text-9xl font-bebas tracking-tight text-[var(--text)] mb-8 uppercase leading-none">OUR IDENTITY</h2>
          <div className="h-1 w-24 bg-[#0066cc] opacity-20"></div>
        </div>

        {/* Identity Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-24">
          <div className="lg:col-span-7 space-y-12 opacity-0 animate-apple-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-3xl md:text-5xl text-[var(--text)] font-semibold leading-tight tracking-tight text-balance">
              Building a <span className="text-[#0066cc]">seamless corridor</span> for global trade through trust and precision.
            </p>

            <div className="space-y-8 text-[var(--text-secondary)] text-xl font-medium leading-relaxed max-w-4xl">
              <p>
                We work with a strong network of manufacturers, suppliers, and logistics partners across continents, helping customers access the products they need without the usual hurdles of international trade.
              </p>
              <p>
                Partner with VEL WORLD to make your global trade journey smooth, efficient, and successful. Believing that no opportunity is too small, our impeccable business practices build strong relationships in each country.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative group opacity-0 animate-apple-in" style={{ animationDelay: '0.5s' }}>
            <div className="aspect-[4/5] overflow-hidden rounded-[4rem] border border-[var(--border)] relative shadow-premium transition-all duration-700 hover:scale-[1.03] glass-card">
              <img
                src="/image/global_logistics.png"
                alt="Global Logistics Excellence"
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12 p-8 glass-card rounded-[2.5rem] shadow-xl">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#0066cc] font-bold mb-4">Global Reach</p>
                <p className="text-[var(--text)] text-base font-semibold leading-relaxed">Trusted supplier networks and high quality standards across every continent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}

      </div>
    </section>
  );
};

export default About;