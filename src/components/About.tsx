import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-36 bg-[#09090B] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[250px] bg-primary-blue/[0.01] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-5 text-left space-y-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
              Our Story
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
              About Du Life
            </p>
          </div>

          {/* Right: Content Card */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="p-8 sm:p-10 rounded-3xl border border-white/[0.03] bg-white/[0.01] space-y-6 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-blue">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-base">Independent Development</h3>
                  <p className="text-xs text-text-secondary">Created by Duvan Andres Ramos Padilla</p>
                </div>
              </div>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
                Du Life is an independent AI memory assistant created and developed by <span className="text-text-primary font-medium">Duvan Andres Ramos Padilla</span>.
              </p>
              
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
                Its mission is to become your second memory by securely remembering conversations, files, reminders and important moments through WhatsApp.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
