import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    { title: "Audio Visuals", icon: "🎧", desc: "Top DJs spinning the hottest tracks all day long." },
    { title: "Live Dance", icon: "💃", desc: "Electrifying dance shows to keep the energy high." },
    { title: "Rain Dance", icon: "🌧️", desc: "Cool off with our massive rain dance arena." },
    { title: "Fun Games", icon: "🎯", desc: "Exciting games and activities for all ages." },
    { title: "Organic Colours", icon: "🎨", desc: "100% safe, eco-friendly organic colours." },
    { title: "Lucky Draw", icon: "🎰", desc: "Win amazing prizes in our lucky draw." },
    { title: "Food Stalls", icon: "🍔", desc: "Delicious food from the best local vendors." },
    { title: "Bubble Guns", icon: "🫧", desc: "Fun bubble guns for an extra splash of joy." },
    { title: "Kids Zone", icon: "🧒", desc: "Safe and fun area specially designed for children." },
    { title: "Photoshoot", icon: "📸", desc: "Professional photography to capture your colorful moments." },
  ];

  const sponsors = [
    { name: "Wasan Toyota", role: "Silver Sponsor", icon: "🚗" },
    { name: "News18", role: "Media Partner", icon: "📺" },
    { name: "ABS Fitness", role: "Fitness Partner", icon: "💪" },
    { name: "Yashodhan", role: "Associate Sponsor", icon: "🤝" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-[#FFE500] selection:text-black">
      <Hero />



      {/* Features / What to Expect */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Explore the Fun</span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white inline-block drop-shadow-xl">
            WHAT TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">EXPECT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotate: 2, scale: 1.05 }}
              className="relative group cursor-default"
            >
              {/* Sticker Style Card */}
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center shadow-xl group-hover:border-[#FFE500]/50 group-hover:bg-[#FFE500]/10 group-hover:shadow-[0_0_30px_rgba(255,229,0,0.2)] transition-all duration-300">
                <motion.div
                  className="text-5xl mb-4 filter drop-shadow-lg"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-heading group-hover:text-[#FFE500] transition-colors">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium group-hover:text-gray-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
             {/* Map Side (Rotated Sticker Look) */}
            <motion.div
              initial={{ rotate: -2, scale: 0.9 }}
              whileInView={{ rotate: 2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/5 backdrop-blur-sm p-2"
            >
               <div className="rounded-[2.5rem] overflow-hidden h-full w-full">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.79!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
               </div>
            </motion.div>

            {/* Text Side */}
            <div className="order-1 lg:order-2 text-right lg:text-left">
               <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-2 block">The Location</span>
               <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-none">
                 THE<br/>VENUE
               </h2>
               <p className="text-2xl text-gray-300 mb-8 font-light border-r-4 lg:border-r-0 lg:border-l-4 border-[#FFE500] pr-6 lg:pl-6 lg:pr-0">
                 Peruchi Wadi Chulivarchi Misal,<br/>Mungsare, Nashik
               </p>
               <motion.a
                  href="https://maps.google.com/?q=Peruchi+Wadi+Chulivarchi+Misal+Mungsare+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFE500] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,229,0,0.5)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📍 GET DIRECTIONS</span>
                </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-gray-500 uppercase tracking-[0.3em] mb-16"
          >
            Official Partners
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FFE500]/30 transition-all cursor-default group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <p className="text-[10px] text-[#FFE500] uppercase tracking-widest font-bold mb-2">{s.role}</p>
                <p className="text-lg font-bold text-white font-heading">{s.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
