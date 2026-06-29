import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Send, Shield, FileText, Gift, Tv, Laptop } from 'lucide-react';

interface SearchQuery {
  id: number;
  question: string;
  icon: any;
  answer: {
    text: string;
    date: string;
    details: string;
    attachment?: {
      name: string;
      size: string;
      icon: any;
    };
  };
}

const QUERIES: SearchQuery[] = [
  {
    id: 1,
    question: "Where is my TV warranty?",
    icon: Tv,
    answer: {
      text: "Found TV Invoice. The 2-year warranty for your Samsung Neo QLED 65\" expires on December 28, 2027. You purchased it at Samsung NYC.",
      date: "December 28, 2025",
      details: "TV Invoice PDF indexed automatically from your WhatsApp uploads.",
      attachment: {
        name: "Samsung_TV_Invoice.pdf",
        size: "1.2 MB",
        icon: FileText
      }
    }
  },
  {
    id: 2,
    question: "When did I buy my MacBook?",
    icon: Laptop,
    answer: {
      text: "You bought your MacBook Pro on February 28, 2028. Total spent: $2,499.00.",
      date: "February 28, 2028",
      details: "Serial Number: C02DH5K1Q05D. AppleCare active until 2031.",
    }
  },
  {
    id: 3,
    question: "What gift does Laura like?",
    icon: Gift,
    answer: {
      text: "Laura likes handmade lavender ceramic cups and custom pottery (noted April 2026). She also mentioned liking lavender-scented candles.",
      date: "April 14, 2026",
      details: "Recorded from voice note transcription regarding anniversary gift ideas.",
    }
  }
];

export const MemorySearch = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const activeQuery = QUERIES[activeQueryIndex];

  // Simulator typewriter effect for the active question
  useEffect(() => {
    setTypedQuestion("");
    setShowResponse(false);
    setIsTyping(true);

    const question = activeQuery.question;
    let i = 0;
    const interval = setInterval(() => {
      if (i < question.length) {
        setTypedQuestion((prev) => prev + question[i]);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        // Delay before showing response bubble
        setTimeout(() => {
          setShowResponse(true);
        }, 350);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [activeQueryIndex]);

  return (
    <section className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Copy & Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block">
                05 / MEMORY SEARCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
                Ask naturally.<br />
                <span className="text-white/40">Recall instantly.</span>
              </h2>
              <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[420px]">
                Du Life maps unstructured text and files into a semantic network. You can query your memory inside WhatsApp as if you're chatting with a friend.
              </p>
            </div>

            {/* Quick click targets */}
            <div className="space-y-3.5 pt-4">
              <p className="text-[11px] font-mono tracking-wider text-white/25 uppercase">
                Tap to simulate queries:
              </p>
              <div className="flex flex-col gap-2">
                {QUERIES.map((q, idx) => {
                  const Icon = q.icon;
                  const isActive = idx === activeQueryIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`flex items-center gap-3.5 w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'border-white/10 bg-white/[0.03] text-white' 
                          : 'border-white/[0.02] bg-white/[0.005] hover:bg-white/[0.015] text-white/40'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-violet-400' : 'text-white/20'}`} />
                      <span className="text-[13px] font-light tracking-wide">{q.question}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mockup Interface */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-[560px] rounded-3xl border border-white/[0.06] bg-[#050508]/80 backdrop-blur-md overflow-hidden flex flex-col h-[440px] shadow-[0_24px_50px_rgba(0,0,0,0.8)]">
              
              {/* Header bar */}
              <div className="px-6 py-4 border-b border-white/[0.05] bg-[#08080a]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
                    WhatsApp memory link
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-white/30">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono">ENCRYPTED</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 p-6 space-y-5 overflow-y-auto no-scrollbar flex flex-col justify-end">
                
                {/* User Message Bubble */}
                <div className="flex justify-end w-full">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3 bg-[#17171c] border border-white/[0.03] text-[13px] text-white/90 font-light leading-relaxed">
                    <span>{typedQuestion}</span>
                    {isTyping && <span className="cursor-blink" />}
                  </div>
                </div>

                {/* AI Reply Bubble */}
                <div className="h-[210px] flex flex-col justify-end">
                  <AnimatePresence mode="wait">
                    {showResponse && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="space-y-3.5 w-full flex flex-col items-start"
                      >
                        {/* Avatar tag */}
                        <div className="flex items-center gap-1.5 ml-1">
                          <div className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                            <span className="text-[8px] text-violet-300 font-bold leading-none">DU</span>
                          </div>
                          <span className="text-[9px] font-mono text-white/30 uppercase">Du Life OS</span>
                        </div>

                        {/* Text block */}
                        <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4.5 py-3.5 bg-[#0a0a0d] border border-white/[0.06] text-[13px] text-white/80 font-light leading-relaxed space-y-3">
                          <p>{activeQuery.answer.text}</p>
                          
                          {/* Attached document inside the chat thread */}
                          {activeQuery.answer.attachment && (
                            <div className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.04] bg-white/[0.02]">
                              <FileText className="w-5 h-5 text-violet-400 shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-[12px] text-white/85 truncate font-medium">{activeQuery.answer.attachment.name}</p>
                                <p className="text-[10px] text-white/30">{activeQuery.answer.attachment.size}</p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[9px] text-white/35 font-mono">
                            <span>Saved: {activeQuery.answer.date}</span>
                            <span>INDEXED</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* Mock input bar */}
              <div className="p-4 border-t border-white/[0.05] bg-[#08080a]/60 flex items-center gap-3">
                <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-full px-4 py-2 flex items-center justify-between text-xs text-white/20 font-light">
                  <span>Type a message...</span>
                  <Search className="w-3.5 h-3.5 text-white/25" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                  <Send className="w-3.5 h-3.5 fill-black" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
