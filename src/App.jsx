import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Reusable Background Ambience
const BackgroundAmbience = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse will-change-[opacity,transform]"></div>
    <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-pink-900/20 rounded-full blur-[100px] animate-pulse will-change-[opacity,transform]"></div>
  </div>
);

/* ============ ABOUT PAGE ============ */
const About = () => (
  <div className="pt-32 pb-20 min-h-screen max-w-5xl mx-auto px-6 relative z-10">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="text-center mb-12">
        <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Who We Are</span>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-white inline-block drop-shadow-xl leading-tight">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">THE FEST</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#FFE500]/30 transition-all cursor-default shadow-xl">
             <p className="mb-4">
              <strong className="text-white text-xl">Ace Event Management</strong> brings you the biggest Holi celebration in Nashik!
            </p>
            <p>
              Colour Fest 2026 is not just an event; it's a massive explosion of joy, music, dance, and vibrant colours. Join thousands of party-goers for a day you'll never forget.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#FFE500]/30 transition-all shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#FFE500]/20 p-3 rounded-full text-[#FFE500] text-xl">📅</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
                  <p className="text-white font-bold text-lg">08 March 2026 (Sunday)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#FFE500]/20 p-3 rounded-full text-[#FFE500] text-xl">⏰</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Time</p>
                  <p className="text-white font-bold text-lg">11 AM Onwards</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#FFE500]/20 p-3 rounded-full text-[#FFE500] text-xl">📍</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Venue</p>
                  <p className="text-white font-bold text-lg">Peruchi Wadi, Nashik</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#FFE500]/30 transition-all shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE500]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#FFE500]/20 transition-all"></div>
          <h3 className="text-2xl font-bold text-white mb-6 font-heading">What to Expect</h3>
          <ul className="space-y-4">
            {["Professional DJ & Live Music", "Live Dance Performances", "Rain Dance Arena", "Fun Games & Entertainment", "100% Organic Colours", "Lucky Draw with Prizes", "Food Stalls & Refreshments", "Bubble Guns", "Dedicated Kids Zone", "Professional Holi Photoshoot"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 group/item">
                <span className="text-[#FFE500] text-xl group-hover/item:scale-125 transition-transform">✓</span>
                <span className="text-gray-200 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
);

/* ============ FAQ PAGE ============ */
const FAQItem = ({ q, a, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'bg-white/10 border-[#FFE500]/50 shadow-[0_0_15px_rgba(255,229,0,0.1)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-6 text-left">
        <span className={`font-bold text-lg ${open ? 'text-[#FFE500]' : 'text-white'}`}>{q}</span>
        <ChevronDown className={`text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-[#FFE500]' : ''}`} size={24} />
      </button>
      <AnimatePresence>
        {open && (
           <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="overflow-hidden"
           >
             <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
               {a}
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => (
  <div className="pt-32 pb-20 min-h-screen max-w-4xl mx-auto px-6 relative z-10">
    <div className="text-center mb-12">
       <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Help Center</span>
       <h1 className="text-5xl md:text-7xl font-heading font-black text-white inline-block drop-shadow-xl">
         YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">QUESTIONS</span>
       </h1>
    </div>

    <div className="space-y-4">
      <FAQItem i={0} q="What is Colour Fest 2026?" a="Colour Fest 2026 is the biggest Holi celebration in Nashik, organized by Ace Event Management. It features live DJs, dance performances, rain dance, organic colours, food, games, and much more!" />
      <FAQItem i={1} q="When and where is the event?" a="The event is on 08 March 2026 (Sunday), starting at 11 AM onwards at Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik." />
      <FAQItem i={2} q="Are the colours safe?" a="Yes! We use only 100% organic, eco-friendly colours that are completely safe for skin and hair." />
      <FAQItem i={3} q="Is there a kids zone?" a="Absolutely! We have a dedicated kids zone with safe activities for children of all ages." />
      <FAQItem i={4} q="What about food?" a="Multiple food stalls will be available with delicious food and refreshing drinks throughout the event." />
      <FAQItem i={5} q="How do I get my pass?" a="Click 'Buy Tickets' on this website which redirects to Razorpay secure payment. After purchase, you'll receive a confirmation email." />
      <FAQItem i={6} q="Can I get a refund?" a="Passes are non-refundable just like our memories are permanent! However, they are transferable — you can pass it on to a friend if you can't make it." />
      <FAQItem i={7} q="Is parking available?" a="Yes, we have ample parking space available near the venue for free." />
      <FAQItem i={8} q="How do I become a sponsor?" a="We'd love to partner with you! For sponsorship and stall enquiries, contact us at 9527906995 or 8446332762." />
    </div>
  </div>
);

/* ============ CONTACT PAGE ============ */
const Contact = () => (
  <div className="pt-32 pb-20 min-h-screen max-w-6xl mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
       <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Get in Touch</span>
       <h1 className="text-5xl md:text-7xl font-heading font-black text-white inline-block drop-shadow-xl">
         CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">US</span>
       </h1>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 hover:border-[#FFE500]/30 transition-all shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-8 font-heading">Contact Details</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="bg-[#FFE500]/10 p-4 rounded-2xl text-[#FFE500] group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Call Us</p>
                <a href="tel:9527906995" className="text-2xl font-bold text-white hover:text-[#FFE500] transition-colors block">9527906995</a>
                <a href="tel:8446332762" className="text-2xl font-bold text-white hover:text-[#FFE500] transition-colors block">8446332762</a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-[#FFE500]/10 p-4 rounded-2xl text-[#FFE500] group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Email Us</p>
                <a href="mailto:aceeventmanagemant@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-[#FFE500] transition-colors break-all">
                  aceeventmanagemant@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-[#FFE500]/10 p-4 rounded-2xl text-[#FFE500] group-hover:scale-110 transition-transform">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Visit Us</p>
                <p className="text-xl text-white font-medium">Peruchi Wadi Chulivarchi Misal,<br/>Mungsare, Nashik</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#FFE500]/30 transition-all shadow-xl">
           <p className="text-gray-400 text-sm mb-4">Follow us for updates & styling tips!</p>
           <a href="https://instagram.com/ace_event_managers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FFE500] font-bold text-xl hover:scale-105 transition-transform">
             <Instagram size={24} /> @ace_event_managers
           </a>
        </div>
      </div>

      <motion.div
        initial={{ rotate: 2, scale: 0.9 }}
        whileInView={{ rotate: -2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 h-[500px] bg-white/5 p-2"
      >
        <div className="rounded-[2.5rem] overflow-hidden h-full w-full">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.79!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </div>
);

/* ============ APP ============ */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-white font-body selection:bg-[#FFE500] selection:text-black">
        <ParticleBackground />
        <BackgroundAmbience />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
