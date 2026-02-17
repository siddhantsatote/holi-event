import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Phone, MessageCircle, Ticket } from 'lucide-react';

const Hero = () => {
  const eventDate = new Date('2026-03-08T11:00:00+05:30');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-10 px-6 md:px-12 lg:px-20">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/dibakar-roy-OO_AlBW8S3o-unsplash.jpg" 
          alt="Holi Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
        {/* Bottom Blend Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-[1px]"></div>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full max-w-[1600px] mx-auto">
        
        {/* Left Col: Hero Text & Logo Space (Reference: "Our Theme" area) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-2 order-2 lg:order-1">
          {/* Company Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <img src="/logo.png" alt="ACE" className="h-16 w-auto drop-shadow-lg" />
            <div className="h-10 w-px bg-white/30"></div>
            <span className="text-gray-300 tracking-widest uppercase text-xs font-bold">Ace Event<br/>Management</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-heading font-black text-white leading-tight drop-shadow-xl"
          >
            The Ultimate<br/>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary">Holi Experience</span>
          </motion.h2>

          {/* Socials (Reference: Top Left Icons) */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="flex gap-4 mt-8"
          >
            {[
              { icon: <Instagram size={24} />, href: "https://instagram.com/ace_event_managers" },
              { icon: <Phone size={24} />, href: "tel:9527906995" },
              { icon: <Facebook size={24} />, href: "#" },
              { icon: <MessageCircle size={24} />, href: "mailto:aceeventmanagemant@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl border border-white/10 transition-transform hover:-translate-y-1 hover:border-white/40"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Center/Right: Sticker Logo (Reference: "HackByte" logo) */}
        <div className="lg:col-span-7 flex justify-center relative order-1 lg:order-2">
          {/* Multi-color Glow Layers */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/40 via-orange-500/40 to-red-500/40 blur-[100px] rounded-full animate-pulse scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/30 via-pink-500/30 to-blue-500/30 blur-[120px] rounded-full animate-pulse [animation-delay:1s]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-teal-500/20 blur-[140px] rounded-full animate-pulse [animation-delay:2s] scale-90"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
            className="relative"
          >
             {/* Logo & Splash Container */}
             <motion.div
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 flex items-center justify-center"
             >
               {/* Color Explosion Background (Fest BG) */}
               <motion.img
                 src="/fest-bg.png"
                 alt=""
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[180%] md:w-[200%] max-w-none object-contain opacity-95 pointer-events-none z-10"
               />

               {/* Fest Logo */}
               <img 
                 src="/fest-logo.png" 
                 alt="Colour Fest" 
                 className="h-[200px] md:h-[310px] lg:h-[440px] w-auto object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 relative z-20"
                 style={{ filter: "drop-shadow(0px 0px 0px white)" }} 
               />
             </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Area: Date/Location & CTA (Reference: Bottom bar) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative z-20 w-full max-w-[1600px] mx-auto">
        
        {/* Date & Location (Bottom Left) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white"
        >
          <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wider mb-1">When:</h3>
          <p className="text-4xl md:text-6xl font-heading font-black leading-none mb-2">
            08 MARCH <span className="text-white/50">2026</span>
          </p>
          <div className="flex items-center gap-2 text-lg md:text-xl text-gray-300 font-medium">
            <span>@ Peruchi Wadi, Nashik</span>
          </div>
        </motion.div>

        {/* CTA (Bottom Right) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:items-end gap-4"
        >
          {/* Countdown Pill */}
          <div className="flex gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="text-center">
                  <span className="block text-2xl font-bold font-mono">{String(value).padStart(2,'0')}</span>
                  <span className="text-[10px] uppercase text-gray-400">{label}</span>
                </div>
            ))}
          </div>

          <a 
            href="https://rzp.io/rzp/piELYEN"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#FFE500] text-black text-xl md:text-3xl font-black italic px-8 py-4 md:px-12 md:py-6 rounded-full shadow-[0_0_30px_rgba(255,229,0,0.4)] hover:shadow-[0_0_50px_rgba(255,229,0,0.6)] hover:scale-105 transition-all transform skew-x-[-10deg] opacity-95"
          >
            <span className="skew-x-[10deg] tracking-tighter">REGISTER NOW</span>
            <div className="bg-black text-white rounded-full p-1 skew-x-[10deg] group-hover:rotate-45 transition-transform">
               <Ticket size={24} />
            </div>
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
