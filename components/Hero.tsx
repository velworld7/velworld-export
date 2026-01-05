
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center flex-col overflow-hidden">
      {/* 
        ULTRA HD BACKGROUND VIDEO 
        Cinematic aerial drone shot of a massive cargo ship in motion.
      */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[var(--bg)] z-10" />
        <div className="absolute inset-0 bg-black/20 z-[5]" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.9) contrast(1.1)' }}
        >
          <source src="/video/Cargo_Ship_Journey_Video_Generation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 w-full max-w-[95rem] px-6 mx-auto flex flex-col items-center">
        <div className="text-center opacity-0 animate-apple-in" style={{ animationDelay: '0.4s' }}>
          <h1
            className="text-[4vw] md:text-[3vw] lg:text-[3vw] font-bebas leading-[0.9] tracking-tight text-white uppercase mb-4 transition-all duration-500 hover:scale-105"
            style={{ textShadow: '4px 4px 0px #0066cc, 8px 8px 0px rgba(0,0,0,0.2)' }}
          >
            VEL WORLD
          </h1>

          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-[4vw] md:text-[3vw] font-bebas tracking-wide text-white text-balance leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] uppercase">
              make global trade reliable, <span className="text-[#bfdbfe]">transparent</span>, and efficient.
            </h2>
          </div>


        </div>
      </div>

      <style>{`
        @keyframes apple-in {
          from { opacity: 0; transform: translateY(50px) scale(0.97); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-apple-in {
          animation: apple-in 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
