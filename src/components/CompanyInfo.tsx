import React from 'react';
import { motion } from 'framer-motion';

export const CompanyInfo: React.FC = () => {
  const details = [
    { label: 'Brand', value: 'Du Life' },
    { label: 'Founder', value: 'Duvan Andres Ramos Padilla' },
    { label: 'Product', value: 'AI Memory Assistant for WhatsApp' },
    { label: 'Official Website', value: 'https://dur.life', isLink: true },
  ];

  return (
    <section className="relative py-24 bg-[#09090B] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-left">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl border border-white/[0.02] bg-white/[0.01] space-y-6"
        >
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary/60">
            Company Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            {details.map((detail, idx) => (
              <div key={idx} className="flex flex-col space-y-1 py-2 border-b border-white/[0.02]">
                <span className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                  {detail.label}
                </span>
                {detail.isLink ? (
                  <a 
                    href={detail.value} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-blue hover:text-blue-400 font-semibold transition-colors duration-300"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-text-primary font-medium">
                    {detail.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
