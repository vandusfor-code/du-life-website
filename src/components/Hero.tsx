import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckCheck, FileText, Send, Shield, Smartphone, Heart, Sparkles, Download } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'du';
  text?: string;
  time: string;
  type: 'text' | 'file';
  fileName?: string;
  fileInfo?: string;
}

export const Hero: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const badges = [
    { text: 'Private by Design', icon: <Shield className="w-3.5 h-3.5" /> },
    { text: 'Works with WhatsApp', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { text: 'Encrypted Memory', icon: <Heart className="w-3.5 h-3.5" /> },
    { text: 'AI Powered', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { text: 'No Installation', icon: <Download className="w-3.5 h-3.5" /> },
  ];

  useEffect(() => {
    const sequence = [
      {
        delay: 1200,
        message: {
          id: 1,
          sender: 'user' as const,
          text: 'Where did I save my TV warranty?',
          time: '10:24 AM',
          type: 'text' as const
        }
      },
      {
        delay: 2600,
        typing: true
      },
      {
        delay: 4400,
        message: {
          id: 2,
          sender: 'du' as const,
          text: 'You saved it on March 14.',
          time: '10:25 AM',
          type: 'text' as const
        }
      },
      {
        delay: 5200,
        message: {
          id: 3,
          sender: 'du' as const,
          time: '10:25 AM',
          type: 'file' as const,
          fileName: 'Samsung_Warranty.pdf',
          fileInfo: '1.4 MB • PDF'
        }
      },
      {
        delay: 6400,
        typing: true
      },
      {
        delay: 8000,
        message: {
          id: 4,
          sender: 'du' as const,
          text: 'Warranty expires in 18 months.\n\nWould you like me to open the PDF?',
          time: '10:25 AM',
          type: 'text' as const
        }
      }
    ];

    let timers: number[] = [];

    // Run the animation sequence
    sequence.forEach((step) => {
      const timer = window.setTimeout(() => {
        if (step.typing) {
          setIsTyping(true);
        } else if (step.message) {
          setIsTyping(false);
          setMessages((prev) => [...prev, step.message]);
        }
      }, step.delay);
      timers.push(timer);
    });

    // Reset loop after 24 seconds to keep the hero page active
    const resetTimer = window.setInterval(() => {
      setMessages([]);
      setIsTyping(false);
      sequence.forEach((step) => {
        const t = window.setTimeout(() => {
          if (step.typing) {
            setIsTyping(true);
          } else if (step.message) {
            setIsTyping(false);
            setMessages((prev) => [...prev, step.message]);
          }
        }, step.delay);
        timers.push(t);
      });
    }, 25000);

    return () => {
      timers.forEach((t) => clearTimeout(t));
      clearInterval(resetTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#09090B]">
      {/* Premium background gradient orbs */}
      <div className="glow-orb glow-orb-blue top-1/4 -left-1/4 animate-glow" />
      <div className="glow-orb glow-orb-purple top-1/3 -right-1/4 animate-glow" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* Left Column: Text & Social Proof */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.08] font-sans"
          >
            The AI that remembers <br />
            your life.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-text-secondary font-normal max-w-xl leading-relaxed"
          >
            Du Life remembers conversations, files, reminders and important moments directly inside WhatsApp, allowing you to focus on living instead of remembering everything.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/573239117508"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-blue hover:bg-blue-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-primary-blue/15 transition-colors duration-300"
            >
              Chat on WhatsApp
              <MessageSquare className="ml-2 w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-text-primary font-semibold text-sm tracking-wide transition-colors duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-10 border-t border-white/5 w-full"
          >
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/10 text-xs font-medium text-text-secondary transition-colors duration-300 select-none"
                >
                  <span className="text-accent-blue">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Fidelity iPhone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          {/* iPhone Frame */}
          <div className="relative w-full max-w-[340px] aspect-[9/19] rounded-[52px] border-[10px] border-[#18181B] bg-black p-3 shadow-2xl shadow-primary-blue/5 overflow-hidden flex flex-col">
            
            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#18181B] rounded-b-2xl z-40 flex items-center justify-center">
              <div className="w-12 h-1.5 bg-black/50 rounded-full" />
            </div>

            {/* WhatsApp Interface */}
            <div className="flex-1 rounded-[36px] overflow-hidden bg-[#0B141A] flex flex-col relative z-10 border border-white/5">
              
              {/* WhatsApp Header */}
              <div className="bg-[#1F2C34] px-4 pt-6 pb-3 flex items-center justify-between text-white border-b border-white/5 select-none">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-primary-blue to-accent-blue flex items-center justify-center shadow-inner">
                    <span className="font-bold text-xs text-white">D</span>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1F2C34]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-[#FAFAFA]">Du Life</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] text-green-400 font-medium">Online</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-white/90 font-bold tracking-wider uppercase">
                    Official
                  </span>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end bg-[#0B141A] relative space-y-3">
                {/* WhatsApp Chat Wallpaper Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:20px_20px]" />

                {/* Date Header */}
                <div className="self-center my-1.5 z-10">
                  <span className="text-[9px] bg-[#1F2C34] text-[#8696A0] px-3 py-1 rounded-md uppercase tracking-wider font-bold">
                    Today
                  </span>
                </div>

                {/* Render Messages */}
                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[85%] rounded-lg px-3 py-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-sm relative z-10 ${
                        msg.sender === 'user'
                          ? 'self-end bg-[#005C4B] text-[#E9EDEF] rounded-tr-none'
                          : 'self-start bg-[#202C33] text-[#E9EDEF] rounded-tl-none'
                      }`}
                    >
                      {msg.type === 'file' ? (
                        <div className="flex flex-col gap-2 bg-[#182229] p-2.5 rounded-md border border-white/5 min-w-[200px]">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded bg-red-950/50 flex items-center justify-center text-red-500">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="text-left flex-1 min-w-0">
                              <p className="font-semibold text-xs text-[#E9EDEF] truncate">{msg.fileName}</p>
                              <p className="text-[9px] text-[#8696A0]">{msg.fileInfo}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-left leading-relaxed whitespace-pre-line text-[13px]">{msg.text}</p>
                      )}
                      
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[8px] text-[#8696A0]">{msg.time}</span>
                        {msg.sender === 'user' && (
                          <CheckCheck className="w-3 h-3 text-[#53BDEB]" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="self-start bg-[#202C33] text-[#E9EDEF] rounded-lg rounded-tl-none px-3.5 py-2.5 shadow-sm flex items-center gap-1 z-10">
                    <span className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="bg-[#1F2C34] p-2.5 flex items-center gap-2 border-t border-white/5 select-none">
                <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-1.5 flex items-center text-left">
                  <span className="text-xs text-[#8696A0]">Message</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-md">
                  <Send className="w-3.5 h-3.5 fill-white translate-x-[0.5px]" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
