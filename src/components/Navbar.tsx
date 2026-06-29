import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3.5 bg-[#020202]/85 backdrop-blur-md border-b border-white/[0.06]' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        
        {/* Brand logo */}
        <a 
          href="#" 
          className="text-base font-light tracking-[-0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span className="font-semibold text-white tracking-normal uppercase text-[12px] font-mono border border-white/20 px-1.5 py-0.5 rounded">DU</span>
          <span className="font-light text-white tracking-tight">Life</span>
        </a>

        {/* Navigation links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono tracking-wider text-white/40">
          <a href="#problem" className="hover:text-white transition-colors duration-200 uppercase">
            Problem
          </a>
          <a href="#timeline" className="hover:text-white transition-colors duration-200 uppercase">
            Timeline
          </a>
          <a href="#graph" className="hover:text-white transition-colors duration-200 uppercase">
            Graph
          </a>
          <a href="#security" className="hover:text-white transition-colors duration-200 uppercase">
            Security
          </a>
        </nav>

        {/* WhatsApp Link button */}
        <a
          href="https://wa.me/your_number_here"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4.5 py-2 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-[12px] font-mono tracking-wide text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-white/60 group-hover:scale-110 transition-transform duration-300" />
          <span>Launch WhatsApp</span>
        </a>

      </div>
    </motion.header>
  );
};
