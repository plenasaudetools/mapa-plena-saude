import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import heroTech from '@/assets/hero-skin-tech.png';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20realizar%20a%20avalia%C3%A7%C3%A3o%20do%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

export function HeroSection() {
  const ref = useRef(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full bg-[#0f0f10] text-[#f2f2eb] overflow-hidden flex items-center">

      {/* --- BACKGROUND IMAGE & GRADIENT (PARALLAX) --- */}
      <motion.div
        style={{ y, scale }}
        className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0 origin-center"
      >
        <img
          src={heroTech}
          alt="Pele com textura real e iluminação clínica"
          className="w-full h-full object-cover grayscale-[20%] opacity-90"
        />
        {/* Gradient Overlay to blend into solid color */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f10] via-[#0f0f10]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0f10] to-transparent" />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        style={{ opacity }}
        className="container-clinical relative z-10 w-full h-full flex flex-col justify-center pt-20 lg:pt-28"
      >

        <div className="relative pl-8 lg:pl-12 border-l border-white/10">
          {/* Animated Precision Line (The 'Advanced Element') */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-1px] top-0 w-[1px] bg-white/40"
          />

          {/* Authority Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-[10px] lg:text-xs font-mono tracking-[0.2em] uppercase text-[#a3a3a3] mb-6 overflow-hidden"
          >
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              Ciclo Facial Completo · Estética Avançada
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="font-display text-5xl lg:text-[7rem] leading-[1] tracking-tight mb-8 text-[#e2e2e2]"
          >
            Quando existe <br />
            <span className="font-serif italic text-[#d4c5a8] brightness-110">método</span>, <br />
            a pele responde.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg lg:text-xl font-light text-[#9ca3af] max-w-md leading-relaxed mb-10"
          >
            Sessões isoladas não constroem resultado. <br />
            <span className="text-[#d8d8d8]">Ciclos bem conduzidos, sim.</span>
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-start gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 overflow-hidden border border-white/20 hover:border-white/40 transition-colors duration-500"
            >
              <div className="absolute inset-0 w-0 bg-white/5 transition-all duration-[250ms] ease-out group-hover:w-full" />
              <span className="relative text-sm tracking-[0.15em] uppercase font-medium text-white group-hover:text-white">
                Realizar Avaliação
              </span>
            </a>

            <span className="text-[10px] font-mono text-[#525252] tracking-wider ml-1">
              Contato com equipe · Agenda limitada
            </span>
          </motion.div>
        </div>

      </motion.div>

      {/* --- BOTTOM GRADIENT / TRANSITION TO CONTENT --- */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0f0f10] pointer-events-none" />

    </section>
  );
}
