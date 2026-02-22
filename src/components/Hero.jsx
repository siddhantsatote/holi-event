import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="relative min-h-screen md:h-screen w-full md:overflow-hidden flex flex-col justify-between pt-24 pb-10 px-6 md:px-12 lg:px-20 bg-black">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Holi Background" 
          className="hidden md:block w-full h-full object-cover opacity-80"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
        <img 
          src="/baca03a629e5af1515bce0e713938509.webp" 
          alt="Holi Background Mobile" 
          className="block md:hidden w-full h-full object-cover opacity-80"
          fetchpriority="high"
          width="1000"
          height="1500"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
        {/* Bottom Blend Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-[1px]"></div>
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[100px]"></div>
      </div>

      {/* Logo & Glow Container (Positioned Absolute Centered but behind content) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-full flex items-center justify-center pointer-events-none z-10">
          {/* Multi-color Glow Layers (Simplified for performance) */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-[80px] rounded-full animate-pulse scale-110 will-change-[opacity,transform]"></div>
            <div className="absolute w-[85%] h-[85%] bg-gradient-to-bl from-purple-600/15 via-pink-500/15 to-blue-500/15 blur-[100px] rounded-full animate-pulse [animation-delay:1s] will-change-[opacity,transform]"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
            className="hidden md:flex relative items-center justify-center"
          >
             {/* Logo & Splash Container */}
             <motion.div
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="relative flex items-center justify-center"
             >
               {/* Color Explosion Background (Fest BG) */}
               <motion.img
                 src="/fest-bg.png"
                 alt=""
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[210%] md:w-[230%] max-w-none object-contain opacity-95 pointer-events-none will-change-transform"
               />

               {/* Fest Logo */}
               <img 
                 src="/fest-logo.webp" 
                 alt="Colour Fest" 
                 className="h-[350px] md:h-[500px] lg:h-[700px] w-auto object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative z-20"
                 style={{ filter: "drop-shadow(0px 0px 0px white)" }} 
                 fetchpriority="high"
                 width="700"
                 height="700"
               />
             </motion.div>
          </motion.div>
      </div>

      {/* UI Content Layer (Overlaying Logo) */}
      <div className="relative z-20 flex-1 flex flex-col justify-between w-full max-w-[1600px] mx-auto pointer-events-none">
        
        {/* Top Section: Branding & Theme text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pointer-events-auto">
          <div className="flex flex-col items-start gap-2 w-full">
              {/* Mobile Fest Logo - at the very top */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:hidden relative w-full flex items-center justify-center py-4 mb-2"
              >
                 <motion.div
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative flex items-center justify-center"
                 >
                   <motion.img
                     src="/fest-bg.png"
                     alt=""
                     animate={{ rotate: 360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[200%] max-w-none object-contain opacity-80 pointer-events-none"
                   />
                   <img 
                     src="/fest-logo.webp" 
                     alt="Colour Fest" 
                     className="h-[300px] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-20"
                   />
                 </motion.div>
              </motion.div>

              {/* ACE branding — below fest logo on mobile */}
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
                className="text-3xl md:text-5xl font-heading font-black text-white leading-tight drop-shadow-xl"
              >
                The Ultimate<br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary">Holi Experience</span>
              </motion.h2>
            </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="flex gap-4 mt-8 md:mt-0"
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
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl border border-white/10 transition-transform hover:-translate-y-1 hover:border-white/40 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: Date/Location & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full pointer-events-auto mt-auto">
          
          {/* Date & Location (Bottom Left) */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wider mb-1">When:</h3>
            <p className="text-4xl md:text-7xl font-heading font-black leading-none mb-2 drop-shadow-2xl">
              08 MARCH <span className="text-white/50">2026</span>
            </p>
            <div className="flex items-center gap-2 text-lg md:text-xl text-gray-300 font-medium bg-black/20 backdrop-blur-sm inline-flex px-4 py-1 rounded-full border border-white/5">
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
            <div className="flex gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
              {Object.entries(timeLeft).map(([label, value]) => (
                  <div key={label} className="text-center min-w-[50px]">
                    <span className="block text-2xl font-bold font-mono tracking-tighter">{String(value).padStart(2,'0')}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">{label}</span>
                  </div>
              ))}
            </div>

            <Link 
              to="/tickets"
              className="group relative inline-flex items-center gap-3 bg-[#FFE500] text-black text-xl md:text-4xl font-black italic px-8 py-4 md:px-14 md:py-8 rounded-full shadow-[0_0_40px_rgba(255,229,0,0.5)] hover:shadow-[0_0_60px_rgba(255,229,0,0.7)] hover:scale-105 transition-all transform skew-x-[-10deg] opacity-95"
            >
              <span className="skew-x-[10deg] tracking-tighter">REGISTER NOW</span>
              <div className="bg-black text-white rounded-full p-2 skew-x-[10deg] group-hover:rotate-45 transition-transform">
                 <Ticket size={28} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
