import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

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

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.28;
        this.vy = (Math.random() - 0.5) * 0.28;
        this.radius = Math.random() * 1.5 + 1;
        this.alpha = Math.random() * 0.35 + 0.15;
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
        c.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
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
      radialGlow.addColorStop(0, '#0a0a0c');
      radialGlow.addColorStop(1, '#020202');
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
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distMouse / 220)})`;
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
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#020202]">
      {/* Interactive Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      {/* Top spacer */}
      <div className="h-20" />

      {/* Main Hero Copy Container */}
      <div className="relative z-10 flex-1 max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col justify-center w-full">
        <div className="max-w-[850px] space-y-8">
          
          {/* Subtle Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/50">
              Your Memory Operating System
            </span>
          </motion.div>

          {/* Enormous typography headlines */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px] font-light tracking-[-0.04em] leading-[0.92] text-white"
            >
              Remember everything.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px] font-light tracking-[-0.04em] leading-[0.92] text-white/40"
            >
              Forget nothing.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-[580px] tracking-tight"
          >
            Your life deserves a second memory. Du Life lives in WhatsApp, keeping track of conversations, documents, purchases, and ideas forever.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a
              href="https://wa.me/your_number_here"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-black font-medium text-[14px] transition-transform duration-300 hover:scale-[1.02] shadow-[0_4px_24px_rgba(255,255,255,0.12)] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span>Start on WhatsApp</span>
            </a>

            <a
              href="#problem"
              className="group flex items-center justify-center gap-1.5 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300 text-[14px] text-white/70 hover:text-white"
            >
              <span>Explore Du Life</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar - Scroll guide & silent assurances */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex flex-row items-center justify-between border-t border-white/[0.05]">
        <span className="text-[11px] font-mono tracking-widest text-white/25">
          STRICTLY PRIVATE · ZERO DOWNLOAD
        </span>
        <div className="flex items-center gap-4 text-[11px] font-mono text-white/35">
          <span>SCROLL TO BEGIN</span>
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
