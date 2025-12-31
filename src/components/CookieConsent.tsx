import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'lgpd-consent';
const PREFERENCES_KEY = 'cookie-preferences';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: false,
  timestamp: '',
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay for cinematic entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = async (prefs: CookiePreferences) => {
    setIsSaving(true);
    // Simulate processing for premium feel
    await new Promise(resolve => setTimeout(resolve, 600));

    const prefsWithTimestamp = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefsWithTimestamp));
    localStorage.setItem(CONSENT_KEY, 'custom');

    setIsVisible(false);
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true, timestamp: '' });
  };

  const handleRejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false, timestamp: '' });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-[60] w-full max-w-[380px]"
        >
          {/* Tech Border Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-xl opacity-20 pointer-events-none" />

          <div className="relative overflow-hidden rounded-2xl bg-[#0f0f10]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="p-6 relative">
              {/* Close/Reject wrapper */}
              <button
                onClick={handleRejectAll}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={14} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">

                <div>
                  <h3 className="font-display text-lg font-medium text-[#f2f2eb]">
                    Privacidade Ativa
                  </h3>

                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-sm font-light leading-relaxed text-[#a3a3a3]">
                  Utilizamos cookies para calibrar sua experiência. A precisão do nosso método também se aplica aos seus dados.
                  <br />
                  <Link
                    to="/politica-de-privacidade"
                    className="text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors text-xs mt-2 inline-block"
                  >
                    Ver documentação técnica
                  </Link>
                </p>

                {/* Manage Preferences Toggle */}
                <button
                  onClick={() => setShowPreferences(!showPreferences)}
                  className="group flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 hover:text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current group-hover:animate-pulse" />
                  {showPreferences ? 'Ocultar Preferências' : 'Personalizar Dados'}
                  {showPreferences ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>

                {/* Cookie Preferences Panel */}
                <AnimatePresence>
                  {showPreferences && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pt-2 pb-4">
                        {/* Essential */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-xs font-medium text-[#f2f2eb]">Essenciais</span>
                          <Switch checked={true} disabled className="data-[state=checked]:bg-primary/50" />
                        </div>
                        {/* Analytics */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                          <span className="text-xs font-medium text-[#f2f2eb]">Analíticos</span>
                          <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(c) => setPreferences(p => ({ ...p, analytics: c }))}
                            className="data-[state=checked]:bg-primary"
                          />
                        </div>
                        {/* Marketing */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                          <span className="text-xs font-medium text-[#f2f2eb]">Marketing</span>
                          <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(c) => setPreferences(p => ({ ...p, marketing: c }))}
                            className="data-[state=checked]:bg-primary"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="h-10 border-white/10 bg-transparent text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 rounded-lg text-xs font-mono uppercase tracking-widest"
                  >
                    Recusar
                  </Button>
                  <Button
                    onClick={showPreferences ? handleSavePreferences : handleAcceptAll}
                    disabled={isSaving}
                    className="h-10 bg-[#f2f2eb] text-[#0f0f10] hover:bg-white rounded-lg text-xs font-mono uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                  >
                    {isSaving ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <div className="w-4 h-4 border-2 border-[#0f0f10]/30 border-t-[#0f0f10] rounded-full" />
                      </motion.div>
                    ) : (
                      showPreferences ? 'Salvar' : 'Aceitar'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
