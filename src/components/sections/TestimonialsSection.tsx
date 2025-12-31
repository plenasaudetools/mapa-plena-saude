import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Activity } from 'lucide-react';

const testimonials = [
  { id: 'REL-014', quote: 'Finalmente um protocolo que respeita o tempo da minha pele.', name: 'C.M.', status: 'Ciclo Completo' },
  { id: 'REL-023', quote: 'A sensação de ser vista. Não era só estética. Era cuidado real.', name: 'F.L.', status: 'Em Manutenção' },
  { id: 'REL-089', quote: 'Parei de tentar tudo. Comecei o que fazia sentido pro meu corpo.', name: 'P.R.', status: 'Alta Clínica' },
  { id: 'REL-102', quote: 'Aqui existe critério. Não fazem tudo em todo mundo.', name: 'A.S.', status: 'Ciclo Completo' },
  { id: 'REL-145', quote: 'A pele respondeu melhor porque tinha método.', name: 'M.C.', status: 'Pós-Laser' },
  { id: 'REL-167', quote: 'Pela primeira vez entendi que menos é mais.', name: 'L.B.', status: 'Alta Clínica' },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-[#0f0f10] text-[#f2f2eb]"
    >
      {/* Background Tech elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px)`,
          backgroundSize: '120px 100%'
        }}
      />

      <div className="container-clinical relative z-10 mb-16 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1 h-3 items-end">
              <motion.div
                animate={{ height: [4, 12, 6, 12, 4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 bg-white/60 rounded-full"
              />
              <motion.div
                animate={{ height: [8, 4, 10, 5, 8] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-1 bg-white/60 rounded-full"
              />
              <motion.div
                animate={{ height: [5, 10, 4, 8, 5] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="w-1 bg-white/60 rounded-full"
              />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Relatórios de Experiência
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display text-white">
            Vozes do <span className="text-white/40">Processo.</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Stream */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f10] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f10] to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[350px] lg:w-[450px] bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                <span className="text-[10px] font-mono text-white/30 tracking-widest">
                  {t.id}
                </span>
                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full">
                  <Activity size={10} className="text-white/40" />
                  <span className="text-[9px] font-mono uppercase text-white/60">
                    {t.status}
                  </span>
                </div>
              </div>

              <p className="text-xl lg:text-2xl font-light text-white/90 leading-tight mb-8 font-display">
                "{t.quote}"
              </p>

              <div className="flex justify-between items-end">
                <span className="text-sm text-white/40 font-mono">
                  Paciente: {t.name}
                </span>
                <Quote size={20} className="text-white/10 group-hover:text-white/30 transition-colors" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Status */}
      <div className="container-clinical mt-12 flex justify-center">
        <span className="text-[10px] text-white/20 font-mono uppercase tracking-[0.2em] animate-pulse">
          Recebendo em tempo real...
        </span>
      </div>

    </section>
  );
}
