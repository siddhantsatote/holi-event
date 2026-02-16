import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Radial glow behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo + Presents */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 flex flex-col items-center"
        >
          <motion.img
            src="/logo.png"
            alt="ACE Event Management"
            className="h-16 md:h-20 w-auto mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">Presents</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-none tracking-tight">
            <motion.span
              className="inline-block text-gradient-fire"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              COLOUR
            </motion.span>{' '}
            <motion.span
              className="inline-block text-gradient-cool"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              style={{ backgroundSize: "200% auto" }}
            >
              FEST
            </motion.span>{' '}
            <motion.span
              className="inline-block text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #FF6347, #FFD700, #FF1493)", backgroundSize: "200% auto" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              2026
            </motion.span>
          </h1>
        </motion.div>

        {/* Tagline with shimmer */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-3 text-base md:text-xl font-bold text-yellow-300 tracking-wide"
        >
          ✨ JOIN US FOR THE BIGGEST HOLI EVENT! ✨
        </motion.p>

        {/* Event Details — glass pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-5 inline-flex flex-col md:flex-row items-center gap-2 md:gap-4 glass rounded-full px-6 py-3 text-sm md:text-base text-gray-300"
        >
          <span>📅 08 March 2026 | Sunday</span>
          <span className="hidden md:block text-white/20">•</span>
          <span>⏰ 11 AM Onwards</span>
          <span className="hidden md:block text-white/20">•</span>
          <span>📍 Peruchi Wadi, Nashik</span>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 flex justify-center gap-3 md:gap-4"
        >
          {Object.entries(timeLeft).map(([label, value], i) => (
            <motion.div
              key={label}
              className="glass rounded-xl px-3 py-2 md:px-5 md:py-3 min-w-[55px] md:min-w-[70px]"
              whileHover={{ scale: 1.1, borderColor: "rgba(255, 69, 0, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            >
              <div className="text-xl md:text-3xl font-bold text-white tabular-nums">{String(value).padStart(2, '0')}</div>
              <div className="text-[9px] md:text-xs text-gray-500 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.a
            href="https://rzp.io/rzp/piELYEN"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-lg md:text-xl py-3 px-8"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            🎫 BUY TICKETS
          </motion.a>
          <motion.a
            href="tel:9527906995"
            className="inline-block border border-white/20 text-white text-lg md:text-xl font-bold py-3 px-8 rounded-full glass"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            📞 Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
