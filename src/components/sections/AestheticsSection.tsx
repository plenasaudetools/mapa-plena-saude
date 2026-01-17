import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock } from 'lucide-react';

const milestones = [
  {
    week: '02',
    label: 'Desinflamação',
    desc: 'Redução de edema e uniformização inicial do tom.',
    x: 350,
    y: 319 // Mathematically calculated for t≈0.202
  },
  {
    week: '06',
    label: 'Densidade',
    desc: 'Ativação de fibroblastos e melhora na firmeza.',
    x: 700,
    y: 200 // Exact Center (t=0.5)
  },
  {
    week: '12',
    label: 'Remodelamento',
    desc: 'Nova matriz de colágeno e textura refinada.',
    x: 1050,
    y: 81 // Mathematically calculated (Symmetric)
  }
];

export function AestheticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Curve geometry: M 0 350 C 700 350, 700 50, 1400 50
  const refinedCurvePath = "M 0 350 C 700 350, 700 50, 1400 50";

  return (
    <section
      id="cronograma"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0f0f10] text-[#f2f2eb]"
    >
      {/* Cinematic Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-white/50 blur-[2px]" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-clinical relative z-10">

        {/* Header - Stacks on Mobile */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4 block">
              Curva de Evolução
            </span>
            <h2 className="text-3xl lg:text-5xl font-display text-white leading-tight">
              O tempo joga <br />
              <span className="text-white/40">a seu favor.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-white/50 text-sm font-mono"
          >
            <Clock size={14} />
            <span>Efeito Cumulativo · 90 Dias</span>
          </motion.div>
        </div>

        {/* The Graph Visual - Responsive Switcher */}

        {/* DESKTOP VIEW (Graph) - Hidden on Mobile */}
        <div className="hidden lg:block relative w-full overflow-hidden pb-4">
          <div className="relative h-[450px] w-full">
            <div className="absolute inset-x-0 top-0 h-[380px]">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 1400 380"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="long-beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="30%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />

                    <animateTransform
                      attributeName="gradientTransform"
                      type="translate"
                      from="-1 0"
                      to="1 0"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </linearGradient>
                </defs>

                {/* 1. Base Track */}
                <path
                  d={refinedCurvePath}
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.1"
                />

                {/* 2. Vertical Lines */}
                {milestones.map((m, i) => (
                  <line
                    key={`line-${i}`}
                    x1={m.x} y1="380"
                    x2={m.x} y2={m.y + 6}
                    stroke="white"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                  />
                ))}

                {/* 3. The Continuous Flow Animation */}
                <path
                  d={refinedCurvePath}
                  fill="none"
                  stroke="url(#long-beam-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' }}
                />

                {/* 4. The Milestones (Dots) */}
                {milestones.map((m, i) => (
                  <motion.circle
                    key={`dot-${i}`}
                    cx={m.x}
                    cy={m.y}
                    r="5"
                    fill="#0f0f10"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                  />
                ))}
              </svg>
            </div>

            {/* Text Labels Desktop */}
            <div className="absolute top-[380px] inset-x-0 h-32 w-full">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="absolute top-4 flex flex-col items-center text-center -translate-x-1/2"
                  style={{ left: `${(m.x / 1400) * 100}%`, width: '200px' }}
                >
                  <div className="inline-block px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-[#a3a3a3] mb-2">
                    SEMANA {m.week}
                  </div>
                  <h3 className="text-base font-medium text-[#e2e2e2] mb-1">
                    {m.label}
                  </h3>
                  <p className="text-xs text-[#b3b3b3] leading-relaxed max-w-[160px] font-normal">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (Carousel Cards) - Hidden on Desktop */}
        <div className="lg:hidden relative w-full">

          <div
            id="mobile-timeline-scroll"
            className="overflow-x-auto pb-4 flex gap-4 px-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollPaddingLeft: '2rem', scrollPaddingRight: '2rem' }}
          >
            {milestones.map((m, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[75vw] h-48 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-start shadow-lg relative overflow-hidden group"
              >
                {/* Subtle Number Watermark instead of clock */}
                <span className="absolute -right-2 -bottom-6 text-[8rem] font-display text-white/[0.03] leading-none select-none pointer-events-none">
                  {m.week}
                </span>

                <span className="text-xs font-mono uppercase tracking-widest text-[#d4c5a8] mb-2 block relative z-10">
                  Semana {m.week}
                </span>
                <h3 className="text-2xl font-display text-white mb-2 relative z-10">
                  {m.label}
                </h3>
                <p className="text-sm text-[#a3a3a3] font-normal leading-relaxed max-w-[90%] relative z-10">
                  {m.desc}
                </p>

                {/* Progress Bar for Visual Queue */}
                <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-10">
                  <div className="h-full bg-[#d4c5a8] transition-all duration-1000" style={{ width: `${((i + 1) / 3) * 100}%` }} />
                </div>
              </div>
            ))}

            {/* Spacer for proper scrolling */}
            <div className="w-2 shrink-0" />
          </div>

          {/* Controls Below Cards */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex gap-6">
              <button
                onClick={() => {
                  const container = document.getElementById('mobile-timeline-scroll');
                  if (container) container.scrollBy({ left: -250, behavior: 'smooth' });
                }}
                className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-white/10 text-white active:scale-95 transition-all"
                aria-label="Voltar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              </button>

              <button
                onClick={() => {
                  const container = document.getElementById('mobile-timeline-scroll');
                  if (container) container.scrollBy({ left: 250, behavior: 'smooth' });
                }}
                className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-white/10 text-white active:scale-95 transition-all"
                aria-label="Avançar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>

            <span className="text-white/30 text-[10px] uppercase font-mono tracking-widest">
              Use as setas ou deslize
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
