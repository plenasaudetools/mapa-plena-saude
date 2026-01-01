import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Ban } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-[#f2f2eb] flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg text-center"
        >
          {/* Icon Glitch Effect Wrapper */}
          <div className="relative inline-flex mb-8 group">
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
            <div className="relative p-6 rounded-2xl bg-[#0f0f10]/80 border border-white/10 backdrop-blur-md shadow-2xl">
              <Ban size={48} className="text-white/60" strokeWidth={1} />
            </div>
          </div>

          <h1 className="text-[8rem] leading-[0.8] font-display font-medium text-white/5 tracking-tighter select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4">
            Página não encontrada
          </h2>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6" />

          <p className="text-lg text-white/50 font-light leading-relaxed mb-10 max-w-sm mx-auto">
            O conteúdo que você procura não está disponível ou foi movido.
          </p>

          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-lg overflow-hidden"
          >
            <ArrowLeft size={18} className="text-white/70 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/90">
              Voltar ao Início
            </span>
          </Link>

          <div className="mt-12 flex items-center justify-center gap-2 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            Erro 404
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
