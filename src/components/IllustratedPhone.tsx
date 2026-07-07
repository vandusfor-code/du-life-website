import type { ReactNode } from 'react';
import { Wallet, Lightbulb, Users, Target, StickyNote, ArrowUp, ArrowDown } from 'lucide-react';

interface IllustratedPhoneProps {
  variant: 'home' | 'finance' | 'tree';
  className?: string;
}

const PhoneShell = ({ children }: { children: ReactNode }) => (
  <div className="relative w-[240px] h-[500px] rounded-[42px] bg-[#0c0c0e] p-[10px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] border border-white/10 select-none">
    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[80px] h-[22px] rounded-full bg-black z-40" />
    <div className="relative w-full h-full rounded-[32px] bg-[#0D0D11] overflow-hidden flex flex-col border border-white/5">
      <div className="h-[34px] px-5 flex items-center justify-between text-[10px] text-white/60 font-medium shrink-0">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-[16px] h-[8px] rounded-[2px] border border-white/40 flex items-center p-[1px]">
            <div className="h-full w-[70%] bg-white rounded-[1px]" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-3.5 pb-4 overflow-hidden">{children}</div>
    </div>
  </div>
);

const HomeScreen = () => (
  <div className="space-y-3">
    <div className="flex items-center justify-between px-0.5 mb-1">
      <span className="text-[13px] font-semibold text-white">Du <span className="text-[#C4E938]">Life</span></span>
      <div className="w-6 h-6 rounded-full bg-[#C4E938]/20 border border-[#C4E938]/30" />
    </div>
    <p className="text-[10px] text-white/40 px-0.5">Hola, Duvan</p>

    <div className="rounded-2xl bg-[#C4E938] p-4 space-y-1">
      <p className="text-[9px] text-black/60 font-medium">Balance total</p>
      <p className="text-[19px] font-bold text-black tracking-tight">$16.255.500</p>
      <span className="inline-block text-[8px] font-semibold text-black/70 bg-black/10 rounded-full px-1.5 py-0.5">↑ 98%</span>
    </div>

    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5 space-y-1">
        <ArrowUp className="w-3 h-3 text-[#C4E938]" />
        <p className="text-[8px] text-white/40">Ingresos</p>
        <p className="text-[11px] font-semibold text-white">$16.55M</p>
      </div>
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5 space-y-1">
        <ArrowDown className="w-3 h-3 text-white/50" />
        <p className="text-[8px] text-white/40">Gastos</p>
        <p className="text-[11px] font-semibold text-white">$291k</p>
      </div>
    </div>

    <div className="space-y-1.5">
      <p className="text-[8px] font-mono uppercase tracking-wider text-white/30 px-0.5">Actividad reciente</p>
      {[
        { label: 'McDonald\'s', amount: '-$70.500', color: 'bg-red-500/20 text-red-400' },
        { label: 'Gimnasio', amount: '-$100.000', color: 'bg-blue-500/20 text-blue-400' },
        { label: 'Salario', amount: '+$3.700.000', color: 'bg-[#C4E938]/20 text-[#C4E938]' },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-2.5 py-2">
          <span className="text-[9.5px] text-white/70">{row.label}</span>
          <span className={`text-[9px] font-medium rounded px-1 ${row.color}`}>{row.amount}</span>
        </div>
      ))}
    </div>
  </div>
);

const FinanceScreen = () => (
  <div className="space-y-3">
    <p className="text-[12px] font-semibold text-white px-0.5">Finanzas</p>
    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-3.5">
      <p className="text-[8px] text-white/40 mb-1">Últimos 7 días</p>
      <p className="text-[17px] font-bold text-white mb-2">$290.500</p>
      <svg viewBox="0 0 200 60" className="w-full h-10">
        <polyline
          points="0,45 30,42 60,44 90,40 120,10 150,48 180,50 200,20"
          fill="none" stroke="#C4E938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5">
        <p className="text-[8px] text-white/40">Ingresos mes</p>
        <p className="text-[11px] font-semibold text-[#C4E938]">$16.55M</p>
      </div>
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5">
        <p className="text-[8px] text-white/40">Gastos mes</p>
        <p className="text-[11px] font-semibold text-white">$291k</p>
      </div>
    </div>
    <div className="space-y-1.5">
      {[
        { icon: Wallet, label: 'KFC', amount: '-$70.500' },
        { icon: Wallet, label: 'Gimnasio', amount: '-$100.000' },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-2">
          <row.icon className="w-3 h-3 text-white/40 shrink-0" />
          <span className="text-[9.5px] text-white/70 flex-1">{row.label}</span>
          <span className="text-[9px] font-medium text-white/60">{row.amount}</span>
        </div>
      ))}
    </div>
  </div>
);

const TreeScreen = () => (
  <div className="space-y-4">
    <p className="text-[12px] font-semibold text-white px-0.5">Árbol de vida</p>
    <div className="relative h-[280px] flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
        {[[100, 100, 40, 30], [100, 100, 160, 40], [100, 100, 30, 150], [100, 100, 170, 150]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C4E938" strokeOpacity="0.25" strokeWidth="1" />
        ))}
      </svg>
      <div className="absolute w-11 h-11 rounded-full bg-[#C4E938]/15 border border-[#C4E938]/40 flex items-center justify-center text-[#C4E938] text-[13px] font-bold">D</div>
      {[
        { icon: Target, label: 'Metas', pos: 'top-1 left-1' },
        { icon: Users, label: 'Personas', pos: 'top-6 right-0' },
        { icon: Lightbulb, label: 'Ideas', pos: 'bottom-6 left-0' },
        { icon: StickyNote, label: 'Notas', pos: 'bottom-1 right-2' },
      ].map((node) => (
        <div key={node.label} className={`absolute ${node.pos} flex items-center gap-1 rounded-full bg-[#16161F] border border-white/10 px-2 py-1`}>
          <node.icon className="w-2.5 h-2.5 text-[#C4E938]" />
          <span className="text-[8px] text-white/70">{node.label}</span>
        </div>
      ))}
    </div>
    <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5">
      <p className="text-[8px] text-white/40">Insight de tu árbol</p>
      <p className="text-[9.5px] text-white/70 mt-0.5">Este mes creciste en finanzas e ideas.</p>
    </div>
  </div>
);

export const IllustratedPhone = ({ variant, className = '' }: IllustratedPhoneProps) => (
  <div className={className}>
    <PhoneShell>
      {variant === 'home' && <HomeScreen />}
      {variant === 'finance' && <FinanceScreen />}
      {variant === 'tree' && <TreeScreen />}
    </PhoneShell>
  </div>
);
