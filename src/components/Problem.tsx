import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TEXT =
  "Olvidamos. Perdemos. Fragmentamos. Olvidamos el 80% de nuestro día a día. Las ideas que surgen a las 3 AM. Documentos y facturas. Los nombres de las personas que importan. Garantías y contraseñas. Conversaciones que nos marcaron. Nuestra vida está repartida en diez aplicaciones distintas. Fragmentada. Perdida.";

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: any; // MotionValue<number>
}

const Word = ({ word, index, total, progress }: WordProps) => {
  // Distribute the fade effects evenly across the scroll duration
  const start = index / total;
  const end = Math.min(start + 0.15, 1);
  
  // Transform scroll progress to opacity: starts at 1, fades down to 0.08
  const opacity = useTransform(progress, [start, end], [1, 0.08]);
  // Slight shift down as it fades to simulate dissolving
  const y = useTransform(progress, [start, end], [0, 6]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.25em] mb-[0.1em] font-light text-white select-none"
    >
      {word}
    </motion.span>
  );
};

export const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = TEXT.split(" ");

  return (
    <section
      id="problem"
      ref={containerRef}
      className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#C4E938]/[0.02] to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left column: Sticky label */}
        <div className="lg:col-span-3 lg:sticky lg:top-[12vh] h-fit">
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
              01 / LAS LIMITACIONES HUMANAS
            </span>
            <h3 className="text-xl font-light text-white/80 tracking-tight">
              La fuga de la vida diaria.
            </h3>
          </div>
        </div>

        {/* Right column: Large typographic block that dissolves */}
        <div className="lg:col-span-9">
          <div className="max-w-[800px]">
            <p className="text-[28px] sm:text-[40px] md:text-[52px] font-light tracking-[-0.03em] leading-[1.2] flex flex-wrap">
              {words.map((word, i) => (
                <Word 
                  key={i} 
                  word={word} 
                  index={i} 
                  total={words.length} 
                  progress={scrollYProgress} 
                />
              ))}
            </p>
            
            {/* Supporting meta block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-white/[0.05] grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <p className="text-[14px] text-white/40 leading-relaxed font-light">
                  Cada día generamos cientos de piezas de información: documentos importantes, historiales de compra, ideas anotadas en apps de notas y acuerdos hechos por mensaje de texto.
                </p>
              </div>
              <div>
                <p className="text-[14px] text-white/40 leading-relaxed font-light">
                  Pero nuestro cerebro no está diseñado para indexar carpetas. La información se dispersa, se aísla y termina en el olvido. Perdemos horas buscando. Olvidamos lo que alguna vez supimos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
