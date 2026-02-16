import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import Home from './pages/Home';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

/* ============ ABOUT PAGE ============ */
const About = () => (
  <div className="pt-24 pb-20 min-h-screen max-w-4xl mx-auto px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        About Colour Fest 2026
      </h1>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg">
          <strong className="text-white">Ace Event Management</strong> brings you the biggest Holi celebration in Nashik!
          Colour Fest 2026 is a vibrant, fun-filled day of music, dance, and colours that will leave you with memories to last a lifetime.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-bold text-white">What to Expect</h3>
          <ul className="space-y-2">
            {["Professional DJ & Live Music", "Live Dance Performances", "Rain Dance Arena", "Fun Games & Entertainment", "100% Organic Colours", "Lucky Draw with Prizes", "Food Stalls & Refreshments", "Bubble Guns", "Dedicated Kids Zone", "Professional Holi Photoshoot"].map((item, i) => (
              <li key={i} className="flex items-center gap-2"><span className="text-primary">✓</span> {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-3">Event Details</h3>
          <p>📅 <strong>Date:</strong> 08 March 2026 (Sunday)</p>
          <p>⏰ <strong>Time:</strong> 11 AM Onwards</p>
          <p>📍 <strong>Venue:</strong> Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik</p>
          <p>🤝 <strong>Venue Partner:</strong> Peruchi Wadi (पेरूची वाडी)</p>
        </div>
      </div>
    </motion.div>
  </div>
);

/* ============ FAQ PAGE ============ */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors">
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} size={20} />
      </button>
      {open && <div className="px-4 pb-4 text-gray-400 text-sm">{a}</div>}
    </div>
  );
};

const FAQ = () => (
  <div className="pt-24 pb-20 min-h-screen max-w-3xl mx-auto px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Frequently Asked Questions
      </h1>
      <div className="space-y-3">
        <FAQItem q="What is Colour Fest 2026?" a="Colour Fest 2026 is the biggest Holi celebration in Nashik, organized by Ace Event Management. It features live DJs, dance performances, rain dance, organic colours, food, games, and much more!" />
        <FAQItem q="When and where is the event?" a="The event is on 08 March 2026 (Sunday), starting at 11 AM onwards at Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik." />
        <FAQItem q="Are the colours safe?" a="Yes! We use only 100% organic, eco-friendly colours that are completely safe for skin and hair." />
        <FAQItem q="Is there a kids zone?" a="Absolutely! We have a dedicated kids zone with safe activities for children of all ages." />
        <FAQItem q="What about food?" a="Multiple food stalls will be available with delicious food and refreshing drinks throughout the event." />
        <FAQItem q="How do I get my pass?" a="Click 'Buy Tickets' on this website, fill in the registration form, and complete payment via Razorpay. You'll receive a confirmation." />
        <FAQItem q="Can I get a refund?" a="Passes are non-refundable. However, they are transferable — you can pass it on to a friend!" />
        <FAQItem q="Is parking available?" a="Yes, ample parking is available near the venue." />
        <FAQItem q="How do I become a sponsor or get a stall?" a="For sponsorship and stall enquiries, contact us at 9527906995 or 8446332762." />
      </div>
    </motion.div>
  </div>
);

/* ============ CONTACT PAGE ============ */
const Contact = () => (
  <div className="pt-24 pb-20 min-h-screen max-w-4xl mx-auto px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Contact Us
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={20} className="text-primary" />
              <div>
                <a href="tel:9527906995" className="hover:text-white transition-colors block">9527906995</a>
                <a href="tel:8446332762" className="hover:text-white transition-colors block">8446332762</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={20} className="text-primary" />
              <span>aceeventmanagemant@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin size={20} className="text-primary mt-1" />
              <span>Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">For Enquiries</h3>
            <p className="text-gray-400 text-sm">Passes | Sponsorships | Stalls</p>
            <p className="text-gray-400 text-sm mt-1">Follow us on Instagram: <a href="https://instagram.com/ace_event_managers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ace_event_managers</a></p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.79!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1000000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '350px' }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </motion.div>
  </div>
);



/* ============ APP ============ */
function App() {
  return (
    <Router>
      <div className="min-h-screen text-white font-body">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
