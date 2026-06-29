import { motion } from 'framer-motion';

const WORLD_AI_FACTS = [
  "Quantum electrodynamics equations",
  "Capital of Kyrgyzstan (Bishkek)",
  "Recursive sorting algorithms in Go",
  "World population projections for 2050",
  "Eiffel Tower height including antennas",
  "Stock prices for global conglomerates",
  "History of the Byzantine Empire",
  "Standard specifications for USB-C",
  "Python library documentation for pandas",
  "Recipes for artisanal sourdough bread",
  "Distance from Earth to Mars (orbit average)"
];

const DU_LIFE_FACTS = [
  "Passport expires in December 2027",
  "Spare car keys are inside the blue vase",
  "Laura loves lavender scents & handmade pottery",
  "MacBook Pro Serial Number: C02DH5K1Q05D",
  "Mike agreed to swap the Thursday afternoon shift",
  "Paid $1,619.99 for Samsung TV on Dec 28, 2025",
  "Dinner reservations at Oteque on Friday at 8 PM",
  "WiFi password: 'memory-operating-system-2026'",
  "Landlord's bank routing details for rent transfer",
  "Flight to Japan departs Tokyo Haneda Terminal 3"
];

export const TheShift = () => {
  return (
    <section className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04] overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/[0.02] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] pointer-events-none blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Typographic Header */}
        <div className="max-w-[700px] mb-20 space-y-6">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            02 / THE SHIFT
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-[1.1]">
            Most AI knows the world. <br />
            <span className="text-white/40">Du Life knows you.</span>
          </h2>
          <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[500px]">
            Unlike general LLMs that digest the public internet, Du Life focuses entirely inward. It leaves the world's facts to search engines, and protects your personal history.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 border border-white/[0.06] rounded-[24px] bg-[#050507] overflow-hidden">
          
          {/* Left Column: General AI */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-between h-[520px] relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-white/20 uppercase">
                GENERAL ASSISTANTS
              </span>
              <h4 className="text-xl font-light text-white/40">
                World Memory
              </h4>
            </div>

            {/* Fast scrolling blurred lists representing impersonal noise */}
            <div className="absolute inset-x-0 bottom-0 h-[360px] pointer-events-none overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-t-0 h-16 bg-gradient-to-b from-[#050507] to-transparent z-10" />
              <motion.div 
                animate={{ y: [0, -400] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }}
                className="space-y-4 px-8 md:px-12 pb-8"
              >
                {[...WORLD_AI_FACTS, ...WORLD_AI_FACTS].map((fact, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-white/[0.02] bg-white/[0.01] text-[13px] text-white/20 select-none font-mono filter blur-[0.4px] transition-all"
                  >
                    {fact}
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <p className="text-xs text-white/30 font-light leading-relaxed max-w-[280px]">
                Built on public crawling data. Knows billions of general answers, but has no context about your actual life.
              </p>
            </div>
          </div>

          {/* Right Column: Du Life */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-[520px] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.035),transparent_60%)]">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-violet-400/80 uppercase">
                DU LIFE
              </span>
              <h4 className="text-xl font-light text-white">
                Personal Memory
              </h4>
            </div>

            {/* Slow, glowing scrolling list of personal facts */}
            <div className="absolute inset-x-0 bottom-0 h-[360px] pointer-events-none overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-t-0 h-16 bg-gradient-to-b from-[#050507] to-transparent z-10" />
              <motion.div 
                animate={{ y: [0, -320] }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear"
                }}
                className="space-y-4 px-8 md:px-12 pb-8"
              >
                {[...DU_LIFE_FACTS, ...DU_LIFE_FACTS].map((fact, idx) => (
                  <motion.div 
                    key={idx}
                    className="p-4 rounded-xl border border-white/[0.06] bg-[#08080c] shadow-[0_0_15px_rgba(99,102,241,0.03)] text-[13px] text-white/80 font-light tracking-wide flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    <span>{fact}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-xs text-white/50 font-light leading-relaxed max-w-[280px]">
                End-to-end private database. Learns your patterns, indices your records, and serves as a natural extension of your own recall.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
