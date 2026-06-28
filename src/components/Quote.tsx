import React from 'react';

export const Quote: React.FC = () => {
  return (
    <section className="relative py-56 bg-[#09090B] overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Soft background glow */}
      <div className="absolute w-[600px] h-[300px] bg-[#2563EB]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-8 text-center relative z-10 space-y-12">
        {/* Subtle decorative line */}
        <div className="w-12 h-[1px] bg-white/10 mx-auto" />

        {/* Quote Text */}
        <blockquote className="space-y-8">
          <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.2] font-sans max-w-4xl mx-auto">
            "Your life creates thousands of memories. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-text-secondary/60">
              Du Life makes sure none of them are lost.
            </span>"
          </p>
        </blockquote>

        <div className="w-12 h-[1px] bg-white/10 mx-auto" />
      </div>
    </section>
  );
};
