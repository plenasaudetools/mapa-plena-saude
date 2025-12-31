import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Quero%20realizar%20a%20avalia%C3%A7%C3%A3o%20do%20Ciclo%20Facial%20Completo%20da%20Plena%20Sa%C3%BAde.";

export function WhatsAppButton() {
  const [isOverLightSection, setIsOverLightSection] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      // Get the point specifically under the button
      // We use a slight offset to avoid getting the button itself if possible, 
      // or we use 'pointer-events: none' on the button during check if needed, 
      // but simpler is to check a point just next to it.
      const x = window.innerWidth - 60;
      const y = window.innerHeight - 60;

      const elements = document.elementsFromPoint(x, y);

      let isLight = false;

      // Iterate through elements at that point
      for (const element of elements) {
        // Skip the button itself or overlays
        if (element.tagName === 'A' || element.tagName === 'BUTTON' || element.getAttribute('role') === 'dialog') continue;

        const style = window.getComputedStyle(element);
        const bgColor = style.backgroundColor;
        const bgImage = style.backgroundImage;

        // Parse RGB
        const rgb = bgColor.match(/\d+/g);

        if (rgb) {
          const r = parseInt(rgb[0]);
          const g = parseInt(rgb[1]);
          const b = parseInt(rgb[2]);
          const a = rgb[3] ? parseFloat(rgb[3]) : 1;

          // If the element has a visible background color
          if (a > 0.1) {
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            if (brightness > 180) { // Light background threshold
              isLight = true;
            }
            // Once we find the top-most visible background, we stop.
            // This assumes the stacking context matches dom order returned by elementsFromPoint
            break;
          }
        }
      }

      setIsOverLightSection(isLight);
    };

    window.addEventListener('scroll', checkBackground);
    // Initial check
    setTimeout(checkBackground, 500);

    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  return (
    <>
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // Dynamic Class Assignment
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md border transition-all duration-500 group shadow-2xl
            ${isOverLightSection
            ? 'bg-[#0a0a0b] border-black/20 text-white hover:bg-black'
            : 'bg-[#0a0a0b]/80 border-white/10 text-white hover:bg-[#25D366] hover:border-[#25D366]'
          }
        `}
        aria-label="Realizar avaliação pelo WhatsApp"
      >
        <div className="relative">
          {/* Status Indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isOverLightSection ? 'bg-green-400' : 'bg-green-500'}`}></span>
          </span>
          <MessageCircle size={24} className="group-hover:text-white transition-colors" strokeWidth={1.5} />
        </div>
      </motion.a>
    </>
  );
}
