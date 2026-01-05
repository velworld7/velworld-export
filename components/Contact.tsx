import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    natureOfInquiry: '',
    companyName: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. Our global trade team will contact you shortly.");
    setFormData({ name: '', email: '', natureOfInquiry: '', companyName: '', message: '' });
  };

  const inputClasses = "w-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl px-8 py-7 text-sm font-semibold tracking-widest text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/5 transition-all placeholder-[var(--text-secondary)]/30 shadow-sm hover:shadow-md hover:border-[var(--text-secondary)]/20 transition-all duration-500";

  return (
    <section id="contact" className="py-40 bg-[var(--bg)] transition-colors duration-1000 border-t border-[var(--border)] relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="opacity-0 animate-apple-in">
          <span className="text-[var(--accent)] font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block">Global Trade Inquiry</span>
          <h2 className="text-7xl md:text-9xl font-bebas text-[var(--text)] mb-8 uppercase tracking-tight leading-none">
            GET IN TOUCH
          </h2>
          <p className="text-[var(--text-secondary)] font-medium text-lg md:text-xl mb-24 max-w-2xl mx-auto text-balance">
            Our team is here to collaborate, ensuring a seamless experience from farm to shelf. Connect with VEL WORLD for premium global trade partnerships.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left opacity-0 animate-apple-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-10">
            <div className="group">
              <label className="text-[10px] font-black tracking-[0.4em] text-[var(--text)] opacity-40 uppercase mb-4 block ml-4 group-focus-within:opacity-100 group-focus-within:text-[var(--accent)] transition-all">Full Identity</label>
              <input 
                required
                type="text" 
                placeholder="YOUR NAME" 
                className={inputClasses}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="text-[10px] font-black tracking-[0.4em] text-[var(--text)] opacity-40 uppercase mb-4 block ml-4 group-focus-within:opacity-100 group-focus-within:text-[var(--accent)] transition-all">Communication</label>
              <input 
                required
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className={inputClasses}
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="group">
              <label className="text-[10px] font-black tracking-[0.4em] text-[var(--text)] opacity-40 uppercase mb-4 block ml-4 group-focus-within:opacity-100 group-focus-within:text-[var(--accent)] transition-all">Inquiry Nature</label>
              <input 
                required
                type="text" 
                placeholder="NATURE OF INQUIRY" 
                className={inputClasses}
                value={formData.natureOfInquiry}
                onChange={e => setFormData({...formData, natureOfInquiry: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="text-[10px] font-black tracking-[0.4em] text-[var(--text)] opacity-40 uppercase mb-4 block ml-4 group-focus-within:opacity-100 group-focus-within:text-[var(--accent)] transition-all">Corporate Entity</label>
              <input 
                required
                type="text" 
                placeholder="COMPANY NAME" 
                className={inputClasses}
                value={formData.companyName}
                onChange={e => setFormData({...formData, companyName: e.target.value})}
              />
            </div>
          </div>

          <div className="md:col-span-2 group">
            <label className="text-[10px] font-black tracking-[0.4em] text-[var(--text)] opacity-40 uppercase mb-4 block ml-4 group-focus-within:opacity-100 group-focus-within:text-[var(--accent)] transition-all">Message Specification</label>
            <textarea 
              required
              placeholder="PLEASE ENTER YOUR DETAILED MESSAGE" 
              rows={6}
              className={inputClasses + " resize-none rounded-[2.5rem] py-8"}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-12">
            <button 
              type="submit" 
              className="group w-full md:w-auto px-28 py-8 bg-[var(--text)] text-[var(--bg)] rounded-full font-black tracking-[0.6em] uppercase text-[11px] hover:scale-105 active:scale-95 transition-all shadow-premium flex items-center justify-center gap-6"
            >
              Submit Inquiry
              <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;