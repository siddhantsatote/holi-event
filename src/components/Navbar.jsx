import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, HelpCircle, Phone, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <>
      {/* Desktop Floating Pill Nav */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-1 p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20"
      >
        <div className="flex items-center gap-1 bg-black/40 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all font-medium text-sm"
            >
              {link.icon}
              {/* <span className="hidden lg:inline">{link.name}</span> */}
            </Link>
          ))}
        </div>

        <div className="w-px h-6 bg-white/20 mx-2"></div>

        <a
          href="https://rzp.io/rzp/piELYEN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FFE500] hover:bg-[#FFD700] text-black px-6 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,229,0,0.4)]"
        >
          <Ticket size={18} />
          <span>BUY TICKETS</span>
        </a>
      </motion.nav>

      {/* Mobile Nav (Top Bar + Hamburger) */}
      <nav className="md:hidden fixed top-0 w-full z-50 px-4 py-4 flex justify-between items-center bg-transparent">
        <Link to="/">
           <img src="/logo.png" alt="ACE" className="h-12 w-auto drop-shadow-lg" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-indigo-900/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/30 blur-[50px] rounded-full pointer-events-none"></div>

              <div className="flex flex-col gap-2 relative z-10">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <div className="text-white/70 group-hover:text-yellow-400 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                ))}

                <a
                  href="https://rzp.io/rzp/piELYEN"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group mt-2 bg-white/5 border border-white/10"
                >
                  <div className="text-yellow-400">
                    <Ticket size={18} />
                  </div>
                  <span className="text-xl font-bold text-yellow-400 tracking-wide">
                    Buy Tickets
                  </span>
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all shadow-lg"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
