import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

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
          ? 'py-3 bg-[#0D0D11]/85 backdrop-blur-md border-b border-white/[0.06]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between w-full">

        {/* Brand logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" alt="Du Life" className="w-8 h-8 rounded-[9px]" />
          <span className="text-[15px] font-medium tracking-tight text-white">
            Du <span className="text-[#C4E938]">Life</span>
          </span>
        </a>

        {/* Navigation links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/50">
          <a href="#funciones" className="hover:text-white transition-colors duration-200">
            Funciones
          </a>
          <a href="#como-funciona" className="hover:text-white transition-colors duration-200">
            Cómo funciona
          </a>
          <a href="#seguridad" className="hover:text-white transition-colors duration-200">
            Seguridad
          </a>
        </nav>

        {/* WhatsApp CTA button */}
        <MagneticButton
          className="px-4.5 py-2 rounded-full bg-[#C4E938] text-black font-semibold text-[13px] hover:bg-[#d4f552] transition-colors duration-300 shadow-[0_0_20px_rgba(196,233,56,0.15)]"
          onClick={() => window.open('https://wa.me/your_number_here', '_blank', 'noopener,noreferrer')}
        >
          <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
          <span>Habla con Du</span>
        </MagneticButton>

      </div>
    </motion.header>
  );
};
