import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lock, Trash2, ShieldX, ShieldCheck } from 'lucide-react';

interface PrivacyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const PrivacyCard: React.FC<PrivacyCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col p-8 rounded-3xl border border-white/[0.03] bg-white/[0.01] hover:border-white/10 transition-all duration-300 space-y-6"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-blue">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-text-primary tracking-tight">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const Privacy: React.FC = () => {
  return (
    <section id="privacy" className="relative py-36 bg-[#09090B] border-t border-white/5 overflow-hidden">
      {/* Background radial gradient to inspire security/calm */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.01] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
              Trust & Security
            </span>
          </div>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
            Your memories belong to you.
          </p>
          <p className="text-text-secondary text-base sm:text-lg font-normal">
            We believe personal memories are sacred. Du Life is built from the ground up with privacy as a core engineering requirement.
          </p>
        </div>

        {/* 4 Privacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PrivacyCard
            index={0}
            icon={<MessageSquare className="w-5 h-5 stroke-[1.5]" />}
            title="Private conversations"
            description="Your chats are processed solely to index and retrieve your memories. No human reads them."
          />
          <PrivacyCard
            index={1}
            icon={<Lock className="w-5 h-5 stroke-[1.5]" />}
            title="Encrypted storage"
            description="All stored documents, texts, and memories are secured with industry-standard AES-256 encryption."
          />
          <PrivacyCard
            index={2}
            icon={<Trash2 className="w-5 h-5 stroke-[1.5]" />}
            title="Delete your data anytime"
            description="You have absolute control. Simply type 'delete my account' to permanently wipe all your data instantly."
          />
          <PrivacyCard
            index={3}
            icon={<ShieldX className="w-5 h-5 stroke-[1.5]" />}
            title="No selling personal info"
            description="We do not sell, rent, or share your personal data. Our business is built on trust, not advertising."
          />
        </div>

      </div>
    </section>
  );
};
