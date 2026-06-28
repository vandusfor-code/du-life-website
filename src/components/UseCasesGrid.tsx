import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Play, Pause, Calendar, DollarSign, MapPin, Eye, X, Check } from 'lucide-react';

export const UseCasesGrid: React.FC = () => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [voiceText, setVoiceText] = useState('');
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  const transcription = 'Remember to call Sarah about the Thursday shift change.';

  useEffect(() => {
    let timer: any;
    if (isPlayingVoice) {
      setVoiceText('');
      let i = 0;
      timer = setInterval(() => {
        if (i < transcription.length) {
          setVoiceText((p) => p + transcription[i]);
          i++;
        } else {
          setIsPlayingVoice(false);
          clearInterval(timer);
        }
      }, 42);
    } else {
      setVoiceText(transcription);
    }
    return () => clearInterval(timer);
  }, [isPlayingVoice]);

  // Card styles — Apple-style surface, not "bento"
  const card = 'rounded-[24px] bg-[#0f0f0f] border border-white/[0.06] flex flex-col';

  return (
    <section className="bg-[#070707] py-24 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading — Apple uses large, restrained headlines here */}
        <div className="mb-20 max-w-xl">
          <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-tight text-[#f5f5f7] leading-tight mb-4">
            Just talk to it.
          </h2>
          <p className="text-[17px] text-[#86868b] font-light leading-relaxed">
            No forms, no folders, no friction. Whatever you would tell a person, tell Du Life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          {/* ── Card 1: Passport (2 cols) ── */}
          <div className={`${card} md:col-span-2 min-h-[320px] p-8 lg:p-10 flex-row gap-8 group overflow-hidden relative`}>

            {/* Left */}
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <p className="text-[13px] text-[#6e6e73] mb-3">You asked</p>
                <h3 className="text-[22px] font-semibold text-[#f5f5f7] tracking-tight leading-snug mb-3">
                  "Where did I save my passport?"
                </h3>
                <p className="text-[15px] text-[#86868b] font-light leading-relaxed">
                  Hover the passport to find out.
                </p>
              </div>
              <p className="text-[13px] text-[#6e6e73] mt-8">Saved March 12</p>
            </div>

            {/* Right — 3D Passport */}
            <div className="flex items-center justify-center min-w-[160px]">
              <div className="relative w-[140px] h-[195px] group-hover:scale-[1.03] transition-transform duration-500"
                   style={{ perspective: '1200px' }}>
                <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-8deg)' }}>

                  {/* Back inner page */}
                  <div className="absolute inset-0 bg-[#f7f3ea] rounded-[5px] border border-[#e5ddc8] p-3 text-black z-10 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-1">
                      <span className="text-[8px] font-bold text-zinc-500 tracking-wider">PASSPORT</span>
                      <MapPin className="w-2.5 h-2.5 text-zinc-400" />
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="w-8 h-9 bg-zinc-200 rounded-[2px] float-left mr-2">
                        <div className="w-6 h-7 bg-zinc-400 rounded-full mx-auto mt-2"></div>
                      </div>
                      <div className="text-[7px] leading-snug text-zinc-600">
                        <p className="font-bold text-zinc-800">MERCER // ALEX</p>
                        <p>P552910A · EXP 2031</p>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-md p-1.5 text-center">
                      <p className="text-[7px] text-green-600 font-medium">Second drawer</p>
                    </div>
                  </div>

                  {/* Left inner page */}
                  <div className="absolute inset-0 bg-[#ede8d8] rounded-[5px] border border-[#e5ddc8] p-3 z-[15] flex flex-col justify-between origin-left"
                       style={{ transform: 'rotateY(-12deg)', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}>
                    <div className="text-[6px] text-zinc-400">DU LIFE MEMORY VAULT</div>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl grayscale opacity-60">🌐</span>
                    </div>
                    <div className="text-[6px] text-right text-zinc-400">JUNE 2026</div>
                  </div>

                  {/* Front cover */}
                  <div className="absolute inset-0 bg-[#0f2334] rounded-[5px] shadow-[2px_5px_20px_rgba(0,0,0,0.5)] border border-[#1b3d5a] z-20 origin-left transition-transform duration-700"
                       style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}
                  >
                    <div
                      className="absolute inset-0 rounded-[5px] transition-[transform] duration-700"
                      style={{ transform: 'rotateY(0deg)' }}
                    >
                      <div className="group-hover:[transform:rotateY(-145deg)] [transform-style:preserve-3d] [backface-visibility:hidden] w-full h-full rounded-[5px] bg-[#0f2334] border border-[#1b3d5a] flex flex-col items-center justify-center gap-3 p-3 transition-[transform] duration-700 origin-left">
                        <span className="text-[8px] tracking-[0.25em] text-[#c5a059] font-bold uppercase">Passport</span>
                        <div className="w-7 h-7 rounded-full border border-[#c5a059]/40 flex items-center justify-center text-[10px]">⚜️</div>
                        <span className="text-[7px] tracking-widest text-[#c5a059]/70">DU LIFE</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ── Card 2: Receipt (1 col) ── */}
          <div
            className={`${card} min-h-[320px] p-8 overflow-hidden cursor-pointer`}
            onMouseEnter={() => setIsReceiptOpen(true)}
            onMouseLeave={() => setIsReceiptOpen(false)}
            onClick={() => setIsReceiptOpen((p) => !p)}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[13px] text-[#6e6e73] mb-2">You said</p>
                <h3 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight leading-snug">
                  "42,000 COP on lunch."
                </h3>
              </div>
              <DollarSign className="w-4 h-4 text-[#6e6e73] shrink-0 mt-1" />
            </div>

            {/* Receipt printer */}
            <div className="relative flex-1 flex flex-col items-center overflow-hidden">
              <div className="w-full h-[5px] bg-black rounded-full border border-white/10 shadow-inner z-20" />
              <motion.div
                animate={{ y: isReceiptOpen ? 0 : -105 }}
                transition={{ type: 'spring', stiffness: 110, damping: 16 }}
                className="w-[88%] bg-[#fcfcfc] text-[#111] p-4 pt-5 font-mono text-[9px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-0 relative"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 96% 100%, 92% 94%, 88% 100%, 84% 94%, 80% 100%, 76% 94%, 72% 100%, 68% 94%, 64% 100%, 60% 94%, 56% 100%, 52% 94%, 48% 100%, 44% 94%, 40% 100%, 36% 94%, 32% 100%, 28% 94%, 24% 100%, 20% 94%, 16% 100%, 12% 94%, 8% 100%, 4% 94%, 0% 100%)',
                }}
              >
                <div className="text-center pb-2 mb-2 border-b border-dashed border-zinc-300">
                  <p className="font-bold text-[8px] tracking-wider text-zinc-700">DU LIFE</p>
                  <p className="text-zinc-400 text-[7px]">Jun 28, 2026</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span>Lunch</span><span className="font-bold">42,000 COP</span></div>
                  <div className="flex justify-between"><span>Category</span><span className="font-bold">Food</span></div>
                  <div className="flex justify-between text-zinc-400"><span>≈ USD</span><span>$10.50</span></div>
                </div>
                <div className="mt-3 pt-2 border-t border-dashed border-zinc-300 text-center text-zinc-400 text-[7px]">
                  saved automatically
                </div>
              </motion.div>
            </div>

            <p className="text-[13px] text-[#6e6e73] mt-4 text-center">
              {isReceiptOpen ? 'Move away to close' : 'Hover to open'}
            </p>
          </div>

          {/* ── Card 3: Shift (1 col) ── */}
          <div className={`${card} min-h-[320px] p-8`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[13px] text-[#6e6e73] mb-2">You said</p>
                <h3 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight leading-snug">
                  "Remember this."
                </h3>
              </div>
              <Calendar className="w-4 h-4 text-[#6e6e73] shrink-0 mt-1" />
            </div>

            <div className="flex-1 bg-[#070707] border border-white/[0.06] rounded-2xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] font-semibold text-[#f5f5f7] shrink-0">
                  THU
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#f5f5f7]">Mike · Shift change</p>
                  <p className="text-[12px] text-[#6e6e73] mt-0.5">Thursday afternoon</p>
                </div>
              </div>
              <div className="text-[12px] text-[#86868b] font-light bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl leading-relaxed">
                "Mike requested a shift change to Thursday."
              </div>
            </div>

            <p className="text-[13px] text-[#6e6e73] mt-5">Du Life replied: Done. I'll remember it.</p>
          </div>

          {/* ── Card 4: Warranty (2 cols) ── */}
          <div className={`${card} md:col-span-2 min-h-[320px] p-8 lg:p-10`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[13px] text-[#6e6e73] mb-2">You asked</p>
                <h3 className="text-[22px] font-semibold text-[#f5f5f7] tracking-tight leading-snug">
                  "When does my TV warranty expire?"
                </h3>
              </div>
              <FileText className="w-4 h-4 text-[#6e6e73] shrink-0 mt-1" />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#070707] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#86868b]" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#f5f5f7]">Samsung_TV_Invoice.pdf</p>
                  <p className="text-[13px] text-green-500 mt-0.5">Expires Dec 2027 · 18 months remaining</p>
                </div>
              </div>
              <button
                onClick={() => setShowPdfModal(true)}
                className="text-[13px] font-medium text-[#f5f5f7] bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Eye className="w-3.5 h-3.5" />
                View invoice
              </button>
            </div>

            <div className="flex justify-between items-center mt-5 text-[13px] text-[#6e6e73]">
              <span>Du Life extracted this from the PDF you sent.</span>
            </div>
          </div>

          {/* ── Card 5: Voice (3 cols) ── */}
          <div className={`${card} md:col-span-3 min-h-[220px] p-8 lg:p-10`}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[13px] text-[#6e6e73] mb-2">You sent a voice note</p>
                <h3 className="text-[22px] font-semibold text-[#f5f5f7] tracking-tight">
                  Talk, and it remembers.
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">

                {/* Play button */}
                <button
                  onClick={() => setIsPlayingVoice((p) => !p)}
                  className="w-12 h-12 rounded-full bg-[#f5f5f7] text-black hover:opacity-90 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
                >
                  {isPlayingVoice
                    ? <Pause className="w-4 h-4 fill-black" />
                    : <Play className="w-4 h-4 fill-black ml-0.5" />
                  }
                </button>

                {/* Waveform */}
                <div className="flex-1 flex items-end h-10 gap-[2px] overflow-hidden">
                  {Array.from({ length: 60 }).map((_, i) => {
                    const angle = (i / 60) * Math.PI * 5;
                    const base = 15 + Math.sin(angle) * 12 + Math.cos(angle * 2.2) * 6;
                    const h = Math.max(8, Math.min(42, base));
                    const dur = 0.55 + (i % 7) * 0.08;
                    const del = (i % 11) * 0.033;
                    return (
                      <motion.div
                        key={i}
                        className="w-[2.5px] rounded-full bg-[#f5f5f7]"
                        style={{ height: `${h}%`, opacity: 0.18 }}
                        animate={isPlayingVoice ? {
                          height: [`${h}%`, `${Math.min(h * 2.1, 100)}%`, `${h}%`],
                          opacity: [0.18, 0.9, 0.18],
                        } : { height: `${h}%`, opacity: 0.18 }}
                        transition={isPlayingVoice ? {
                          repeat: Infinity, duration: dur, delay: del, ease: 'easeInOut',
                        } : {}}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Transcription */}
              <div className="bg-[#070707] border border-white/[0.06] rounded-2xl px-5 py-4 min-h-[60px] flex items-center">
                <p className="text-[15px] text-[#f5f5f7]/80 font-light leading-relaxed">
                  {isPlayingVoice ? (
                    <>
                      <span className="text-[12px] text-green-500 block mb-1 font-medium">Transcribing…</span>
                      {voiceText}<span className="animate-pulse">|</span>
                    </>
                  ) : (
                    voiceText || 'Press play to transcribe.'
                  )}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── PDF Modal ── */}
      <AnimatePresence>
        {showPdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="bg-[#0f0f0f] border border-white/[0.08] rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
            >
              {/* Modal top bar — macOS / iOS style */}
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#86868b]" />
                  <span className="text-[14px] font-medium text-[#f5f5f7]">Samsung_TV_Invoice.pdf</span>
                </div>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center text-[#86868b] cursor-pointer transition-colors duration-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* PDF mock — clean, minimal, Apple-document aesthetic */}
              <div className="flex-1 overflow-y-auto bg-white text-black font-sans p-8 space-y-6 text-[13px]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[20px] font-bold tracking-tight">SAMSUNG</p>
                    <p className="text-zinc-400 mt-0.5 text-[12px]">Samsung Electronics America</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-zinc-800">Invoice</p>
                    <p className="text-zinc-400 text-[12px]">#INV-2025-991 · Dec 28, 2025</p>
                  </div>
                </div>

                <hr className="border-zinc-100" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mb-1">Billed to</p>
                    <p className="font-medium">Alex Mercer</p>
                    <p className="text-zinc-400">alex@example.com</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider mb-1">Product</p>
                    <p className="font-medium">Samsung Neo QLED 4K (65")</p>
                    <p className="text-zinc-400">QN65QN90CAFXZA</p>
                  </div>
                </div>

                {/* Highlighted extraction — understated green, not shouty */}
                <div className="flex items-start gap-3 border border-green-100 bg-green-50/60 rounded-2xl p-4">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[12px] text-green-800">Du Life found this</p>
                    <p className="text-green-700 text-[12px] mt-0.5">
                      Warranty: 24 months · Expires <strong>December 28, 2027</strong>
                    </p>
                  </div>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-100 text-zinc-400 text-[11px] uppercase tracking-wider">
                      <th className="pb-2 text-left font-semibold">Description</th>
                      <th className="pb-2 text-right font-semibold">Qty</th>
                      <th className="pb-2 text-right font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-50">
                      <td className="py-3 font-medium">Samsung Neo QLED 4K TV (65")</td>
                      <td className="py-3 text-right">1</td>
                      <td className="py-3 text-right">$1,499.99</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end">
                  <div className="w-40 space-y-1.5">
                    <div className="flex justify-between text-zinc-400"><span>Subtotal</span><span>$1,499.99</span></div>
                    <div className="flex justify-between text-zinc-400"><span>Tax 8%</span><span>$120.00</span></div>
                    <hr className="border-zinc-100" />
                    <div className="flex justify-between font-bold text-zinc-900"><span>Total</span><span>$1,619.99</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
