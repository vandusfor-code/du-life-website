import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "“I forward my whiteboard photos, Figma links, and audio notes to Du Life while walking. Weeks later, in client kickoff meetings, I don't dig through files. I ask Du Life on WhatsApp, and the exact summary is returned. It feels like a cognitive extension.”",
    author: "Sarah Thorne",
    role: "Founding Product Designer"
  },
  {
    quote: "“I forwarded my tax invoices, home warranties, and cabin leases to Du Life in 2026. Sitting in a legal audit last month, I retrieved a specific home repair receipt in four seconds. That is the moment I realized the absolute value of a lifelong memory index.”",
    author: "Alex Mercer",
    role: "Venture Partner"
  },
  {
    quote: "“My academic notes were scattered across books, journals, and voice files. Consolidating them was a constant bottleneck. Sending them directly to a secure, private thread on WhatsApp freed up my cognitive space. I no longer waste energy remembering; I focus on thinking.”",
    author: "Dr. Evelyn Vance",
    role: "Cognitive Science Researcher"
  }
];

export const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-[700px] mb-20 space-y-6">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block">
            08 / VOICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-tight">
            How it feels to have<br />
            <span className="text-white/40">a perfect memory.</span>
          </h2>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between space-y-8 p-6 md:p-0"
            >
              {/* Quote block */}
              <p className="text-[15px] sm:text-[16px] font-light text-white/70 leading-[1.65] italic tracking-wide">
                {t.quote}
              </p>

              {/* Author metadata */}
              <div className="space-y-1 pt-4 border-t border-white/[0.04] w-fit">
                <p className="text-sm font-medium text-white/90">
                  {t.author}
                </p>
                <p className="text-[11px] font-mono tracking-wider text-white/30 uppercase">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
