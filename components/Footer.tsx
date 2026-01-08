import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter, ArrowUp, Briefcase, X, FileUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showCareerModal, setShowCareerModal] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const CareerModal = () => {
    const [cvName, setCvName] = useState('');
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setCvName(e.target.files[0].name);
      }
    };

    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setShowCareerModal(false)} />
        <div className="relative w-full max-w-xl bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-black/5 animate-apple-up">
          <button onClick={() => setShowCareerModal(false)} className="absolute top-8 right-8 p-3 bg-black/5 rounded-full hover:bg-black/10 transition-all">
            <X size={20} />
          </button>

          <div className="text-center mb-10">
            <h3 className="text-4xl font-bebas tracking-tight text-[var(--text)] uppercase mb-4">JOIN OUR TEAM</h3>
            <p className="text-[var(--text-secondary)] font-medium">Be part of the global trade revolution.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Application sent! We'll review your CV soon."); setShowCareerModal(false); }}>
            <input required placeholder="FULL NAME" className="w-full bg-black/5 rounded-2xl px-8 py-5 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white border border-transparent focus:border-black/5" />
            <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black/5 rounded-2xl px-8 py-5 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white border border-transparent focus:border-black/5" />
            <input required placeholder="POSITION OF INTEREST" className="w-full bg-black/5 rounded-2xl px-8 py-5 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white border border-transparent focus:border-black/5" />

            <label className="flex flex-col items-center justify-center w-full h-32 bg-black/[0.02] border-2 border-dashed border-black/10 rounded-3xl cursor-pointer hover:bg-black/[0.05] transition-all">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FileUp size={24} className="text-[var(--text-secondary)] mb-3" />
                <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                  {cvName || "Upload CV / Resume (PDF)"}
                </p>
              </div>
              <input type="file" className="hidden" accept=".pdf" onChange={handleFile} required />
            </label>

            <button type="submit" className="w-full py-6 bg-black text-white rounded-full font-black tracking-[0.5em] uppercase text-[11px] shadow-xl active:scale-95 transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    );
  };

  const LegalModal = ({ title, onClose }: { title: string; onClose: () => void }) => (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-black/5 animate-apple-up max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-8 right-8 p-3 bg-black/5 rounded-full hover:bg-black/10 transition-all">
          <X size={20} />
        </button>
        <h3 className="text-4xl font-bebas tracking-tight text-[var(--text)] uppercase mb-8">{title}</h3>
        <div className="prose prose-lg text-[var(--text-secondary)] font-medium">
          <p>
            This is a standard {title} agreement for VEL WORLD TRADING PVT LTD.
            We are committed to protecting your rights and ensuring transparency in all our global trade operations.
          </p>
          <p className="mt-4">
            For detailed inquiries regarding our legal policies, please contact our legal department at sales@velworld.net.
          </p>
          <p className="mt-4 italic opacity-60 text-sm">
            Last updated: 2025
          </p>
        </div>
      </div>
    </div>
  );

  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string }>({ isOpen: false, title: '' });

  return (
    <footer className="bg-[var(--bg)] pt-32 pb-16 border-t border-[var(--border)] relative transition-colors duration-700">
      {showCareerModal && <CareerModal />}
      {legalModal.isOpen && <LegalModal title={legalModal.title} onClose={() => setLegalModal({ isOpen: false, title: '' })} />}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start mb-32">

          {/* LEFT SIDE: COMPANY DETAILS */}
          <div className="flex-1 w-full lg:pr-16">
            <div className="max-w-md">
              <h2 className="text-4xl font-bebas font-bold text-[var(--text)] mb-8 uppercase tracking-widest">
                VEL WORLD
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 font-medium">
                Making global trade reliable, transparent, and efficient. Your premier partner for international excellence and precision.
              </p>
              <div className="flex gap-4">
                {/* Social icons removed as per request */}
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block w-px h-96 bg-black/5 shrink-0" />

          {/* RIGHT SIDE: CONTACT & CAREERS */}
          {/* RIGHT SIDE: CONTACT & CAREERS */}
          <div className="flex-1 w-full lg:pl-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* NAVIGATION LINKS */}
              <div>
                <h4 className="text-[var(--text)] font-bold uppercase tracking-[0.4em] text-[11px] mb-10">Quick Links</h4>
                <ul className="space-y-6 text-[var(--text-secondary)] text-sm font-medium uppercase tracking-widest">
                  <li><button onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#0066cc] transition-colors">About Us</button></li>
                  <li><button onClick={() => { document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#0066cc] transition-colors">Products</button></li>
                  <li><button onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#0066cc] transition-colors">Services</button></li>
                  <li><button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#0066cc] transition-colors">Contact</button></li>
                </ul>
              </div>

              {/* DIRECT CONTACT */}
              <div>
                <h4 className="text-[var(--text)] font-bold uppercase tracking-[0.4em] text-[11px] mb-10">Direct Contact</h4>
                <ul className="space-y-8">
                  <li className="flex gap-6 text-[var(--text-secondary)] text-sm font-medium">
                    <div className="p-3 bg-[var(--text)]/[0.03] rounded-xl shrink-0">
                      <MapPin size={20} className="text-[#0066cc]" />
                    </div>
                    <span className="leading-relaxed">Global Headquarters, International Trade District, Floor 24, India</span>
                  </li>
                  <li className="flex gap-6 text-[var(--text-secondary)] text-sm font-medium">
                    <div className="p-3 bg-[var(--text)]/[0.03] rounded-xl shrink-0">
                      <Phone size={20} className="text-[#0066cc]" />
                    </div>
                    <span>+91 95975 55560</span>
                  </li>
                  <li className="flex gap-6 text-[var(--text-secondary)] text-sm font-medium">
                    <div className="p-3 bg-[var(--text)]/[0.03] rounded-xl shrink-0">
                      <Mail size={20} className="text-[#0066cc]" />
                    </div>
                    <span>sales@velworld.net</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CAREER BOX */}
            <div className="mt-16 p-10 bg-[var(--text)]/[0.02] border border-[var(--border)] rounded-[2.5rem] group hover:bg-[var(--text)] transition-all duration-700 cursor-pointer overflow-hidden relative" onClick={() => setShowCareerModal(true)}>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-3xl font-bebas text-[var(--text)] group-hover:text-[var(--bg)] uppercase tracking-wider mb-2">JOIN VEL WORLD</h5>
                  <p className="text-[var(--text-secondary)] group-hover:text-[var(--bg)]/60 text-xs font-bold uppercase tracking-widest">Exciting Career Opportunities</p>
                </div>
                <div className="p-5 bg-[var(--text)] group-hover:bg-[var(--bg)] rounded-2xl group-hover:scale-110 transition-all">
                  <Briefcase size={24} className="text-[var(--bg)] group-hover:text-[var(--text)]" />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-[0.05] translate-x-1/2 -translate-y-1/2 scale-[3] transition-all duration-1000">
                <Briefcase size={120} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-16 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[var(--text-secondary)] text-[10px] tracking-[0.5em] uppercase font-bold text-center md:text-left">
            &copy; VEL WORLD TRADING PVT LTD. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-12">
            <div className="flex gap-10 text-[var(--text-secondary)] text-[10px] tracking-[0.4em] uppercase font-bold">
              <button onClick={() => setLegalModal({ isOpen: true, title: 'Privacy Policy' })} className="hover:text-[var(--text)] transition-colors uppercase">Privacy</button>
              <button onClick={() => setLegalModal({ isOpen: true, title: 'Terms of Service' })} className="hover:text-[var(--text)] transition-colors uppercase">Terms</button>
            </div>
            <button onClick={scrollToTop} className="p-4 bg-[var(--text)]/[0.03] hover:bg-[var(--text)] rounded-full text-[var(--text)] hover:text-[var(--bg)] transition-all shadow-sm">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;