import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, Pause, FileText, X, Check } from 'lucide-react';

// A full realistic conversation — this IS the product demo
const conversation = [
  { role: 'user', text: 'My passport is in the second drawer of the bedroom dresser.', time: 'Mar 12, 10:14' },
  { role: 'bot',  text: 'Got it. I\'ll remember that.', time: 'Mar 12, 10:14' },
  { role: 'user', text: 'Spent 42,000 COP on lunch at Pesquera Jaramillo.', time: 'Apr 3, 13:22' },
  { role: 'bot',  text: 'Saved. Food & dining. ~$10.50 USD.', time: 'Apr 3, 13:22' },
  { role: 'user', text: 'Mike is switching to my Thursday afternoon shift.', time: 'Apr 18, 09:05' },
  { role: 'bot',  text: 'Noted. Mike — Thursday afternoon.', time: 'Apr 18, 09:05' },
  { role: 'divider', text: '3 months later' },
  { role: 'user', text: 'Where is my passport?', time: 'Jun 28, 08:01' },
  { role: 'bot',  text: 'Second drawer of the bedroom dresser. You told me this on March 12.', time: 'Jun 28, 08:01' },
  { role: 'user', text: 'When does my Samsung TV warranty expire?', time: 'Jun 28, 08:02' },
  { role: 'bot',  text: 'December 2027. 18 months from now. Want me to open the invoice PDF?', time: 'Jun 28, 08:02' },
];

const stats = [
  { n: '<1s',    label: 'to save any memory' },
  { n: '100%',   label: 'private, end-to-end' },
  { n: '∞',      label: 'storage, no limits' },
];

export const UseCasesGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showModal, setShowModal] = useState(false);
  const voiceText = 'Call Sarah about the Thursday shift change.';

  // Reveal messages one-by-one as section enters view
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const t = setInterval(() => {
      setVisibleCount(v => v + 1);
      i++;
      if (i >= conversation.length) clearInterval(t);
    }, 300);
    return () => clearInterval(t);
  }, [inView]);

  // Voice typewriter
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      setTranscript('');
      let i = 0;
      timer = setInterval(() => {
        if (i < voiceText.length) { setTranscript(p => p + voiceText[i]); i++; }
        else { setIsPlaying(false); clearInterval(timer); }
      }, 42);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <>
      <section ref={ref} style={{ background: '#070707', padding: '120px 0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px' }}>

          {/* Section label — small, left-aligned, not a headline */}
          <p style={{ fontSize: 12, fontWeight: 500, color: 'rgba(240,240,240,0.25)', letterSpacing: '0.14em', marginBottom: 64 }}>
            HOW IT ACTUALLY WORKS
          </p>

          {/* The conversation — full width, no cards */}
          <div style={{ maxWidth: 540, marginBottom: 80 }}>
            <AnimatePresence>
              {conversation.map((msg, i) => {
                if (i >= visibleCount) return null;
                if (msg.role === 'divider') {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        margin: '40px 0', display: 'flex', alignItems: 'center', gap: 16,
                      }}
                    >
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
                      <span style={{ fontSize: 11, color: 'rgba(240,240,240,0.25)', letterSpacing: '0.1em', fontWeight: 500 }}>
                        {msg.text}
                      </span>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
                    </motion.div>
                  );
                }
                const isUser = msg.role === 'user';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start',
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ maxWidth: '78%' }}>
                      <div style={{
                        padding: '10px 15px',
                        background: isUser ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                        fontSize: 14, fontWeight: 300, color: '#f0f0f0',
                        lineHeight: 1.5, letterSpacing: '-0.005em',
                      }}>
                        {msg.text}
                      </div>
                      <p style={{
                        fontSize: 10, color: 'rgba(240,240,240,0.22)', margin: '4px 4px 0',
                        textAlign: isUser ? 'right' : 'left',
                      }}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Voice note row — inline, part of the conversation */}
            {visibleCount >= conversation.length && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}
              >
                <div style={{ maxWidth: '78%' }}>
                  <div style={{
                    padding: '10px 15px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '18px 18px 4px 18px',
                    display: 'flex', alignItems: 'center', gap: 12, minWidth: 220,
                  }}>
                    <button
                      onClick={() => setIsPlaying(p => !p)}
                      style={{
                        width: 32, height: 32, borderRadius: '50%', background: '#f0f0f0',
                        border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', flexShrink: 0, transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black text-black" /> : <Play className="w-3.5 h-3.5 fill-black text-black ml-px" />}
                    </button>
                    {/* Waveform bars */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, height: 24 }}>
                      {Array.from({ length: 28 }).map((_, i) => {
                        const h = 20 + Math.sin(i * 0.8) * 14 + Math.cos(i * 1.4) * 8;
                        return (
                          <motion.div
                            key={i}
                            style={{ width: 2.5, borderRadius: 2, background: 'rgba(240,240,240,0.25)' }}
                            animate={isPlaying ? { height: [`${h}%`, `${Math.min(h * 2, 100)}%`, `${h}%`], opacity: [0.25, 0.85, 0.25] } : { height: `${h}%`, opacity: 0.25 }}
                            transition={isPlaying ? { repeat: Infinity, duration: 0.5 + (i % 5) * 0.1, delay: i * 0.025, ease: 'easeInOut' } : {}}
                          />
                        );
                      })}
                    </div>
                  </div>
                  {/* Transcription below the bubble */}
                  {(isPlaying || transcript) && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ fontSize: 11, color: 'rgba(240,240,240,0.4)', margin: '6px 4px 0', textAlign: 'right', fontStyle: 'italic' }}
                    >
                      {transcript}{isPlaying && transcript.length < voiceText.length && <span className="cursor-blink" />}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Invoice row — inline */}
            {visibleCount >= conversation.length && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}
              >
                <div style={{ maxWidth: '78%' }}>
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      padding: '10px 15px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '18px 18px 4px 18px',
                      display: 'flex', alignItems: 'center', gap: 10,
                      cursor: 'pointer', textAlign: 'left',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                  >
                    <FileText style={{ width: 16, height: 16, color: 'rgba(240,240,240,0.5)', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 400, color: '#f0f0f0', margin: 0 }}>Samsung_TV_Invoice.pdf</p>
                      <p style={{ fontSize: 11, color: 'rgba(240,240,240,0.35)', margin: '2px 0 0' }}>Warranty expires Dec 2027</p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Stats — three lines, full width, typographic */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 64 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '32px 0',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    paddingRight: 40, paddingLeft: i > 0 ? 40 : 0,
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 600,
                    letterSpacing: '-0.04em', color: '#f0f0f0', margin: '0 0 8px',
                  }}>
                    {s.n}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(240,240,240,0.4)', margin: 0 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Invoice modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(16px)', zIndex: 100,
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#111', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24, width: '100%', maxWidth: 520,
                maxHeight: '80vh', overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Bar */}
              <div style={{
                padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <FileText style={{ width: 16, height: 16, color: 'rgba(240,240,240,0.5)' }} />
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#f0f0f0' }}>Samsung_TV_Invoice.pdf</span>
                </div>
                <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,240,240,0.4)', padding: 4, display: 'flex' }}>
                  <X style={{ width: 16, height: 16 }} />
                </button>
              </div>
              {/* PDF mock */}
              <div style={{ flex: 1, overflowY: 'auto', background: '#fff', padding: 32, fontFamily: 'system-ui', fontSize: 13, color: '#111' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div><p style={{ fontSize: 20, fontWeight: 700, margin: '0 0 2px' }}>SAMSUNG</p><p style={{ color: '#888', margin: 0, fontSize: 11 }}>Samsung Electronics America</p></div>
                  <div style={{ textAlign: 'right' }}><p style={{ fontWeight: 600, margin: '0 0 2px' }}>Invoice</p><p style={{ color: '#888', margin: 0, fontSize: 11 }}>#INV-2025-991 · Dec 28, 2025</p></div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 24 }} />
                {/* Extracted warranty — the Du Life highlight */}
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '12px 16px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Check style={{ width: 12, height: 12, color: '#fff' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#15803d', margin: '0 0 3px' }}>Du Life found this</p>
                    <p style={{ fontSize: 12, color: '#166534', margin: 0 }}>Warranty: 24 months · Expires <strong>December 28, 2027</strong></p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24, fontSize: 12 }}>
                  <div><p style={{ color: '#999', fontWeight: 600, letterSpacing: '0.08em', fontSize: 10, marginBottom: 4 }}>BILLED TO</p><p style={{ margin: 0, fontWeight: 500 }}>Alex Mercer</p><p style={{ margin: 0, color: '#888' }}>alex@example.com</p></div>
                  <div><p style={{ color: '#999', fontWeight: 600, letterSpacing: '0.08em', fontSize: 10, marginBottom: 4 }}>PRODUCT</p><p style={{ margin: 0, fontWeight: 500 }}>Samsung Neo QLED 65"</p><p style={{ margin: 0, color: '#888' }}>QN65QN90CAFXZA</p></div>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead><tr style={{ borderBottom: '1px solid #eee' }}><th style={{ textAlign: 'left', padding: '6px 0', fontWeight: 600, color: '#999', fontSize: 10, letterSpacing: '0.08em' }}>DESCRIPTION</th><th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 600, color: '#999', fontSize: 10, letterSpacing: '0.08em' }}>PRICE</th></tr></thead>
                  <tbody><tr><td style={{ padding: '10px 0', borderBottom: '1px solid #f5f5f5', fontWeight: 500 }}>Samsung Neo QLED 4K TV (65")</td><td style={{ textAlign: 'right', padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>$1,499.99</td></tr></tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                  <div style={{ width: 160 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: 6 }}><span>Subtotal</span><span>$1,499.99</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: 10 }}><span>Tax (8%)</span><span>$120.00</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 14 }}><span>Total</span><span>$1,619.99</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
