import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { HeroVisual } from './HeroVisual';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      lime: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.28;
        this.vy = (Math.random() - 0.5) * 0.28;
        this.radius = Math.random() * 1.5 + 1;
        this.alpha = Math.random() * 0.35 + 0.15;
        this.lime = Math.random() > 0.85;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.lime
          ? `rgba(196, 233, 56, ${this.alpha})`
          : `rgba(255, 255, 255, ${this.alpha})`;
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 16000), 90);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse coordinates
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Background vignette/radial gradient
      const radialGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      radialGlow.addColorStop(0, '#131309');
      radialGlow.addColorStop(1, '#0D0D11');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        // Calculate distance to mouse
        if (mouse.active) {
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 220) {
            // Magnetic force pull
            p1.x += dxMouse * 0.008;
            p1.y += dyMouse * 0.008;

            // Draw line to mouse
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(196, 233, 56, ${0.08 * (1 - distMouse / 220)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw connections between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D0D11]">
      {/* Interactive Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      {/* Top spacer */}
      <div className="h-20" />

      {/* Main Hero Content: copy + phone mockup */}
      <div className="relative z-10 flex-1 max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full">
        <div className="max-w-[620px] space-y-8">

          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4E938] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/50">
              Tu asistente personal por WhatsApp
            </span>
          </motion.div>

          {/* Enormous typography headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-[56px] md:text-[64px] font-light tracking-[-0.04em] leading-[1.02] text-white"
          >
            Tu vida, organizada
            <br />
            por <span className="text-[#C4E938]">WhatsApp</span>.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg font-light text-white/50 leading-relaxed max-w-[480px] tracking-tight"
          >
            No hay que descargar ni aprender nada nuevo. Escríbele a Du Life como a un contacto más, y una IA se encarga de tus finanzas, tareas, calendario, notas y documentos.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <MagneticButton
              className="px-7 py-4 rounded-full bg-[#C4E938] text-black font-semibold text-[14px] hover:bg-[#d4f552] transition-colors duration-300 shadow-[0_4px_30px_rgba(196,233,56,0.18)]"
              onClick={() => window.open('https://wa.me/your_number_here', '_blank', 'noopener,noreferrer')}
            >
              <MessageSquare className="w-4 h-4 fill-black text-black shrink-0" />
              <span>Empieza ahora</span>
            </MagneticButton>

            <a
              href="#funciones"
              className="group flex items-center justify-center gap-1.5 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300 text-[14px] text-white/70 hover:text-white"
            >
              <span>Explora Du Life</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

        </div>

        {/* Phone mockup — WhatsApp conversation animating */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center items-center"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Bottom bar - Scroll guide & silent assurances */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex flex-row items-center justify-between border-t border-white/[0.05]">
        <span className="text-[11px] font-mono tracking-widest text-white/25">
          100% PRIVADO · CERO DESCARGAS
        </span>
        <div className="flex items-center gap-4 text-[11px] font-mono text-white/35">
          <span>SIGUE BAJANDO</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-3 border border-white/30 rounded-full flex justify-center p-[2px]"
          >
            <span className="w-0.5 h-0.5 bg-white rounded-full" />
          </motion.span>
        </div>
      </div>
    </section>
  );
};
