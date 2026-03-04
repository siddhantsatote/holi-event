import Hero from '../components/Hero';
import VenueMap from '../components/VenueMap';
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
    { title: "Kids Zone", icon: "🧒", desc: "Safe and fun area specially designed for children." },
    { title: "Photoshoot", icon: "📸", desc: "Professional photography to capture your colorful moments." },
  ];

    const sponsors = [
      { name: "Peruchi Wadi", role: "Venue Partner", icon: "🏟️", logo: "/Peruchi Wadi-1.png" },
      { name: "Gratitude Gifts", role: "Gold Sponsor", icon: "🎁", logo: "/IMG_20250912_152211.jpg.jpeg" },
      { name: "Wasan Toyota", role: "Silver Sponsor", icon: "🚗", logo: "/Screenshot 2026-02-17 143530.png" },
      { name: "Swaraj Services", role: "Media Partner", icon: "📺", logo: "/New18.jpeg" },
      { name: "ABS Fitness", role: "Fitness Partner", icon: "💪", logo: "/IMG_20260201_132446.jpg.jpeg" },
      { name: "Yashodhan", role: "Associate Sponsor", icon: "🤝", logo: "/IMG_20250824_145253_725.webp" },
      { name: "Swaraj Services", role: "Associate Sponsor", icon: "🤝", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/470b2613-088f-4fa0-a558-0d09972255eb/IMG_20260204_131013.jpg-1-resized-1771943746287.jpeg" },
      { name: "Dhobilite", role: "Silver Sponsor", icon: "🧺", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/470b2613-088f-4fa0-a558-0d09972255eb/LOGO-transparent-bg-1771943851372.png" },
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

        {/* Event Anchor - Saylii */}
        <section className="py-24 px-4 max-w-5xl mx-auto relative z-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Your Host</span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white inline-block drop-shadow-xl">
              EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">ANCHOR</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:border-[#FFE500]/40 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFE500]/20 via-orange-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-center">
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/IMG_20260217_180734.jpg.jpeg"
                    alt="Saylii - Event Anchor"
                    className="w-full h-[500px] md:h-[550px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/80"></div>
                </motion.div>

                {/* Info */}
                <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#FFE500]/10 border border-[#FFE500]/30 rounded-full text-[#FFE500] text-xs font-bold tracking-widest uppercase mb-6">
                      🎤 Anchor
                    </span>
                    <h3 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
                      SAYLII
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
                      Get ready to be energized! Saylii will be your host, keeping the vibes high and the crowd electrified throughout the festival. 🎉
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="h-px w-12 bg-gradient-to-r from-[#FFE500] to-transparent"></div>
                      <span className="text-sm text-gray-500 font-bold tracking-wider uppercase">Holi 2026</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* DJ Lineup Section */}
        <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Feel The Beat</span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white inline-block drop-shadow-xl">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">DJs</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-medium">
              Get ready to dance to the sickest beats! Our star DJs will keep the energy pumping all day long. 🔥🎶
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* DJ Sammer */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group-hover:border-[#FFE500]/40 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#FFE500]/20 via-orange-500/20 to-red-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                
                {/* DJ Photo */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/dj-sammer-photo.png"
                    alt="DJ Sammer"
                    className="w-full h-[400px] md:h-[450px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </motion.div>

                {/* DJ Info */}
                <div className="p-6 md:p-8 text-center relative -mt-16 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#FFE500]/10 border border-[#FFE500]/30 rounded-full text-[#FFE500] text-xs font-bold tracking-widest uppercase mb-4">
                      🎧 DJ
                    </span>
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/dj-sammer-logo.png"
                        alt="DJ Sammer Logo"
                        className="h-20 md:h-24 object-contain filter drop-shadow-[0_0_15px_rgba(255,229,0,0.3)] invert"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      Dropping fire beats that'll make you lose yourself in the colors! 🔥
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* DJ Jnny */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group-hover:border-[#FFE500]/40 transition-all duration-500">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-[#FFE500]/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                
                {/* DJ Photo */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/dj-jnny-photo.jpg"
                    alt="DJ Jnny"
                    className="w-full h-[400px] md:h-[450px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </motion.div>

                {/* DJ Info */}
                <div className="p-6 md:p-8 text-center relative -mt-16 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#FFE500]/10 border border-[#FFE500]/30 rounded-full text-[#FFE500] text-xs font-bold tracking-widest uppercase mb-4">
                      🎧 DJ
                    </span>
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/dj-jnny-logo.png"
                        alt="DJ Jnny Logo"
                        className="h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(255,229,0,0.3)] invert"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      Get ready for electrifying mixes that'll keep you grooving all day! 🎶
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Venue Map 3D Interactive */}
        <VenueMap />

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.9470853149355!2d73.7265098!3d20.052659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddef550a6daebb%3A0xdf6ed42da1619d5d!2sPeruchi%20Wadi%20Chulivarachi%20Misal!5e0!3m2!1sen!2sin!4v1771314502266!5m2!1sen!2sin"
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
                 Peruchi Wadi Chulivarchi Misal,<br/>Mungsare, Nashik,<br/>Maharashtra 422003
               </p>
               <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=Peruchi+Wadi+Chulivarchi+Misal"
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {sponsors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#FFE500]/30 transition-all cursor-default group"
              >
                <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.logo ? (
                    <img 
                      src={s.logo} 
                      alt={s.name} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-lg" 
                      loading="lazy"
                      width="200"
                      height="80"
                    />
                  ) : (
                    <span className="text-4xl filter drop-shadow-lg">{s.icon}</span>
                  )}
                </div>
                <p className="text-[10px] text-[#FFE500] uppercase tracking-widest font-bold mb-2">{s.role}</p>
                <p className="text-sm font-bold text-white font-heading leading-tight">{s.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
