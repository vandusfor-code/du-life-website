import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-[#0D0D11] border-t border-white/[0.06]">

    {/* Main footer body */}
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">

      {/* Brand */}
      <div className="col-span-1">
        <div className="flex items-center gap-2 mb-3">
          <img src="/logo.png" alt="Du Life" className="w-7 h-7 rounded-[8px]" />
          <p className="text-[14px] font-medium text-white">Du Life</p>
        </div>
        <p className="text-[13px] text-white/40 leading-relaxed max-w-[220px] font-light">
          Tu segunda memoria, disponible en WhatsApp. Privada. Instantánea. Siempre contigo.
        </p>
      </div>

      {/* Product */}
      <div>
        <p className="text-[11px] font-mono tracking-wider text-white/30 uppercase mb-4">Producto</p>
        <ul className="space-y-2.5 text-[13px] text-white/50 font-light">
          <li><a href="#funciones" className="hover:text-[#C4E938] transition-colors">Funciones</a></li>
          <li><a href="#como-funciona" className="hover:text-[#C4E938] transition-colors">Cómo funciona</a></li>
          <li><a href="#seguridad" className="hover:text-[#C4E938] transition-colors">Privacidad y confianza</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <p className="text-[11px] font-mono tracking-wider text-white/30 uppercase mb-4">Legal</p>
        <ul className="space-y-2.5 text-[13px] text-white/50 font-light">
          <li><a href="/privacy-policy.html" className="hover:text-[#C4E938] transition-colors">Política de privacidad</a></li>
          <li><a href="#" className="hover:text-[#C4E938] transition-colors">Términos de servicio</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] font-mono text-white/20">
        <span>Copyright &copy; {new Date().getFullYear()} Du Life. Todos los derechos reservados.</span>
        <span>WhatsApp es una marca registrada de Meta Platforms, Inc.</span>
      </div>
    </div>

  </footer>
);
