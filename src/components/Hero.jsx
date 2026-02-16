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
        <div className="lg:col-span-7 flex justify-center lg:justify-end relative order-1 lg:order-2">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 via-purple-500/30 to-blue-500/30 blur-[80px] rounded-full animate-pulse"></div>
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
            className="relative"
          >
             {/* Sticker Effect Logo */}
             <img 
               src="/fest-logo.png" 
               alt="Colour Fest" 
               className="h-[250px] md:h-[350px] lg:h-[450px] w-auto object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
               style={{ filter: "drop-shadow(0px 0px 0px white)" }} /* Add white stroke effect via CSS if simplified, or rely on actual image */
             />
             
             {/* Floating Elements (Decorations) */}
             <motion.div 
               animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 text-6xl"
             >
               🎨
             </motion.div>
             <motion.div 
               animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-5 -left-10 text-6xl"
             >
               ✨
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
            className="group relative inline-flex items-center gap-3 bg-[#FFE500] text-black text-xl md:text-3xl font-black italic px-8 py-4 md:px-12 md:py-6 rounded-full shadow-[0_0_40px_rgba(255,229,0,0.5)] hover:shadow-[0_0_60px_rgba(255,229,0,0.7)] hover:scale-105 transition-all transform skew-x-[-10deg]"
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
