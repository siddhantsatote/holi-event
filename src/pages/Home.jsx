import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    { title: "Professional DJ", icon: "🎧", desc: "Top DJs spinning the hottest tracks all day long." },
    { title: "Live Dance Performances", icon: "💃", desc: "Electrifying dance shows to keep the energy high." },
    { title: "Rain Dance", icon: "🌧️", desc: "Cool off with our massive rain dance arena." },
    { title: "Fun Games", icon: "🎯", desc: "Exciting games and activities for all ages." },
    { title: "Organic Colours", icon: "🎨", desc: "100% safe, eco-friendly organic colours." },
    { title: "Lucky Draw", icon: "🎰", desc: "Win amazing prizes in our lucky draw." },
    { title: "Food Stalls", icon: "🍔", desc: "Delicious food from the best local vendors." },
    { title: "Bubble Guns", icon: "🫧", desc: "Fun bubble guns for an extra splash of joy." },
    { title: "Kids Zone", icon: "🧒", desc: "Safe and fun area specially designed for children." },
    { title: "Holi Photoshoot", icon: "📸", desc: "Professional photography to capture your colorful moments." },
  ];

  const sponsors = [
    { name: "Wasan Toyota", role: "Silver Sponsor" },
    { name: "News18", role: "Media Partner" },
    { name: "ABS Fitness", role: "Fitness Partner" },
    { name: "Yashodhan", role: "Associate Sponsor" },
  ];

  return (
    <div className="relative">
      <Hero />

      {/* Features / What to Expect */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          WHAT TO EXPECT
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Colour Fest 2026 is packed with non-stop fun, entertainment, and vibrant colours!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</div>
              <h3 className="text-sm md:text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1 hidden md:block">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-white">
            📍 VENUE
          </h2>
          <p className="text-center text-xl text-gray-300 mb-8">
            Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik
          </p>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0!2d73.79!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://maps.google.com/?q=Peruchi+Wadi+Chulivarchi+Misal+Mungsare+Nashik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">
              GET READY FOR THE BIGGEST HOLI EVENT!
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Don&apos;t miss out — limited passes available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://rzp.io/rzp/piELYEN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-lg font-bold py-4 px-10 rounded-full hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] transition-all transform hover:scale-105"
              >
                🎫 Book Your Pass Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-black/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-center mb-8 text-gray-400 uppercase tracking-wider">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
                <p className="text-xs text-primary uppercase tracking-wider mb-2">{s.role}</p>
                <p className="text-lg font-bold text-white">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
