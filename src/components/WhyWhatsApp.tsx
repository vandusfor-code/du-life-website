import React from 'react';
import { Smartphone, ShieldAlert, Zap, MessageSquare } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4 text-left p-6 rounded-2xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300">
      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-blue">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text-primary tracking-tight">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const WhyWhatsApp: React.FC = () => {
  return (
    <section className="relative py-36 bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Title Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 text-left space-y-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
              Seamless Integration
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
              Why WhatsApp?
            </p>
          </div>
          <div className="lg:col-span-7 text-left">
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              Building a second brain shouldn't feel like a chore. Du Life works where you already communicate every day, removing all friction between thinking and remembering.
            </p>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Benefit
            icon={<Smartphone className="w-5 h-5 stroke-[1.5]" />}
            title="No new app."
            description="No downloads, no storage waste. Accessible instantly from any device with WhatsApp."
          />
          <Benefit
            icon={<ShieldAlert className="w-5 h-5 stroke-[1.5]" />}
            title="No passwords."
            description="Secure verification linked directly to your phone number. No credentials to lose."
          />
          <Benefit
            icon={<Zap className="w-5 h-5 stroke-[1.5]" />}
            title="No learning curve."
            description="No complex markdown, databases, or folders. If you can text, you can use Du Life."
          />
          <Benefit
            icon={<MessageSquare className="w-5 h-5 stroke-[1.5]" />}
            title="Simply send a message."
            description="Text, voice notes, links, or PDFs. Just send it to Du Life, and it remembers forever."
          />
        </div>

      </div>
    </section>
  );
};
