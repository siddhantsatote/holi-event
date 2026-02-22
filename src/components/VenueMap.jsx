import { motion } from 'framer-motion';

const LEGEND = [
  { label: 'Stage',         color: '#FF2244' },
  { label: 'VIP Zone',      color: '#9B59B6' },
  { label: 'Couples',       color: '#F1C40F' },
  { label: 'Family Group',  color: '#7DC62E' },
  { label: 'General Floor', color: '#3BB5E8' },
  { label: 'Food Stall',    color: '#FF9933' },
];

const VenueMap = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-bold tracking-widest text-[#FFE500] uppercase mb-3 block">
            Ace Event Managers · Nashik
          </span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white inline-block drop-shadow-xl">
            VENUE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5EE5] to-[#FFD700]">
              MAP
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 tracking-wide">
            📍 Colour Fest 2026 · Floor Plan
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[28px] overflow-hidden"
          style={{
            background: '#110E22',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 0 1px rgba(255,94,229,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(255,94,229,0.05)',
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center justify-between flex-wrap gap-3 px-6 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div>
              <p className="text-[10px] tracking-[3px] uppercase mb-1" style={{ color: 'rgba(255,180,255,0.5)' }}>
                Colour Fest 2026
              </p>
              <h3
                className="text-2xl md:text-3xl font-heading tracking-widest leading-none"
                style={{
                  background: 'linear-gradient(90deg,#FFD700,#FF5EE5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                HOLI FESTIVAL FLOOR PLAN
              </h3>
            </div>
            <span
              className="text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full"
              style={{ color: '#FF9EF5', background: 'rgba(255,94,229,0.12)', border: '1px solid rgba(255,94,229,0.25)' }}
            >
              🗺️ Venue Layout
            </span>
          </div>

          {/* Floor plan image */}
          <div className="w-full bg-white p-4 md:p-8">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/470b2613-088f-4fa0-a558-0d09972255eb/Gemini_Generated_Image_tjfiv6tjfiv6tjfi-1771780614512.png"
              alt="Holi Festival Floor Plan"
              className="w-full h-auto object-contain rounded-xl"
              style={{ maxHeight: '640px' }}
            />
          </div>

          {/* Card footer */}
          <div
            className="flex items-center justify-between flex-wrap gap-3 px-6 py-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Legend */}
            <div className="flex flex-wrap gap-2">
              {LEGEND.map(l => (
                <span
                  key={l.label}
                  className="flex items-center gap-1.5"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    padding: '4px 11px',
                    letterSpacing: '0.5px',
                  }}
                >
                  <span
                    style={{
                      width: 9, height: 9, borderRadius: '50%',
                      background: l.color, flexShrink: 0, display: 'inline-block',
                    }}
                  />
                  {l.label}
                </span>
              ))}
            </div>
            {/* Info chips */}
            <div className="flex gap-2 flex-wrap">
              {[
                { label: 'Entry / Exit', val: '← Left Side' },
                { label: 'Food Stall',   val: 'Right Rear'  },
              ].map(c => (
                <div
                  key={c.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '7px 14px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                    {c.label}
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginTop: '1px' }}>
                    {c.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueMap;
