import { motion } from 'framer-motion';
import { Shield, EyeOff, FolderHeart, Download } from 'lucide-react';

const SECURITY_PILLARS = [
  {
    icon: EyeOff,
    title: "Zero-Knowledge Encryption",
    detail: "We encrypt your data before it is indexed. Neither developers nor third parties have access to your personal files or conversations. Your memories are yours alone."
  },
  {
    icon: Download,
    title: "Total Sovereignty",
    detail: "Export your entire database or permanently purge your history with a simple text command inside WhatsApp. You control the lifetime of your data."
  },
  {
    icon: FolderHeart,
    title: "Permanent Infrastructure",
    detail: "Redundant, decentralized server nodes ensure that your data is never lost, corrupted, or altered. It grows with you for decades."
  }
];

export const Privacy = () => {
  return (
    <section id="security" className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04]">
      {/* Soft background blue aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/[0.01] pointer-events-none blur-[120px]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Typographic Trust Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block">
                07 / TRUST & SECURITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
                Your memories.<br />
                <span className="text-white/40">Uncompromisingly yours.</span>
              </h2>
              <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[420px]">
                Du Life is built on the philosophy that a second memory must be as secure and private as your first. Privacy isn't a setting—it is the foundation.
              </p>
            </div>

            {/* Cryptographic lock symbol */}
            <div className="hidden lg:block pt-8">
              <div className="inline-flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                <div className="w-10 h-10 rounded-full border border-violet-500/25 bg-violet-500/5 flex items-center justify-center text-violet-400">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[12px] text-white/80 font-medium font-mono">MILITARY-GRADE SHA-256</p>
                  <p className="text-[10px] text-white/35 font-mono">End-to-End Database Encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Security Architecture Pillars list */}
          <div className="lg:col-span-7 space-y-6">
            {SECURITY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 p-6 rounded-[20px] border border-white/[0.04] bg-[#050508]/30 hover:border-white/[0.08] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-white/60 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[15px] font-medium text-white/95">
                      {pillar.title}
                    </h4>
                    <p className="text-[13px] text-white/40 leading-relaxed font-light">
                      {pillar.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
