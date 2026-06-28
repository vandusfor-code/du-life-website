import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, MessageSquare } from 'lucide-react';

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, label, value, href, index }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 p-6 rounded-2xl border border-white/[0.03] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 text-left"
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-blue">
        {icon}
      </div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary block mb-1">
          {label}
        </span>
        <span className="text-text-primary font-semibold text-sm sm:text-base tracking-tight">
          {value}
        </span>
      </div>
    </motion.a>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-36 bg-[#09090B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
            Support
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
            Get in Touch
          </p>
          <p className="text-text-secondary text-base sm:text-lg font-normal">
            Have questions about Du Life? We are here to help. Reach out through any channel.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ContactMethod
            icon={<Globe className="w-5 h-5" />}
            label="Official Website"
            value="dur.life"
            href="https://dur.life"
            index={0}
          />
          <ContactMethod
            icon={<Mail className="w-5 h-5" />}
            label="Email Support"
            value="contact@dur.life"
            href="mailto:contact@dur.life"
            index={1}
          />
          <ContactMethod
            icon={<MessageSquare className="w-5 h-5" />}
            label="WhatsApp Chat"
            value="+57 323 911 7508"
            href="https://wa.me/573239117508"
            index={2}
          />
        </div>

      </div>
    </section>
  );
};
