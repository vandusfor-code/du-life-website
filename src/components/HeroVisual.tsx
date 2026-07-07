import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Bell, MessageCircle } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { IllustratedPhone } from './IllustratedPhone';

const AUTOPLAY_STEPS = [1, 2, 3, 5];

export const HeroVisual = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % AUTOPLAY_STEPS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[460px] h-[560px] flex items-center justify-center">

      {/* Dashed orbit path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 560" fill="none">
        <motion.ellipse
          cx="230" cy="280" rx="205" ry="250"
          stroke="#C4E938" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="5 9"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -280 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Floating icon badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-0 w-11 h-11 rounded-full bg-[#16161F] border border-[#C4E938]/30 flex items-center justify-center text-[#C4E938] shadow-[0_0_25px_rgba(196,233,56,0.15)] z-30"
      >
        <Wallet className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute bottom-20 right-2 w-10 h-10 rounded-full bg-[#C4E938] flex items-center justify-center text-black shadow-[0_0_25px_rgba(196,233,56,0.3)] z-30"
      >
        <Bell className="w-4 h-4" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        className="absolute top-1/2 right-0 w-9 h-9 rounded-full bg-[#16161F] border border-white/10 flex items-center justify-center text-white/70 z-30"
      >
        <MessageCircle className="w-4 h-4" />
      </motion.div>

      {/* Back phone — illustrated finance screen, tilted left */}
      <div className="absolute left-2 top-6 -rotate-[9deg] scale-[0.68] origin-top-left opacity-95 z-10">
        <IllustratedPhone variant="finance" />
      </div>

      {/* Front phone — live WhatsApp conversation, tilted right */}
      <div className="absolute right-0 bottom-0 rotate-[5deg] scale-[0.82] origin-bottom-right z-20">
        <PhoneMockup step={AUTOPLAY_STEPS[index]} />
      </div>

    </div>
  );
};
