import logoPlena from '@/assets/logo-plena-saude.png';
import logoPontoUm from '@/assets/logo-ponto-um.png';
import { MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'O Ciclo', href: '/#ciclo' },
  { label: 'Diagnóstico', href: '/#como-funciona' },
  { label: 'Evolução', href: '/#cronograma' },
  { label: 'Evidência', href: '/#resultados' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0b] text-[#f2f2eb] overflow-hidden">
      {/* Precision Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-clinical relative z-10 py-10 lg:py-16">
        {/* Main Message - The Philosophy (Compacted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-display font-light text-white leading-relaxed">
            Aqui, estética é consequência de <span className="text-white/40">método</span>.
          </p>
        </motion.div>

        {/* 
            Grid Layout for Footer Content 
            Added 'text-center md:text-left' to align content to center on mobile, left on desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 text-center md:text-left justify-items-center md:justify-items-start">

          {/* Brand Identity */}
          <div className="md:col-span-2 space-y-6 flex flex-col items-center md:items-start">
            <img
              src={logoPlena}
              alt="Plena Saúde - Estética Avançada"
              className="h-14 w-auto brightness-0 invert opacity-90"
            />
            <div className="flex flex-col gap-3 text-sm text-white/50 font-light items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <MapPin size={16} className="shrink-0 hidden md:block" />
                <p className="max-w-[200px]">
                  Avenida Adhemar de Barros, Guarujá - SP
                </p>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Instagram size={16} />
                <span>@plenasaude</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30">
              Index
            </h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-wide w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal / Policies */}
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30">
              Legal
            </h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              <Link
                to="/termos-de-uso"
                className="text-sm text-white/50 cursor-pointer hover:text-white transition-colors w-fit"
              >
                Termos de Uso
              </Link>
              <Link
                to="/politica-de-privacidade"
                className="text-sm text-white/50 cursor-pointer hover:text-white transition-colors w-fit"
              >
                Privacidade
              </Link>
              <span className="text-xs text-white/30 mt-2 leading-relaxed text-center md:text-left">
                Responsável Técnico: <br /> Dra. Fulana de Tal <br /> CRBM 12345
              </span>
            </nav>
          </div>


        </div>

        {/* System Status / Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 font-mono uppercase tracking-widest text-center md:text-left">
          <p>
            © 2026 Plena Saúde.
          </p>

          <div className="flex items-center gap-2 md:mr-24">
            <span className="opacity-50">Desenvolvido por:</span>
            <img src={logoPontoUm} alt=".1 digital" className="h-5 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}
