import { motion } from 'framer-motion';
import { Mic, FileCode, Camera, ArrowRight, CornerDownRight } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    id: 'voice',
    icon: Mic,
    title: "Voice & Audio Notes",
    desc: "Send spontaneous voice notes while driving, walking, or thinking out loud.",
    tag: "WHATSAPP AUDIO",
    unstructured: "“Remember to call Sarah about the cabin's heating system keys before Thursday...”",
    structured: {
      action: "TASK / TO-DO CREATED",
      fields: [
        { label: "Contact", val: "Sarah" },
        { label: "Topic", val: "Cabin Heating Keys" },
        { label: "Deadline", val: "Before Thursday" }
      ]
    }
  },
  {
    id: 'docs',
    icon: FileCode,
    title: "Documents & PDF",
    desc: "Forward receipts, contracts, tax sheets, and product invoices directly.",
    tag: "INVOICES / RECEIPTS",
    unstructured: "Samsung_Neo_QLED_65_Invoice_30294.pdf (1.2 MB)",
    structured: {
      action: "ENTITY INDEXED",
      fields: [
        { label: "Merchant", val: "Samsung NYC" },
        { label: "Amount", val: "$1,619.99" },
        { label: "Warranty", val: "Expires Dec 2027" }
      ]
    }
  },
  {
    id: 'photos',
    icon: Camera,
    title: "Photos & Snaps",
    desc: "Snap a photo of router labels, license plates, wine bottles, or physical keys.",
    tag: "OCR / IMAGE PARSER",
    unstructured: "IMG_9918.jpg (Router back panel label snapshot)",
    structured: {
      action: "DATA EXTRACTION",
      fields: [
        { label: "Model", val: "Netgear AX6000" },
        { label: "SSID", val: "Cabin_Guest_5G" },
        { label: "Passcode", val: "memory-os-2026" }
      ]
    }
  }
];

export const TheExperience = () => {
  return (
    <section className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-20 space-y-6">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block">
            06 / THE EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
            Raw inputs.<br />
            <span className="text-white/40">Structured automatically.</span>
          </h2>
          <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[500px]">
            You don't need folders, templates, or databases. Just dump data in whatever format is convenient. Du Life extracts, catalogs, and stores the meaning.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-8 rounded-[24px] border border-white/[0.05] bg-[#050508]/40 hover:border-white/10 hover:bg-[#07070a] transition-all duration-500 h-[560px] overflow-hidden"
              >
                {/* Background light hover glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-violet-500/[0.015] group-hover:bg-violet-500/[0.04] transition-colors duration-500 pointer-events-none blur-2xl" />

                <div className="space-y-6">
                  {/* Top line indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.01] flex items-center justify-center text-white/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-white/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-light text-white group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[13px] font-light text-white/40 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Pipeline transformation visual */}
                <div className="my-6 space-y-4 flex-1 flex flex-col justify-center">
                  
                  {/* Unstructured input visual bubble */}
                  <div className="p-3.5 rounded-xl border border-white/[0.03] bg-white/[0.005] text-[12px] font-mono text-white/30 italic relative">
                    <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded border border-white/[0.04] bg-[#050508] text-[8px] font-mono text-white/20 uppercase tracking-widest leading-none">
                      INPUT
                    </div>
                    <span>{item.unstructured}</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-white/10 group-hover:text-violet-500/35 transition-colors duration-500">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  {/* Structured memory bubble */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-[#07070d] shadow-[0_4px_16px_rgba(99,102,241,0.015)] relative space-y-2.5">
                    <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 rounded border border-white/[0.06] bg-[#07070d] text-[8px] font-mono text-violet-400 uppercase tracking-widest leading-none">
                      {item.structured.action}
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.structured.fields.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-[11px] font-mono">
                          <CornerDownRight className="w-3 h-3 text-white/20 shrink-0 mt-0.5" />
                          <span className="text-white/35 font-light">{f.label}:</span>
                          <span className="text-white/80 font-medium truncate">{f.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom confirmation details */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/20 uppercase">
                  <span>Processed: Real-time</span>
                  <span className="text-emerald-500/60 font-semibold">Ready</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
