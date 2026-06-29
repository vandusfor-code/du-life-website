import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-[#020202] border-t border-white/[0.06]">

    {/* Main footer body */}
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">

      {/* Brand */}
      <div className="col-span-1">
        <p className="text-[14px] font-medium text-white mb-3">Du Life</p>
        <p className="text-[13px] text-white/40 leading-relaxed max-w-[200px] font-light">
          Your memory, available over WhatsApp. Private. Instant. Always on.
        </p>
      </div>

      {/* Product */}
      <div>
        <p className="text-[11px] font-mono tracking-wider text-white/30 uppercase mb-4">Product</p>
        <ul className="space-y-2.5 text-[13px] text-white/50 font-light">
          <li><a href="#" className="hover:text-white transition-colors">Get started</a></li>
          <li><a href="#problem" className="hover:text-white transition-colors">How it works</a></li>
          <li><a href="#security" className="hover:text-white transition-colors">Privacy & trust</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <p className="text-[11px] font-mono tracking-wider text-white/30 uppercase mb-4">Legal</p>
        <ul className="space-y-2.5 text-[13px] text-white/50 font-light">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] font-mono text-white/20">
        <span>Copyright &copy; {new Date().getFullYear()} Du Life. All rights reserved.</span>
        <span>WhatsApp is a trademark of Meta Platforms, Inc.</span>
      </div>
    </div>

  </footer>
);
