import { motion } from 'framer-motion';
import { Ticket, Star, Users, Heart, Crown, ShieldCheck, Zap } from 'lucide-react';

const Tickets = () => {
  const tiers = [
    {
      name: "VIP",
      icon: <Crown className="text-yellow-400" size={32} />,
      earlyBird: "899",
      actual: "999",
      perPerson: true,
      specialty: "Entry + Premium Experience + Organic Colours",
      color: "from-yellow-400 to-orange-500",
      features: [],
      link: "https://rzp.io/rzp/piELYEN",
      popular: true
    },
    {
      name: "Stag",
      icon: <Zap className="text-blue-400" size={32} />,
      earlyBird: "599",
      actual: "699",
      perPerson: true,
      specialty: "Entry + Best Stage View + Organic Colours",
      color: "from-blue-400 to-cyan-500",
      features: [],
      link: "https://rzp.io/rzp/eMjk7Nq"
    },
    {
      name: "Couple",
      icon: <Heart className="text-pink-400" size={32} />,
      earlyBird: "899",
      actual: "999",
      perPerson: false,
      specialty: "Entry + Best Stage View + Organic Colours",
      color: "from-pink-400 to-rose-500",
      features: [],
      link: "https://rzp.io/rzp/ejFH1Oar"
    },
    {
      name: "Group",
      icon: <Users className="text-purple-400" size={32} />,
      earlyBird: "499",
      actual: "599",
      perPerson: true,
      note: "Min 5 members",
      specialty: "Entry + Best Stage View + Organic Colours",
      color: "from-purple-400 to-indigo-500",
      features: [],
      link: "https://rzp.io/rzp/fiXP7PZv"
    },
    {
      name: "Family",
      icon: <ShieldCheck className="text-green-400" size={32} />,
      earlyBird: "499",
      actual: "599",
      perPerson: true,
      specialty: "Entry + Best Stage View + Organic Colours",
      color: "from-green-400 to-teal-500",
      features: [],
      link: "https://rzp.io/rzp/Top7FIe0"
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">Join the Celebration</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white inline-block drop-shadow-xl mb-6">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE500] to-orange-500">PASS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the vibrant colors of Holi with our curated ticket tiers. Secure your spot now and get ready for an unforgettable celebration!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 transition-all hover:bg-white/10 hover:border-white/20 shadow-2xl ${tier.popular ? 'border-[#FFE500]/30 shadow-[#FFE500]/10 ring-2 ring-[#FFE500]/20' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black uppercase tracking-tighter px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${tier.color} bg-opacity-10 group-hover:scale-110 transition-transform shadow-lg`}>
                   {tier.icon}
                </div>
                <div className="text-right">
                   <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Pass Category</p>
                   <h3 className="text-3xl font-heading font-black text-white">{tier.name}</h3>
                </div>
              </div>

              <div className="mb-8 p-6 bg-black/40 rounded-3xl border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">₹{tier.earlyBird}</span>
                  <span className="text-xl text-gray-500 line-through font-medium">₹{tier.actual}</span>
                </div>
                <p className="text-xs text-[#FFE500] font-bold tracking-widest uppercase">
                    Early Bird Price {tier.perPerson ? 'PP' : ''}
                    {tier.note && <span className="text-gray-400 lowercase ml-2">({tier.note})</span>}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold text-gray-300 italic">" {tier.specialty} "</p>
                <div className="h-px w-full bg-white/10"></div>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tier.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black italic tracking-widest text-lg transition-all transform hover:scale-[1.02] shadow-xl ${tier.popular ? 'bg-[#FFE500] text-black shadow-yellow-500/20' : 'bg-white text-black hover:bg-[#FFE500]'}`}
              >
                <span>BOOK</span>
                <Ticket size={20} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400 mb-2">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-white font-bold">Secure Payment</h4>
              <p className="text-xs text-gray-400">Encrypted via Razorpay</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-yellow-500/20 rounded-2xl text-yellow-400 mb-2">
                <Star size={32} />
              </div>
              <h4 className="text-white font-bold">Official Entry</h4>
              <p className="text-xs text-gray-400">QR Based Digital Passes</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-pink-500/20 rounded-2xl text-pink-400 mb-2">
                <Heart size={32} />
              </div>
              <h4 className="text-white font-bold">Safe Environment</h4>
              <p className="text-xs text-gray-400">100% Organic Colours</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tickets;
