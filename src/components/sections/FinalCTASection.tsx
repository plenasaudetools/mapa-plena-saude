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
    <section
      className="py-32 lg:py-48 relative overflow-hidden bg-[#0f0f10] flex flex-col items-center justify-center min-h-[90vh] cursor-none" // Custom cursor area
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom Cursor Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: useSpring(mouseX, { stiffness: 500, damping: 28 }),
          y: useSpring(mouseY, { stiffness: 500, damping: 28 }),
          // Note: We need absolute window coordinates for a fixed follower, 
          // but here we are simplifying. A real custom cursor needs window-level tracking.
          // For this section effect, we'll make the ELEMENT follow the cursor relative to center.
        }}
      />

      {/* Floating Particles/Dust */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className="container-clinical relative z-20 flex flex-col items-center justify-center text-center">

        {/* The Text - Fades out when hovering the orb to focus on interaction */}
        <motion.h2
          animate={{ opacity: isHovered ? 0.3 : 1, scale: isHovered ? 0.95 : 1 }}
          transition={{ duration: 0.8 }}
          className="text-white font-display text-4xl md:text-6xl mb-12 tracking-tight"
        >
          Sua pele é o projeto.
        </motion.h2>

        {/* THE LIVING PEARL - INTERACTIVE TRIGGER */}
        <div className="relative" ref={ref}>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={(e) => {
              // Mobile "Double Tap" Logic
              // If not yet "active" (expanded), prevent navigation and activate instead.
              if (!isHovered) {
                e.preventDefault();
                setIsHovered(true);
              }
            }}
            className="relative block w-64 h-64 md:w-80 md:h-80 touch-none" // touch-none helps with gesture handling
            style={{ x: springX, y: springY }}
          >
            {/* The "Living" Gradient Mesh */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f2f2eb] via-[#e0e0d1] to-[#a3a398] opacity-90"
              animate={{
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? 'blur(0px)' : 'blur(20px)',
              }}
              transition={{ duration: 0.6, ease: "circOut" }}
            />

            {/* Iridescent Glow/Halo */}
            <motion.div
              className="absolute inset-[-20%] rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #ffffff, transparent)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Text Reveal */}
            <div className="absolute inset-0 flex items-center justify-center z-10 flex-col gap-2 pointer-events-none">
              <motion.span
                className="text-4xl md:text-5xl font-mono text-black font-extrabold tracking-tighter"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                  filter: isHovered ? 'blur(0px)' : 'blur(10px)'
                }}
                transition={{ duration: 0.4 }}
              >
                INICIAR
              </motion.span>
              <motion.span
                className="text-xs font-mono uppercase tracking-[0.3em] text-black/70 font-bold"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Protocolo
              </motion.span>
            </div>

            {/* Resting State Indicator (Breath) */}
            {!isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="text-white/20 text-xs font-mono uppercase tracking-[0.5em] animate-pulse">
                  Toque para expandir
                </span>
              </motion.div>
            )}
          </motion.a>
        </div>

        {/* Minimalist Footer */}
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          className="mt-16 text-white/30 font-light text-sm max-w-xs mx-auto leading-relaxed"
        >
          A estética é consequência.<br />
          A saúde é o fim.
        </motion.p>
      </div>
    </section>
  );
}
