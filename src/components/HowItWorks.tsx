import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, LayoutGrid } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Escribe',
    body: 'Le cuentas a Du lo que necesitas, por texto o nota de voz, como a un contacto más.',
  },
  {
    icon: Sparkles,
    title: 'La IA entiende',
    body: 'Entiende el contexto de tu mensaje y decide qué acción ejecutar por ti.',
  },
  {
    icon: LayoutGrid,
    title: 'Se organiza solo',
    body: 'Queda guardado, categorizado y disponible cuando lo vuelvas a necesitar.',
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="max-w-[600px] mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            05 / CÓMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-[1.1]">
            Tan simple como <span className="text-[#C4E938]">enviar un mensaje.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[28px] left-[calc(16.66%)] right-[calc(16.66%)] h-[1px] bg-white/[0.08]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-[#C4E938]/50"
            />
          </div>

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative space-y-5"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#16161F] border border-[#C4E938]/30 flex items-center justify-center text-[#C4E938]">
                  <Icon className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C4E938] text-black text-[11px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-white/45 font-light leading-relaxed max-w-[280px]">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
