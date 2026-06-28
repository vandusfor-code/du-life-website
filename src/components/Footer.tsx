import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#09090B] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Side: Logo & Tagline */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-blue to-accent-blue flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="text-text-primary font-bold text-lg tracking-tight">
              Du Life
            </span>
          </div>
          <p className="text-text-secondary text-sm font-normal">
            Your second memory.
          </p>
        </div>

        {/* Right Side: Links & Creator Info */}
        <div className="flex flex-col md:items-end space-y-6 text-left md:text-right">
          {/* Quick Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-secondary font-medium">
            <a href="#privacy" className="hover:text-text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="mailto:contact@dur.life" className="hover:text-text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Credits */}
          <div className="space-y-1.5 pt-2 border-t border-white/5 md:border-t-0 md:pt-0">
            <p className="text-text-secondary text-sm font-normal">
              Created by <span className="text-text-primary font-semibold">Duvan Andres Ramos Padilla</span>
            </p>
            <a
              href="https://dur.life"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-blue-400 text-sm font-semibold transition-colors duration-300 tracking-wide inline-block"
            >
              dur.life
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/[0.02] text-center">
        <p className="text-[11px] text-[#A1A1AA]/40 font-medium tracking-wide uppercase">
          &copy; {currentYear} Du Life. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
