import { motion } from 'framer-motion';
import { Shield, EyeOff, FolderHeart, Download } from 'lucide-react';

const SECURITY_PILLARS = [
  {
    icon: EyeOff,
    title: "Cifrado extremo a extremo",
    detail: "Tus datos se cifran antes de indexarse. Ni el equipo de Du Life ni terceros tienen acceso a tus archivos o conversaciones personales. Tus recuerdos son solo tuyos."
  },
  {
    icon: Download,
    title: "Soberanía total",
    detail: "Exporta toda tu base de datos o borra tu historial para siempre con un simple mensaje de texto en WhatsApp. Tú controlas la vida útil de tu información."
  },
  {
    icon: FolderHeart,
    title: "Infraestructura permanente",
    detail: "Servidores redundantes aseguran que tu información nunca se pierda, corrompa o altere. Crece contigo durante años."
  }
];

export const Privacy = () => {
  return (
    <section id="seguridad" className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04]">
      {/* Soft background lime aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C4E938]/[0.015] pointer-events-none blur-[120px]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Typographic Trust Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block">
                06 / CONFIANZA Y SEGURIDAD
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
                Tus recuerdos.<br />
                <span className="text-white/40">Solo tuyos.</span>
              </h2>
              <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[420px]">
                Solo tú puedes ver tu información. Du Life se construye bajo la idea de que una segunda memoria debe ser tan privada como la primera.
              </p>
            </div>

            {/* Cryptographic lock symbol */}
            <div className="hidden lg:block pt-8">
              <div className="inline-flex items-center gap-3.5 px-5 py-4 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                <div className="w-10 h-10 rounded-full border border-[#C4E938]/25 bg-[#C4E938]/5 flex items-center justify-center text-[#C4E938]">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[12px] text-white/80 font-medium font-mono">DATOS 100% SEGUROS</p>
                  <p className="text-[10px] text-white/35 font-mono">Cifrado de base de datos extremo a extremo</p>
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
                  className="flex gap-6 p-6 rounded-[20px] border border-white/[0.06] bg-[#16161F] hover:border-[#C4E938]/20 transition-all duration-300"
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
