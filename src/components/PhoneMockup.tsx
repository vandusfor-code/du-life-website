import React from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, CheckCheck, Send, MoreVertical, Phone, Video, ArrowLeft, Paperclip, Smile } from 'lucide-react';

interface PhoneMockupProps {
  step: number; // 1 to 5
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'system';
  text: string;
  time: string;
  status?: 'sent' | 'delivered' | 'read';
  isAudio?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ step }) => {
  // 3D Parallax Mouse Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 180 });

  // Dynamic glass reflection translation
  const shineX = useSpring(useTransform(x, [-0.5, 0.5], [-60, 60]), { damping: 25, stiffness: 180 });
  const shineY = useSpring(useTransform(y, [-0.5, 0.5], [-60, 60]), { damping: 25, stiffness: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates to [-0.5, 0.5]
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getMessagesForStep = (currentStep: number): ChatMessage[] => {
    switch (currentStep) {
      case 1:
        return [
          { id: 'f1', sender: 'user', text: "¿Dónde dejé las llaves de repuesto del carro?", time: "10:24 AM", status: 'read' },
          { id: 'f2', sender: 'system', text: "🤔 No encontré ese recuerdo. Nunca me lo contaste.", time: "10:24 AM" }
        ];
      case 2:
        return [
          { id: 'm1', sender: 'user', text: "Recuerda: dejé las llaves de repuesto en el florero azul.", time: "10:28 AM", status: 'sent' }
        ];
      case 3:
        return [
          { id: 'u1', sender: 'user', text: "Recuerda: dejé las llaves de repuesto en el florero azul.", time: "10:28 AM", status: 'read' },
          { id: 'u2', sender: 'bot', text: "🔒 Guardado. Recordaré que las llaves de repuesto están en el florero azul.", time: "10:28 AM" }
        ];
      case 4:
        return [];
      case 5:
        return [
          { id: 'a1', sender: 'user', text: "¿dónde quedaron las llaves del carro?", time: "2:15 PM", status: 'read' },
          { id: 'a2', sender: 'bot', text: "🔑 En el florero azul. Lo guardaste el 28 de junio (hace 3 meses).", time: "2:15 PM" }
        ];
      default:
        return [];
    }
  };

  const messages = getMessagesForStep(step);

  return (
    <div 
      className="perspective-[1000px] py-10 w-full flex justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-[310px] h-[620px] xs:w-[340px] xs:h-[680px] rounded-[50px] bg-[#0c0c0e] p-[12px] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col overflow-hidden select-none transition-shadow duration-300 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.95)]"
      >
        {/* Dynamic Glass Reflection / Shine */}
        <motion.div 
          style={{ 
            x: shineX, 
            y: shineY,
            rotate: 25
          }}
          className="absolute -inset-y-1/2 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none z-30" 
        />

        {/* Speaker and Camera Notch (Dynamic Island) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[110px] h-[30px] rounded-full bg-black z-40 flex items-center justify-between px-3">
          <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border border-white/5"></div>
          <div className="w-[45px] h-[4px] rounded-full bg-[#151515]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#05051a]"></div>
        </div>

        {/* Screen Container */}
        <div className="relative w-full h-full rounded-[38px] bg-[#070708] overflow-hidden flex flex-col border border-white/5">
          
          {/* Time Lapse Overlay for Step 4 */}
          <AnimatePresence>
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-[#070708] z-30 flex flex-col items-center justify-center p-6 text-center"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-16 h-16 rounded-full border-2 border-white/5 border-t-white/40 mb-6"
                />
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs tracking-[0.2em] text-white/40 uppercase font-mono"
                >
                  El tiempo pasa
                </motion.span>
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-light tracking-tight mt-2 text-white/90"
                >
                  3 meses después
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-white/45 max-w-[180px] mt-2 font-light"
                >
                  Tu mente lo olvidó. Du Life no.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Bar */}
          <div className="h-[40px] pt-3 px-6 flex items-center justify-between text-[11px] text-white/60 font-medium z-20 bg-[#0c0c0e]/40 backdrop-blur-md">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-[2px] h-[8px]">
                <div className="w-[3px] h-[3px] bg-white/60 rounded-[0.5px]"></div>
                <div className="w-[3px] h-[5px] bg-white/60 rounded-[0.5px]"></div>
                <div className="w-[3px] h-[7px] bg-white/60 rounded-[0.5px]"></div>
                <div className="w-[3px] h-[9px] bg-white rounded-[0.5px]"></div>
              </div>
              <span>5G</span>
              <div className="w-[20px] h-[10px] rounded-[3px] border border-white/40 p-[1px] flex items-center">
                <div className="h-full w-[80%] bg-white rounded-[1.5px]"></div>
              </div>
            </div>
          </div>

          {/* WhatsApp App Bar */}
          <div className="px-3 py-2 bg-[#0c0c0d] border-b border-white/5 flex items-center justify-between z-20">
            <div className="flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4 text-white/70" />
              
              <div className="relative w-8 h-8 rounded-full bg-[#C4E938] border border-white/10 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] font-bold text-black tracking-widest">DU</span>
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-[#0c0c0d]"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white/90 leading-tight">Du Life</span>
                <span className="text-[9px] text-green-400 font-light leading-none">en línea</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/70">
              <Video className="w-4 h-4" />
              <Phone className="w-3.5 h-3.5" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080809] relative flex flex-col justify-end no-scrollbar">
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none flex items-center justify-center">
              <span className="text-[120px] font-bold">DU</span>
            </div>

            <div className="space-y-3 w-full">
              <AnimatePresence mode="popLayout">
                {messages.map((msg, idx) => {
                  const isUser = msg.sender === 'user';
                  const isSystem = msg.sender === 'system';

                  if (isSystem) {
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="mx-auto my-2 px-3 py-1.5 rounded-lg bg-[#18181b]/60 border border-white/5 text-[10px] text-white/50 text-center max-w-[85%] font-light"
                      >
                        {msg.text}
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 15, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}
                    >
                      <div
                        className={`relative max-w-[80%] rounded-[18px] px-3.5 py-2 text-xs shadow-sm leading-relaxed ${
                          isUser
                            ? 'bg-[#1e1e24] text-white/95 rounded-tr-sm border border-white/5'
                            : 'bg-[#121215] text-white/90 rounded-tl-sm border border-[#C4E938]/20'
                        }`}
                      >
                        <p className="font-light">{msg.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1 text-[8px] text-white/40 leading-none">
                          <span>{msg.time}</span>
                          {isUser && (
                            <span>
                              {msg.status === 'sent' && <Check className="w-2.5 h-2.5" />}
                              {msg.status === 'delivered' && <CheckCheck className="w-2.5 h-2.5" />}
                              {msg.status === 'read' && <CheckCheck className="w-2.5 h-2.5 text-[#C4E938]" />}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-2.5 bg-[#0c0c0d] border-t border-white/5 flex items-center gap-1.5 z-20">
            <div className="flex-1 bg-[#151518] rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/5">
              <Smile className="w-4 h-4 text-white/45 shrink-0" />
              <div className="flex-1 text-[11px] text-white/30 font-light truncate">
                {step === 1 && "Escribe un mensaje..."}
                {step === 2 && "escribiendo..."}
                {step === 3 && "Du Life está pensando..."}
                {step === 4 && "..."}
                {step === 5 && "Escribe un mensaje..."}
              </div>
              <Paperclip className="w-3.5 h-3.5 text-white/45 shrink-0" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#C4E938] border border-white/10 flex items-center justify-center shrink-0">
              <Send className="w-3.5 h-3.5 text-black ml-[1px]" />
            </div>
          </div>

        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[4px] rounded-full bg-white/20 z-40"></div>
      </motion.div>
    </div>
  );
};
