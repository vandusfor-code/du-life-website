import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="relative w-full bg-[#020202] py-[20vh] overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background radial soft light highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/[0.012] pointer-events-none blur-[140px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center space-y-12">
        
        {/* Massive Typographic CTA */}
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-mono tracking-[0.2em] text-white/35 uppercase block"
          >
            GET STARTED
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-[60px] md:text-[76px] font-light tracking-[-0.04em] leading-[1.05] text-white"
          >
            Build your second brain.<br />
            <span className="text-white/40">Never lose another memory.</span>
          </motion.h2>
        </div>

        {/* Action WhatsApp Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4.5 pt-4"
        >
          <a
            href="https://wa.me/your_number_here"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-white text-black font-medium text-[15px] transition-transform duration-300 hover:scale-[1.02] shadow-[0_4px_30px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-black text-black transition-transform duration-300 group-hover:scale-110" />
            <span>Link WhatsApp Instantly</span>
          </a>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-mono text-white/30 uppercase tracking-widest pt-2">
            <span>ZERO SETUP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span>NO CREDIT CARD</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span>ENCRYPTED LOGS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
