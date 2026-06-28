import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');

  const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary-blue to-accent-blue flex items-center justify-center shadow-lg shadow-primary-blue/20 transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-base select-none">D</span>
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-text-primary font-bold text-lg tracking-tight font-sans select-none transition-colors duration-300 group-hover:text-white">
            Du Life
          </span>
        </a>

        {/* Menu Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side: Language & CTA */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-xs font-medium text-text-secondary select-none border border-white/5 bg-white/[0.02] px-3 py-1.5 rounded-full">
            <button
              onClick={() => setLang('EN')}
              className={`transition-colors duration-300 hover:text-text-primary flex items-center gap-1 ${
                lang === 'EN' ? 'text-text-primary font-semibold' : 'text-text-secondary/60'
              }`}
            >
              <span>🇺🇸</span> EN
            </button>
            <span className="text-white/10">|</span>
            <button
              onClick={() => setLang('ES')}
              className={`transition-colors duration-300 hover:text-text-primary flex items-center gap-1 ${
                lang === 'ES' ? 'text-text-primary font-semibold' : 'text-text-secondary/60'
              }`}
            >
              <span>🇪🇸</span> ES
            </button>
          </div>

          {/* Action Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/573239117508"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-text-primary text-bg-main font-semibold text-xs tracking-wide transition-colors duration-300 hover:bg-white shadow-md shadow-white/5"
          >
            Chat on WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};
