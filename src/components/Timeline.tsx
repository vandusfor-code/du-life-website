import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineEvent {
  year: number;
  side: 'left' | 'right';
  title: string;
  detail: string;
}

const EVENTS: TimelineEvent[] = [
  { year: 2026, side: 'left', title: "Met Laura", detail: "April 14. First coffee at Blue Bottle. Noted her preference for Lavender scents." },
  { year: 2026, side: 'right', title: "Started Du Life", detail: "September 8. Initial concepts and architecture drafts saved to workspace." },
  { year: 2026, side: 'left', title: "Bought iPhone 15 Pro", detail: "October 10. Serial number and purchase invoice indexed automatically." },
  { year: 2027, side: 'right', title: "First House", detail: "March 18. Signed deeds for the cabin. Saved gas meter location details." },
  { year: 2027, side: 'left', title: "Travelled to Japan", detail: "November 4. Kyoto temples, Tokyo night trains. Hotel booking codes stored." },
  { year: 2028, side: 'right', title: "MacBook Purchase", detail: "February 28. Standard AppleCare warranty registered for 3 years." },
  { year: 2028, side: 'left', title: "Laura's Gift Ideas", detail: "June 2. Handcrafted ceramic cup from Ojai pottery list saved." },
  { year: 2029, side: 'right', title: "Passport Renewal", detail: "January 15. Scanned new document. Expiration calendar notifications armed." }
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // central line height progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      id="timeline"
      ref={containerRef} 
      className="relative w-full bg-[#020202] min-h-[300vh] flex flex-col justify-start"
    >
      {/* Background vignette glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/[0.015] pointer-events-none blur-[120px]" />

      {/* Sticky header for the timeline */}
      <div className="sticky top-0 w-full min-h-screen flex flex-col justify-between py-24 pointer-events-none overflow-hidden">
        
        {/* Typographic Section Title */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-20">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block mb-3">
            03 / CINEMATIC TIMELINE
          </span>
          <h2 className="text-2xl font-light text-white/80 tracking-tight">
            Years pass. <span className="text-white/40">The memory grows.</span>
          </h2>
        </div>

        {/* Cinematic years counting in background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <YearScroller progress={scrollYProgress} />
        </div>

        {/* Timeline Line & Content Layout */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 md:px-12 flex-1 flex items-center justify-center mt-12 mb-12">
          
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.08] hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-white/40 origin-top" 
            />
          </div>

          {/* Event Content Cards Grid */}
          <div className="w-full space-y-[24vh] pt-[10vh] pb-[20vh]">
            {EVENTS.map((item, idx) => (
              <TimelineEventCard 
                key={idx} 
                item={item} 
                index={idx}
                scrollProgress={scrollYProgress} 
              />
            ))}
          </div>

        </div>

        {/* Bottom indicator */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-end z-20">
          <span className="text-[10px] font-mono tracking-[0.15em] text-white/20 uppercase">
            Remembered forever
          </span>
        </div>

      </div>
    </section>
  );
};

// Background Year Numbers Scroller
const YearScroller = ({ progress }: { progress: any }) => {
  const years = [2026, 2027, 2028, 2029];
  
  // Custom transform helper to map indexes to actual numbers for neat transition animations
  const yOffset = useTransform(progress, 
    [0, 0.3, 0.6, 0.9], 
    ["0%", "-100%", "-200%", "-300%"]
  );

  return (
    <div className="h-[200px] overflow-hidden flex flex-col items-center justify-start text-[100px] sm:text-[180px] md:text-[260px] font-extrabold tracking-tighter text-white/[0.015] leading-none pointer-events-none select-none">
      <motion.div style={{ y: yOffset }} className="flex flex-col items-center">
        {years.map(yr => (
          <span key={yr} className="h-[200px] sm:h-[300px] md:h-[380px] flex items-center justify-center">
            {yr}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Individual Event card component responding to scroll
interface CardProps {
  item: TimelineEvent;
  index: number;
  scrollProgress: any;
}

const TimelineEventCard = ({ item, index, scrollProgress }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate relative activation scroll point
  const totalCards = 8;
  const start = index / totalCards;
  const peak = start + (0.5 / totalCards);
  const end = start + (1.2 / totalCards);

  // Fading card as scroll sweeps past it
  const opacity = useTransform(scrollProgress, [start, peak, end], [0.1, 1, 0.15]);
  const scale = useTransform(scrollProgress, [start, peak, end], [0.96, 1, 0.96]);

  const isLeft = item.side === 'left';

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className={`w-full flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}
    >
      <div className="w-full md:w-[42%] p-6 rounded-2xl border border-white/[0.04] bg-[#050508]/80 backdrop-blur-md relative">
        
        {/* Small connector node */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/45 hidden md:block ${
          isLeft ? '-right-[8%] lg:-right-[10.5%]' : '-left-[8%] lg:-left-[10.5%]'
        }`} />

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-violet-400">
              {item.year}
            </span>
            <span className="text-[9px] font-mono text-white/30 uppercase">
              Memory Locked
            </span>
          </div>
          <h4 className="text-lg font-light text-white/90">
            {item.title}
          </h4>
          <p className="text-xs text-white/40 font-light leading-relaxed">
            {item.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
