import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Bell, 
  Mic, 
  Search, 
  Sparkles, 
  Brain, 
  Clock, 
  Lock 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative rounded-3xl p-8 glass-card overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between border border-white/[0.03]"
    >
      {/* Background glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary-blue/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div>
        {/* Icon wrapper */}
        <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-text-secondary mb-6 group-hover:border-primary-blue/20 group-hover:text-accent-blue transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-text-primary mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <MessageSquare className="w-5 h-5 stroke-[1.5]" />,
      title: 'Remember conversations',
      description: 'Keep track of agreements, shared details, and discussions from chat history effortlessly.'
    },
    {
      icon: <FileText className="w-5 h-5 stroke-[1.5]" />,
      title: 'Remember documents',
      description: 'Store and retrieve PDFs, images, and files instantly. Never lose a receipt, warranty, or ticket again.'
    },
    {
      icon: <Bell className="w-5 h-5 stroke-[1.5]" />,
      title: 'Remember reminders',
      description: 'Set natural reminders in plain text. Du Life alerts you exactly when it matters on WhatsApp.'
    },
    {
      icon: <Mic className="w-5 h-5 stroke-[1.5]" />,
      title: 'Remember voice notes',
      description: 'Send audio messages. Du Life transcribes, indexes, and understands the context of your voice.'
    },
    {
      icon: <Search className="w-5 h-5 stroke-[1.5]" />,
      title: 'Find anything instantly',
      description: 'Query your memory vault using natural language and get precise answers in milliseconds.'
    },
    {
      icon: <Sparkles className="w-5 h-5 stroke-[1.5]" />,
      title: 'Natural conversations',
      description: 'No complex commands. Chat with Du Life as if you were messaging a helpful assistant.'
    },
    {
      icon: <Brain className="w-5 h-5 stroke-[1.5]" />,
      title: 'Context awareness',
      description: 'Our AI understands semantic relationships between chats, files, and times for accurate recall.'
    },
    {
      icon: <Clock className="w-5 h-5 stroke-[1.5]" />,
      title: 'Smart memory timeline',
      description: 'View and explore your history structured chronologically in a clean, intuitive timeline.'
    },
    {
      icon: <Lock className="w-5 h-5 stroke-[1.5]" />,
      title: 'Secure encrypted storage',
      description: 'All your data is secured with AES-256 encryption. Your private memories remain completely private.'
    }
  ];

  return (
    <section id="features" className="relative py-36 bg-[#09090B] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-primary-blue/[0.01] blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-24 space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
            Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight font-sans">
            Features built for your second brain.
          </p>
          <p className="text-text-secondary text-base sm:text-lg font-normal max-w-2xl">
            Du Life runs quietly in the background, transforming WhatsApp into your secure personal memory vault.
          </p>
        </div>

        {/* Feature Cards Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
