import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// The live "memory feed" — reads like a system log, not a bullet list
const feed = [
  { time: '07:14', text: 'Internet bill due tomorrow' },
  { time: '07:14', text: 'Passport expires in 6 months' },
  { time: '07:15', text: 'Samsung warranty — still active' },
  { time: '07:15', text: 'You spent $48 yesterday' },
  { time: '07:16', text: 'Mike requested a shift change' },
];

// One item types in at a time, then the next
function useFeedReveal(count: number, speed = 38) {
  const [revealed, setRevealed] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const item = feed[revealed] ?? null;

  useEffect(() => {
    if (!item) return;
    if (charIndex < item.text.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      // Pause, then move to next item
      const t = setTimeout(() => {
        if (revealed < count - 1) {
          setRevealed(r => r + 1);
          setCharIndex(0);
        }
      }, 480);
      return () => clearTimeout(t);
    }
  }, [charIndex, revealed, item, count, speed]);

  return { revealed, charIndex };
}

export const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { revealed, charIndex } = useFeedReveal(feed.length);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        paddingBottom: '10vh',
        background: '#070707',
      }}
    >

      {/* ── Enormous background text — layout is the design ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -54%)',
          whiteSpace: 'nowrap',
          fontSize: 'clamp(120px, 22vw, 340px)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.045)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        MEMORY
      </div>

      {/* ── Live feed — top-left, like an OS notification log ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: 560,
          padding: '0 24px',
        }}
      >
        {/* Greeting */}
        <p style={{ fontSize: 13, color: 'rgba(240,240,240,0.35)', marginBottom: 28, fontWeight: 400 }}>
          Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}.
        </p>

        {/* Feed rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {feed.map((item, i) => {
            const isDone = i < revealed;
            const isCurrent = i === revealed;
            const isHidden = i > revealed;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 16,
                  opacity: isHidden ? 0 : isDone ? 0.55 : 1,
                  transition: 'opacity 0.4s',
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 400, color: 'rgba(240,240,240,0.3)', fontVariantNumeric: 'tabular-nums', flexShrink: 0, letterSpacing: '0.04em' }}>
                  {item.time}
                </span>
                <span style={{ fontSize: 16, fontWeight: 300, color: '#f0f0f0', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                  {isCurrent ? item.text.slice(0, charIndex) : item.text}
                  {isCurrent && charIndex < item.text.length && <span className="cursor-blink" />}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Bottom: product identity + CTA ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1120, margin: '0 auto', padding: '0 32px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>

          {/* Headline — weight contrast is the typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#f0f0f0',
              margin: 0,
            }}>
              Du Life
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: 'rgba(240,240,240,0.45)',
              margin: '10px 0 0 2px',
            }}>
              Your second memory.
            </p>
          </motion.div>

          {/* CTA + meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}
          >
            <button
              onClick={() => window.open('https://wa.me/your_number_here', '_blank')}
              style={{
                fontSize: 14, fontWeight: 500, color: '#070707',
                background: '#f0f0f0', border: 'none',
                padding: '13px 28px', borderRadius: 99, cursor: 'pointer',
                transition: 'opacity 0.2s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Start on WhatsApp
            </button>
            <span style={{ fontSize: 12, color: 'rgba(240,240,240,0.3)' }}>
              No download. No account.
            </span>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
