import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertCircle, Plus } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20realizar%20a%20avalia%C3%A7%C3%A3o%20do%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

const painPoints = [
  'Viço que desaparece',
  'Textura irregular',
  'Manchas reincidentes',
  'Inflamação silenciosa',
];

export function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0f0f10] text-[#f2f2eb]"
    >
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle Gradient Glow for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointing-events-none" />

      <div className="container-clinical relative z-10 p-4 lg:p-0"> {/* Added padding for mobile safety */}

        {/* Changed layout from Grid to Flex-Col on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left - Diagnostic Header */}
          <div className="w-full lg:col-span-5 lg:sticky lg:top-32 relative z-20 bg-[#0f0f10]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-lg lg:rounded-none">
            {/* Added Z-Index and Background on mobile to ensure it sits ON TOP of any accidental overlap, though flex layout fixes overlap naturally */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-red-500/80 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Análise de Cenário
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-display leading-[1.1] mb-6 lg:mb-8 text-white">
                Você faz de tudo. <br />
                <span className="text-white/40">E a pele volta.</span>
              </h2>

              <p className="text-base lg:text-lg text-white/60 font-light leading-relaxed border-l border-white/10 pl-6">
                Sem método clínico, o tratamento vira apenas tentativa. O ciclo de frustração se repete.
              </p>
            </motion.div>
          </div>

          {/* Right - System Alerts List */}
          <div className="w-full lg:col-span-7 bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm mt-8 lg:mt-0">
            {/* Space-y-px ensures the border look between items */}
            <div className="space-y-px">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                  className="group relative p-6 lg:p-8 hover:bg-white/5 transition-colors duration-300 border-b border-white/5 last:border-0"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <span className="font-mono text-[10px] lg:text-xs text-white/20 mt-1">
                      [ 0{i + 1} ]
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-light text-white/90 group-hover:text-white transition-colors">
                        {point}
                      </h3>
                    </div>
                    <AlertCircle size={16} className="text-white/20 group-hover:text-red-400 transition-colors" />
                  </div>

                  {/* Precision Crosshair on Hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={10} className="text-white/30" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Integrated */}
            <div className="p-6 lg:p-8 bg-white/[0.02]">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors group"
              >
                Interromper o ciclo
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
