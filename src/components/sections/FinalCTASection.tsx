import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20realizar%20a%20avalia%C3%A7%C3%A3o%20do%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

export function FinalCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse physics for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section className="py-32 lg:py-48 bg-[#0f0f10] flex flex-col items-center justify-center text-center relative overflow-hidden">

      {/* Background Rings Effect (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-50" />

      <div className="container-clinical relative z-10 flex flex-col items-center">

        {/* Top Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-[#d4c5a8] text-xl md:text-2xl tracking-widest uppercase mb-12"
        >
          Decisão
        </motion.span>

        {/* Main Title */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-[#f2f2eb] leading-[1.1]"
          >
            Muito mais <br />
            que estética.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-[#f2f2eb] mt-2"
          >
            Cuidamos de você por inteiro.
          </motion.p>
        </div>

        {/* Circular Start Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
          className="relative"
        >
          {/* Concentric Ripples */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full" />

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-32 h-32 bg-[#f2f2eb] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <span className="text-[#0f0f10] font-mono text-xs uppercase tracking-[0.2em] font-medium">
              INICIAR
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
