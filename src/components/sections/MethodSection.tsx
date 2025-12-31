import { motion, useInView, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ScanLine, Zap, RefreshCw, ArrowRight } from 'lucide-react';

const phases = [
  {
    id: "01",
    title: "Mapeamento & Preparo",
    desc: "Análise biométrica da estrutura facial e fortificação da barreira cutânea.",
    icon: ScanLine,
  },
  {
    id: "02",
    title: "Intervenção Ativa",
    desc: "Aplicação tecnológica de precisão para estímulo profundo de colágeno.",
    icon: Zap,
  },
  {
    id: "03",
    title: "Regeneração Contínua",
    desc: "Cicatrização guiada e home-care para maximizar o efeito do ciclo.",
    icon: RefreshCw,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function MethodSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Parallax for Background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const bgY = useTransform(smoothProgress, [0, 1], [0, -50]); // Background moves slightly up

  return (
    <section
      id="ciclo"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden bg-[#f2f2eb] text-[#0f0f10]"
    >
      {/* Technical Grid Background with Parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          y: bgY,
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-clinical relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-4 block">
              Arquitetura do Tratamento
            </span>
            <h2 className="text-4xl lg:text-5xl font-display text-[#0f0f10] leading-tight">
              Não é mágica. <br />
              <span className="font-serif italic text-black/60">É engenharia biológica.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-md text-black/60 text-sm leading-relaxed border-l border-black/10 pl-6"
          >
            Nosso protocolo ignora soluções paliativas. Construímos resultados através de um ciclo trifásico desenhado para respeitar a fisiologia da sua pele.
          </motion.div>
        </div>

        {/* The Blueprint Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Connecting Lines (Desktop only) */}
          <div className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent hidden lg:block" />

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-white/40 backdrop-blur-sm border border-black/5 p-8 group hover:bg-white/80 transition-all duration-500 hover:shadow-lg"
            >
              {/* Phase ID */}
              <div className="absolute -top-3 left-8 bg-[#f2f2eb] px-2 text-[10px] font-mono text-black/40">
                FASE {phase.id}
              </div>

              {/* Icon */}
              <div className="mb-8 p-3 bg-white shadow-sm inline-flex rounded-lg text-black/70 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                <phase.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-3 text-[#0f0f10] group-hover:tracking-wide transition-all duration-300">
                {phase.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {phase.desc}
              </p>

              {/* Arrow for flow */}
              {i < 2 && (
                <div className="hidden lg:block absolute -right-6 top-12 text-black/20 z-10">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Technical Note */}
        <div className="mt-16 pt-8 border-t border-black/5 flex justify-between items-center text-[10px] font-mono text-black/30 uppercase tracking-widest">
          <span>Protocolo V.24</span>
          <span>Integração Total</span>
        </div>

      </div>
    </section>
  );
}
