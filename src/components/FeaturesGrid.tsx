import { motion } from 'framer-motion';
import {
  Wallet, CheckSquare, Calendar, HandCoins,
  StickyNote, FileText, Search, PenLine,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Wallet,
    title: 'Finanzas',
    body: 'Registra gastos, balances y préstamos con cálculo de rentabilidad, todo desde un mensaje.',
  },
  {
    icon: CheckSquare,
    title: 'Tareas y recordatorios',
    body: 'Crea pendientes con fecha y hora. Du Life te avisa antes de que se te olvide.',
  },
  {
    icon: Calendar,
    title: 'Calendario',
    body: 'Agenda eventos y citas sin salir de la conversación.',
  },
  {
    icon: HandCoins,
    title: 'Préstamos',
    body: 'Lleva el control de lo que prestas y te prestan, con quién y cuándo se paga.',
  },
  {
    icon: StickyNote,
    title: 'Notas e ideas',
    body: 'Captura pensamientos e ideas al vuelo. Se organizan solas por tema.',
  },
  {
    icon: FileText,
    title: 'Documentos y fotos',
    body: 'Envía un PDF o la foto de una factura y Du Life extrae lo importante.',
  },
  {
    icon: Search,
    title: 'Búsqueda en internet',
    body: 'Pregunta cualquier cosa del momento y obtén una respuesta actualizada.',
  },
  {
    icon: PenLine,
    title: 'Redacción rápida',
    body: 'Pide que te redacte un mensaje, correo o respuesta en segundos.',
  },
];

export const FeaturesGrid = () => {
  return (
    <section id="funciones" className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="max-w-[600px] mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            03 / FUNCIONALIDADES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-[1.1]">
            Todo lo que necesitas, <span className="text-[#C4E938]">en un solo chat.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-[18px] border border-white/[0.06] bg-[#16161F] hover:bg-[#1D1D28] hover:border-[#C4E938]/25 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#C4E938] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <h3 className="text-[15px] font-medium text-white tracking-tight mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-white/40 font-light leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
