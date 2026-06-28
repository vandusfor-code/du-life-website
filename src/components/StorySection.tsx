import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';

interface Step {
  id: number;
  headline: string;
  body: string;
}

const steps: Step[] = [
  {
    id: 1,
    headline: 'You can\'t remember everything.',
    body: 'The keys, the warranty, the wifi password, the name of that place. Your mind has better things to do.',
  },
  {
    id: 2,
    headline: 'Just send a message.',
    body: 'Type or voice-note anything to Du Life on WhatsApp. Like texting a friend. No setup, no tags, no categories.',
  },
  {
    id: 3,
    headline: 'It\'s saved instantly.',
    body: 'Du Life understands context, extracts what matters, and stores it securely. Done in under a second.',
  },
  {
    id: 4,
    headline: 'Weeks go by.',
    body: 'You forget — that\'s the point. Your brain moves on. Du Life holds the thread.',
  },
  {
    id: 5,
    headline: 'Ask, and it answers.',
    body: '"Where are the car keys?" In the blue vase. Saved June 28. Every detail, exactly as you left it.',
  },
];

export const StorySection: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="relative bg-[#070707] separator">

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* ── LEFT: scrolling text ── */}
        <div className="py-32 relative">

          {/* Progress line */}
          <div className="absolute left-0 top-32 bottom-32 w-px bg-white/[0.06] hidden lg:block">
            <motion.div
              className="w-px bg-[#f5f5f7]/50"
              style={{ transformOrigin: 'top' }}
              animate={{ scaleY: (active - 1) / (steps.length - 1) }}
              transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            />
          </div>

          <div className="space-y-[36vh]">
            {steps.map((step) => {
              const isActive = active === step.id;
              return (
                <motion.div
                  key={step.id}
                  onViewportEnter={() => setActive(step.id)}
                  viewport={{ amount: 0.55 }}
                  className="pl-0 lg:pl-10 min-h-[30vh] flex flex-col justify-center"
                >
                  {/* Step number — small, quiet */}
                  <motion.span
                    animate={{ opacity: isActive ? 0.35 : 0.15 }}
                    className="text-[11px] font-medium text-[#f5f5f7] tracking-widest mb-5 block"
                  >
                    {String(step.id).padStart(2, '0')}
                  </motion.span>

                  {/* Headline — Apple weight, Apple size */}
                  <motion.h3
                    animate={{ opacity: isActive ? 1 : 0.25, y: isActive ? 0 : 4 }}
                    transition={{ duration: 0.4 }}
                    className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#f5f5f7] leading-tight mb-4"
                  >
                    {step.headline}
                  </motion.h3>

                  {/* Body — Apple body copy style: 17px, #86868b */}
                  <motion.p
                    animate={{ opacity: isActive ? 0.65 : 0.18 }}
                    transition={{ duration: 0.4 }}
                    className="text-[17px] font-light text-[#f5f5f7] leading-relaxed max-w-md"
                  >
                    {step.body}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: sticky phone ── */}
        <div className="hidden lg:flex items-start justify-center">
          <div className="sticky top-[12vh] py-16">
            <PhoneMockup step={active} />
          </div>
        </div>

      </div>

      {/* Mobile: phone fixed at top */}
      <div className="lg:hidden sticky top-12 z-20 bg-[#070707]/95 backdrop-blur-xl border-b border-white/[0.06] flex justify-center py-4">
        <div className="scale-75 origin-top -my-12">
          <PhoneMockup step={active} />
        </div>
      </div>

    </section>
  );
};
