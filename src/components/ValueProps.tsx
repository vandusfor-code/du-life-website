import { motion } from 'framer-motion';
import { Zap, MessageCircle, Brain } from 'lucide-react';

const PROPS = [
  {
    icon: Zap,
    title: 'Cero fricción',
    body: 'No es una app que se abre. Es una conversación de WhatsApp, como escribirle a un contacto más. Nada que instalar, nada que aprender.',
  },
  {
    icon: MessageCircle,
    title: 'Entiende lenguaje natural',
    body: 'No hay comandos ni menús. Le hablas como a una persona y la IA entiende exactamente qué quieres hacer.',
  },
  {
    icon: Brain,
    title: 'Memoria real',
    body: 'Recuerda contexto, hechos y patrones de conversaciones anteriores. No arranca de cero cada vez que le escribes.',
  },
];

export const ValueProps = () => {
  return (
    <section className="relative w-full bg-[#0D0D11] py-[12vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-[20px] border border-white/[0.06] bg-[#16161F] hover:bg-[#1D1D28] hover:border-[#C4E938]/25 transition-all duration-500 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C4E938]/0 group-hover:bg-[#C4E938]/[0.08] blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#C4E938] group-hover:scale-110 group-hover:border-[#C4E938]/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {prop.title}
                  </h3>
                  <p className="text-[13.5px] text-white/45 font-light leading-relaxed">
                    {prop.body}
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
