import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Search, Smartphone, ArrowRight } from 'lucide-react';

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isLast = false, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex flex-col items-center text-center group flex-1"
    >
      {/* Icon Circle */}
      <div className="relative w-20 h-20 rounded-full bg-white/[0.01] border border-white/5 flex items-center justify-center text-text-secondary z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-primary-blue/30 group-hover:text-accent-blue group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
        {icon}
        {/* Step Number Badge */}
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary-blue text-white text-[10px] font-bold flex items-center justify-center shadow-md select-none">
          {number}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-text-primary mt-8 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-text-secondary text-sm max-w-[220px] leading-relaxed font-normal">
        {description}
      </p>

      {/* Connecting Arrow/Line (Desktop only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-[1px] bg-gradient-to-r from-white/10 to-white/5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out" />
          <ArrowRight className="absolute -right-2 -top-1.5 w-3 h-3 text-white/15 group-hover:text-primary-blue transition-colors duration-300" />
        </div>
      )}
    </motion.div>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <Smartphone className="w-6 h-6 stroke-[1.2]" />,
      title: 'Open WhatsApp',
      description: 'Start a chat with Du Life using the official number.'
    },
    {
      number: '2',
      icon: <MessageSquare className="w-6 h-6 stroke-[1.2]" />,
      title: 'Talk naturally',
      description: 'Send messages, notes, reminders, or files without structure.'
    },
    {
      number: '3',
      icon: <Brain className="w-6 h-6 stroke-[1.2]" />,
      title: 'Du Life remembers',
      description: 'The AI processes and securely stores everything instantly.'
    },
    {
      number: '4',
      icon: <Search className="w-6 h-6 stroke-[1.2]" />,
      title: 'Ask anything later',
      description: 'Query your memory whenever you need a detail recalled.'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-36 bg-[#09090B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-28 space-y-5">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
            Workflow
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
            How Du Life Works
          </p>
          <p className="text-text-secondary text-base sm:text-lg font-normal">
            Four simple steps to absolute recall.
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-8 relative">
          
          {/* Vertical Connector Line (Mobile only) */}
          <div className="lg:hidden absolute left-[39px] top-10 bottom-10 w-[1px] bg-white/5 pointer-events-none" />

          {steps.map((step, idx) => (
            <div key={idx} className="w-full lg:w-auto flex lg:block items-center lg:items-stretch gap-6 lg:gap-0">
              <div className="flex-1 lg:flex-none">
                <Step
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={idx === steps.length - 1}
                  index={idx}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
