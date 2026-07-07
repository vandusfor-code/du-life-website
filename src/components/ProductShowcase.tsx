import { motion } from 'framer-motion';
import { Home, TrendingUp, GitBranch, CheckSquare, Grid3x3, Bell, Search } from 'lucide-react';
import { IllustratedPhone } from './IllustratedPhone';

const NAV_ITEMS = [
  { icon: Home, label: 'Inicio', active: true },
  { icon: TrendingUp, label: 'Balance', active: false },
  { icon: GitBranch, label: 'Árbol', active: false },
  { icon: CheckSquare, label: 'Tareas', active: false },
  { icon: Grid3x3, label: 'Espacios', active: false },
];

const DashboardPreview = () => (
  <div className="rounded-[20px] overflow-hidden border border-white/[0.08] bg-[#0c0c0e] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
    {/* Browser-style top bar */}
    <div className="h-9 px-4 flex items-center gap-1.5 bg-[#0c0c0e] border-b border-white/[0.06]">
      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
    </div>

    <div className="flex bg-[#0D0D11] min-h-[420px]">
      {/* Sidebar */}
      <div className="w-[160px] border-r border-white/[0.06] p-4 hidden sm:block">
        <div className="flex items-center gap-2 mb-8">
          <img src="/logo.png" alt="Du Life" className="w-6 h-6 rounded-[6px]" />
          <span className="text-[13px] font-medium text-white">Du <span className="text-[#C4E938]">Life</span></span>
        </div>
        <div className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] ${
                item.active ? 'bg-[#C4E938]/15 text-[#C4E938]' : 'text-white/40'
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[15px] font-medium text-white">Buenas tardes, Duvan</p>
            <p className="text-[11px] text-white/35">Lunes, 6 de julio</p>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Search className="w-4 h-4" />
            <Bell className="w-4 h-4" />
          </div>
        </div>

        <div className="rounded-2xl bg-[#16161F] border border-white/[0.06] p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] text-white/40">Balance general</p>
            <span className="text-[10px] font-semibold text-[#C4E938] bg-[#C4E938]/10 rounded-full px-2 py-0.5">↑ 100%</span>
          </div>
          <p className="text-[26px] font-semibold text-white mb-4">$3.665.000</p>
          <svg viewBox="0 0 400 60" className="w-full h-12">
            <polyline
              points="0,45 60,44 120,42 180,40 240,38 300,10 400,5"
              fill="none" stroke="#C4E938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#16161F] border border-white/[0.06] p-4">
            <p className="text-[10px] text-white/40 mb-1">Gastos del mes</p>
            <p className="text-[16px] font-semibold text-white">$35.000</p>
          </div>
          <div className="rounded-xl bg-[#16161F] border border-white/[0.06] p-4">
            <p className="text-[10px] text-white/40 mb-1">Tareas pendientes</p>
            <p className="text-[16px] font-semibold text-white">8</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-mono uppercase tracking-wider text-white/30">Timeline</p>
          {['Factura Éxito · $54.800', 'Idea: nueva función', 'Cumpleaños de mamá'].map((row) => (
            <div key={row} className="flex items-center justify-between rounded-lg bg-[#16161F] border border-white/[0.05] px-3 py-2.5">
              <span className="text-[11.5px] text-white/70">{row}</span>
              <span className="text-[9px] text-white/25 font-mono">hace 2h</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const ProductShowcase = () => {
  return (
    <section className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04] overflow-hidden">

      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#C4E938]/[0.03] pointer-events-none blur-[140px]" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="max-w-[600px] mx-auto text-center mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            04 / TU HISTORIA, VISUALIZADA
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-[1.1]">
            Un dashboard cuando <span className="text-[#C4E938]">lo necesitas.</span>
          </h2>
          <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[480px] mx-auto">
            Todo lo que le cuentas a Du por WhatsApp queda organizado y visible en un panel web, para ver el panorama completo sin tener que pedírselo al bot.
          </p>
        </div>

        {/* Dashboard preview — illustrated, not a real screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <DashboardPreview />
        </motion.div>

        {/* Mobile screens row — illustrated phones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {[
            { variant: 'home' as const, label: 'Inicio' },
            { variant: 'finance' as const, label: 'Finanzas' },
            { variant: 'tree' as const, label: 'Árbol de vida' },
          ].map((screen, idx) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="transition-transform duration-500 group-hover:-translate-y-2">
                <IllustratedPhone variant={screen.variant} />
              </div>
              <p className="mt-3 text-center text-[12px] font-mono tracking-[0.15em] text-white/35 uppercase">
                {screen.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
