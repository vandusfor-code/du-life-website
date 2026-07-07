import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

const METRICS = [
  { value: 16000, suffix: '+', label: 'Momentos recordados' },
  { value: 98, suffix: '%', label: 'Precisión al entender contexto' },
  { value: 0, label: 'Apps que necesitas descargar' },
  { value: 24, suffix: '/7', label: 'Disponible en WhatsApp' },
];

export const TrustBar = () => {
  return (
    <section className="relative w-full bg-[#0D0D11] border-b border-white/[0.05] py-14">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-[32px] sm:text-[40px] font-light tracking-[-0.03em] text-white">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-[12px] text-white/40 font-light mt-1 leading-snug">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
