import { motion } from 'framer-motion';

const WORLD_AI_FACTS = [
  "Ecuaciones de electrodinámica cuántica",
  "Capital de Kirguistán (Biskek)",
  "Algoritmos de ordenamiento recursivo en Go",
  "Proyecciones de población mundial para 2050",
  "Altura de la Torre Eiffel con antenas",
  "Precios de acciones de conglomerados globales",
  "Historia del Imperio Bizantino",
  "Especificaciones estándar de USB-C",
  "Documentación de la librería pandas en Python",
  "Recetas de pan de masa madre artesanal",
  "Distancia promedio de la Tierra a Marte"
];

const DU_LIFE_FACTS = [
  "El pasaporte vence en diciembre de 2027",
  "Las llaves de repuesto están en el florero azul",
  "A Laura le encantan los aromas a lavanda y la cerámica hecha a mano",
  "Número de serie del MacBook Pro: C02DH5K1Q05D",
  "Juan Camilo aceptó cambiar el turno del jueves en la tarde",
  "Pagaste $1.619.900 por el TV Samsung el 28 de dic",
  "Reserva en el restaurante el viernes a las 8 PM",
  "Clave del wifi: 'segunda-memoria-2026'",
  "Datos bancarios del arrendador para la transferencia",
  "El vuelo a Japón sale de Bogotá el 15 de julio"
];

export const TheShift = () => {
  return (
    <section className="relative w-full bg-[#0D0D11] py-[15vh] border-b border-white/[0.04] overflow-hidden">

      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#C4E938]/[0.025] pointer-events-none blur-3xl" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#C4E938]/[0.015] pointer-events-none blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Typographic Header */}
        <div className="max-w-[700px] mb-20 space-y-6">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            02 / EL CAMBIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-[-0.03em] leading-[1.1]">
            Muchas IA conocen el mundo. <br />
            <span className="text-white/40">Du Life te conoce a ti.</span>
          </h2>
          <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[500px]">
            A diferencia de los LLM generales que digieren todo internet, Du Life mira hacia adentro. Deja los datos del mundo a los buscadores y protege tu historia personal.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 border border-white/[0.06] rounded-[24px] bg-[#16161F] overflow-hidden">

          {/* Left Column: General AI */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-between h-[520px] relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-white/20 uppercase">
                ASISTENTES GENERALES
              </span>
              <h4 className="text-xl font-light text-white/40">
                Memoria del mundo
              </h4>
            </div>

            {/* Fast scrolling blurred lists representing impersonal noise */}
            <div className="absolute inset-x-0 bottom-0 h-[360px] pointer-events-none overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-t-0 h-16 bg-gradient-to-b from-[#16161F] to-transparent z-10" />
              <motion.div
                animate={{ y: [0, -400] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }}
                className="space-y-4 px-8 md:px-12 pb-8"
              >
                {[...WORLD_AI_FACTS, ...WORLD_AI_FACTS].map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-white/[0.02] bg-white/[0.01] text-[13px] text-white/20 select-none font-mono filter blur-[0.4px] transition-all"
                  >
                    {fact}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-xs text-white/30 font-light leading-relaxed max-w-[280px]">
                Entrenados sobre datos públicos de la web. Conocen miles de millones de respuestas generales, pero no tienen contexto sobre tu vida real.
              </p>
            </div>
          </div>

          {/* Right Column: Du Life */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-[520px] relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,rgba(196,233,56,0.035),transparent_60%)]">
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#C4E938]/80 uppercase">
                DU LIFE
              </span>
              <h4 className="text-xl font-light text-white">
                Memoria personal
              </h4>
            </div>

            {/* Slow, glowing scrolling list of personal facts */}
            <div className="absolute inset-x-0 bottom-0 h-[360px] pointer-events-none overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-t-0 h-16 bg-gradient-to-b from-[#16161F] to-transparent z-10" />
              <motion.div
                animate={{ y: [0, -320] }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear"
                }}
                className="space-y-4 px-8 md:px-12 pb-8"
              >
                {[...DU_LIFE_FACTS, ...DU_LIFE_FACTS].map((fact, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-xl border border-white/[0.06] bg-[#0D0D11] shadow-[0_0_15px_rgba(196,233,56,0.04)] text-[13px] text-white/80 font-light tracking-wide flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4E938] shrink-0" />
                    <span>{fact}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-xs text-white/50 font-light leading-relaxed max-w-[280px]">
                Base de datos privada de extremo a extremo. Aprende tus patrones, indexa tus registros y funciona como una extensión natural de tu propia memoria.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
