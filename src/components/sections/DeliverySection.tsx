import { motion, useInView, useSpring, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easings, staggerContainerVariants, staggerItemVariants } from '@/hooks/use-animations';

const internal = [
  'Hidratação',
  'Alimentação anti-inflamatória',
  'Suplementação orientada',
];

const skin = [
  'Limpeza correta',
  'Protetor diário',
  'Ativos guiados',
];

export function DeliverySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const backgroundY = useTransform(smoothProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={ref} 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'hsl(var(--graphite))' }}
    >
      {/* Background effect */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 animate-breathe"
          style={{
            background: 'radial-gradient(circle, hsl(var(--champagne) / 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>
      
      <div className="container-clinical relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easings.expoOut }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: easings.expoOut }}
            className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-8"
          >
            Home Care
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: easings.expoOut }}
            className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-display font-medium text-white"
          >
            O que sustenta o ciclo.
          </motion.h2>
        </motion.div>

        {/* Two columns with stagger */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Internal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: easings.expoOut }}
            className="bg-white/5 border border-white/10 p-8 hover-border-glow transition-all duration-500"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.span 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5, ease: easings.spring }}
                className="text-xs font-mono text-white/40 uppercase tracking-wider w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                IN
              </motion.span>
              <h3 className="text-xl font-display font-medium text-white">Interno</h3>
            </div>
            
            <motion.ul 
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {internal.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={staggerItemVariants}
                  className="flex items-center gap-4 text-white/70 group"
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-white/90 transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Skin */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease: easings.expoOut }}
            className="bg-white/5 border border-white/10 p-8 hover-border-glow transition-all duration-500"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.span 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: easings.spring }}
                className="text-xs font-mono text-white/40 uppercase tracking-wider w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                EX
              </motion.span>
              <h3 className="text-xl font-display font-medium text-white">Pele</h3>
            </div>
            
            <motion.ul 
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {skin.map((item, i) => (
                <motion.li 
                  key={i}
                  variants={staggerItemVariants}
                  className="flex items-center gap-4 text-white/70 group"
                >
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-white/90 transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
