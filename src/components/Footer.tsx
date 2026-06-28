import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-[#070707] border-t border-white/[0.06]">

    {/* Main footer body */}
    <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">

      {/* Brand */}
      <div className="col-span-1">
        <p className="text-[14px] font-medium text-[#f5f5f7] mb-3">Du Life</p>
        <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-[200px]">
          Your memory, available over WhatsApp. Private. Instant. Always on.
        </p>
      </div>

      {/* Product */}
      <div>
        <p className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">Product</p>
        <ul className="space-y-2.5 text-[14px] text-[#86868b]">
          <li><a href="#" className="apple-link">Get started</a></li>
          <li><a href="#" className="apple-link">How it works</a></li>
          <li><a href="#" className="apple-link">Privacy</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <p className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">Legal</p>
        <ul className="space-y-2.5 text-[14px] text-[#86868b]">
          <li><a href="#" className="apple-link">Privacy Policy</a></li>
          <li><a href="#" className="apple-link">Terms of Service</a></li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-[#6e6e73]">
        <span>Copyright &copy; {new Date().getFullYear()} Du Life. All rights reserved.</span>
        <span>WhatsApp is a trademark of Meta Platforms, Inc.</span>
      </div>
    </div>

  </footer>
);
