import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoPlena from '@/assets/logo-plena-saude.png';

const navItems = [
  { label: 'O Ciclo', href: '/#ciclo' },
  { label: 'Diagnóstico', href: '/#como-funciona' },
  { label: 'Evolução', href: '/#cronograma' },
  { label: 'Evidência', href: '/#resultados' },
];

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20agendar%20uma%20reuni%C3%A3o%20para%20avaliar%20o%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent awkward scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="w-full px-4 lg:px-8 py-4">
        {/* Navbar Container */}
        <div
          className={`
                relative z-50 flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-500 border
                ${isScrolled || isMobileMenuOpen
              ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-white/5 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border-transparent'
            }
            `}
        >
          {/* Logo - Always White for Dark Theme */}
          <a href="/" className="flex items-center gap-2 relative z-50">
            <img
              src={logoPlena}
              alt="Plena Saúde - System"
              className={`w-auto transition-all duration-300 brightness-0 invert opacity-90 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-medium uppercase tracking-widest transition-all duration-300 border
                ${isScrolled
                ? 'bg-white text-black border-white hover:bg-white/90'
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/30'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reservar
          </motion.a>

          {/* Mobile Toggle Button (Visible even when menu is open) */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white z-50 relative"
            onClick={(e) => {
              e.stopPropagation(); // Prevent immediate close
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop that closes menu on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* The Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-0 left-0 right-0 pt-24 pb-8 px-4 bg-[#0a0a0b] border-b border-white/10 shadow-2xl z-40"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-4 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm uppercase tracking-widest transition-colors border-b border-white/5 last:border-0 text-center"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 px-4 py-4 bg-white text-black rounded-lg text-center text-sm uppercase tracking-widest font-medium shadow-lg shadow-white/10"
                >
                  Reservar Horário
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
