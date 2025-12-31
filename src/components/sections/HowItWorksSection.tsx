import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Activity, Zap, Shield, Microscope } from 'lucide-react';
import procedureTreatment1 from '@/assets/procedure-treatment-1.jpg';
import procedureTreatment2 from '@/assets/procedure-treatment-2.jpg';
import clinicEnvironment from '@/assets/clinic-environment.jpg';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20realizar%20a%20avalia%C3%A7%C3%A3o%20do%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

const timelineEvents = [
  {
    step: '01',
    title: 'Diagnóstico & Biorressonância',
    desc: 'Mapeamento de inflamação e carências para definir o ciclo exato.',
    icon: Microscope,
    image: clinicEnvironment,
  },
  {
    step: '02',
    title: 'Preparo Biológico',
    desc: 'Limpeza profunda e estabilização da barreira para recepção do estímulo.',
    icon: Shield,
    image: procedureTreatment1,
  },
  {
    step: '03',
    title: 'Fotobiomodulação',
    desc: 'Uso de Laser e LEDs para ativação celular sem agressão térmica.',
    icon: Zap,
    image: procedureTreatment2,
  },
  {
    step: '04',
    title: 'Regeneração Autóloga',
    desc: 'Finalização com PRP/Fibrina para cicatrização acelerada e natural.',
    icon: Activity,
    image: procedureTreatment1,
  },
];

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="como-funciona"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-[#0f0f10] text-[#f2f2eb]"
    >
      <div className="container-clinical relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-4">
            Execução do Protocolo
          </span>
          <h2 className="text-4xl lg:text-5xl font-display text-white">
            Profundidade <span className="text-white/40">Clínica.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* The Vertical Line */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-px bg-white/10 ml-[-0.5px]">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-white/50 origin-top"
            />
          </div>

          <div className="space-y-24">
            {timelineEvents.map((event, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-24 relative ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>

                {/* Timeline Dot (Center on Desktop, Left on Mobile) */}
                <div className="absolute left-[20px] lg:left-1/2 w-3 h-3 bg-[#0f0f10] border border-white/50 rounded-full ml-[-6px] mt-2 lg:mt-6 z-20" />

                {/* Text Side */}
                <div className={`pl-16 lg:pl-0 lg:w-1/2 flex flex-col ${i % 2 === 0 ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'}`}>
                  <div className="text-[40px] font-display text-white/10 leading-none mb-2">
                    {event.step}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed max-w-xs">
                    {event.desc}
                  </p>
                </div>

                {/* Image/Icon Side */}
                <div className={`pl-16 lg:pl-0 lg:w-1/2 flex ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="relative w-full max-w-xs aspect-video bg-white/5 rounded overflow-hidden border border-white/10 group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-50 transition-opacity" />

                    <div className="absolute bottom-3 left-3">
                      <event.icon className="text-white/70" size={20} />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-32">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white text-sm uppercase tracking-widest transition-all duration-300"
          >
            Iniciar Ciclo
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
