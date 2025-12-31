import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ScanFace } from 'lucide-react';

// Explicitly importing images to guarantee bundling
import resultTexture from '@/assets/result_texture.png';
import resultTone from '@/assets/result_tone.png';
import resultGlow from '@/assets/result_glow.png';
import resultFirmness from '@/assets/result_firmness.png';

const results = [
    {
        category: "Textura & Poros",
        image: resultTexture,
    },
    {
        category: "Uniformização de Tom",
        image: resultTone,
    },
    {
        category: "Devolução de Viço",
        image: resultGlow,
    },
    {
        category: "Firmeza Tissular",
        image: resultFirmness,
    }
];

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Vim%20pelo%20site%20e%20quero%20agendar%20minha%20an%C3%A1lise.";

export function ResultsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section
            id="resultados" // Added ID for anchor navigation
            ref={ref}
            className="py-24 lg:py-32 bg-[#F5F5F0] text-[#1a1a1c] relative overflow-hidden"
        >
            <div className="container-clinical">

                {/* Header Block - Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">

                    {/* Title Area */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            className="flex items-center gap-2 mb-6 opacity-60"
                        >
                            <ScanFace size={16} />
                            <span className="text-[10px] font-mono uppercase tracking-widest">Galeria de Evidência</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-5xl lg:text-7xl font-display leading-[0.95] text-[#1a1a1c]"
                        >
                            A pele responde à <br />
                            <span className="italic font-serif">ordem.</span>
                        </motion.h2>
                    </div>

                    {/* Description Area */}
                    <div className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-[#1a1a1c]/20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-[#1a1a1c]/60 text-lg font-light leading-relaxed">
                                Resultados reais de pacientes submetidos ao ciclo completo. Sem filtros, apenas saúde restabelecida.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                            className="group cursor-pointer flex flex-col"
                        >
                            {/* Image Container - Enforce Height */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e5e5e0] mb-6 shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback ONLY if the bundle fails
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600/e5e5e0/000000?text=Indisponivel';
                                    }}
                                />
                            </div>

                            {/* Label Row */}
                            <div className="flex items-center justify-between border-b border-[#1a1a1c]/10 pb-2 group-hover:border-[#1a1a1c]/30 transition-colors mt-auto">
                                <span className="text-sm font-medium tracking-wide text-[#1a1a1c]">
                                    {item.category}
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#10b981]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end border-t border-[#1a1a1c]/10 pt-12">

                    {/* Persuasive Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#1a1a1c]/40 mb-2 block">
                            Projeto Único:
                        </span>
                        <p className="text-sm text-[#1a1a1c]/70 leading-relaxed font-light max-w-md">
                            Não existe pele padrão. O Ciclo é adaptado milimetricamente à sua biologia, garantindo que o resultado não seja sorte, mas consequência.
                        </p>
                    </motion.div>

                    {/* Main Button */}
                    <motion.div
                        className="flex justify-start lg:justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.9 }}
                    >
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1a1a1c] hover:bg-black text-white transition-all duration-300 min-w-[240px] justify-center"
                        >
                            <span className="text-xs font-mono uppercase tracking-[0.2em]">
                                Analisar Meu Caso
                            </span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
