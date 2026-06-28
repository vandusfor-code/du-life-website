import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';

const steps = [
  {
    id: 1,
    headline: "You can't\nremember\neverything.",
    body: 'The keys, the warranty, the wifi password. Your mind has better things to do.',
  },
  {
    id: 2,
    headline: 'Just send\na message.',
    body: 'Text or voice-note to Du Life on WhatsApp. Like messaging a friend. Nothing to set up.',
  },
  {
    id: 3,
    headline: "It's saved\nin a second.",
    body: 'Du Life reads it, understands context, and stores it securely. Done.',
  },
  {
    id: 4,
    headline: 'Weeks\ngo by.',
    body: "You forget \u2014 that\u2019s the point. Your brain moves on. Du Life holds the thread.",
  },
  {
    id: 5,
    headline: 'Ask.\nIt answers.',
    body: '"Where are the car keys?" — In the blue vase. Saved June 28.',
  },
];

// Full-bleed marquee strip between sections
const Marquee = () => {
  const words = ['REMEMBER · ', 'RECALL · ', 'RETAIN · ', 'REMEMBER · ', 'RECALL · ', 'RETAIN · '];
  const repeated = [...words, ...words]; // doubled for seamless loop
  return (
    <div style={{
      overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '18px 0', userSelect: 'none',
    }}>
      <div className="marquee-track">
        {repeated.map((w, i) => (
          <span key={i} style={{
            fontSize: 'clamp(11px, 1.2vw, 14px)', fontWeight: 500,
            color: 'rgba(240,240,240,0.18)', letterSpacing: '0.16em', marginRight: 0,
          }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
};

export const StorySection = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <Marquee />

      <section style={{ background: '#070707', position: 'relative' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>

            {/* ── LEFT: full-height scroll steps ── */}
            <div style={{ padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              {steps.map((step, idx) => {
                const isActive = active === step.id;
                return (
                  <motion.div
                    key={step.id}
                    onViewportEnter={() => setActive(step.id)}
                    viewport={{ amount: 0.5 }}
                    style={{
                      minHeight: '70vh',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingTop: idx === 0 ? '15vh' : 0,
                      paddingBottom: idx === steps.length - 1 ? '15vh' : 0,
                    }}
                  >
                    {/* Large step number — structural, not decorative */}
                    <motion.span
                      animate={{ opacity: isActive ? 0.18 : 0.07 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: 11, fontWeight: 500, color: '#f0f0f0',
                        letterSpacing: '0.12em', marginBottom: 32, display: 'block',
                      }}
                    >
                      {String(step.id).padStart(2, '0')} / {steps.length.toString().padStart(2, '0')}
                    </motion.span>

                    {/* Headline — line breaks are intentional, creates shape */}
                    <motion.h2
                      animate={{ opacity: isActive ? 1 : 0.2 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        fontSize: 'clamp(36px, 4.5vw, 64px)',
                        fontWeight: 600,
                        letterSpacing: '-0.035em',
                        lineHeight: 1.08,
                        color: '#f0f0f0',
                        margin: '0 0 24px 0',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {step.headline}
                    </motion.h2>

                    <motion.p
                      animate={{ opacity: isActive ? 0.5 : 0.12 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        fontSize: 16, fontWeight: 300, color: '#f0f0f0',
                        lineHeight: 1.7, maxWidth: 360,
                        margin: 0, letterSpacing: '-0.005em',
                      }}
                    >
                      {step.body}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>

            {/* ── RIGHT: sticky phone ── */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <div style={{ position: 'sticky', top: '15vh', paddingTop: '15vh' }}>
                <PhoneMockup step={active} />
              </div>
            </div>

          </div>
        </div>

        {/* Mobile — simple stack */}
        <style>{`
          @media (max-width: 768px) {
            .story-grid { grid-template-columns: 1fr !important; }
            .story-phone { display: none !important; }
          }
        `}</style>
      </section>

      <Marquee />
    </>
  );
};
