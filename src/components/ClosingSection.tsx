import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { HelloKittyBow, KittySilhouette, GoldenSparkle } from './HelloKittyBow';

interface ClosingSectionProps {
  celebrantName: string;
  closingMessage: string;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  celebrantName,
  closingMessage,
}) => {
  return (
    <footer id="closing-section" className="relative py-8 px-4 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Kitty silueta compacta */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <KittySilhouette size={48} className="animate-float" />
            <div className="absolute -bottom-1 right-0">
              <HelloKittyBow size={18} color="gold" />
            </div>
          </div>
        </div>

        {/* Destellos dorados y corazones decorativos */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart className="w-3 h-3 text-rose-400 fill-rose-300" />
          <GoldenSparkle size={12} />
          <Heart className="w-3 h-3 text-rose-400 fill-rose-300" />
        </div>

        {/* Mensaje de cierre */}
        <p className="font-serif-elegant text-base font-medium text-slate-800 leading-snug mb-2 max-w-xs">
          “{closingMessage}”
        </p>

        <p className="text-xs text-slate-600 font-light max-w-xs mx-auto mb-4 leading-relaxed">
          Gracias por acompañarme en este sueño y ser parte de mis recuerdos más bonitos.
        </p>

        {/* Firma */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-rose-500 font-semibold mb-1">
            Con todo mi cariño,
          </span>
          <h3 className="font-script text-3xl sm:text-4xl text-rose-600 mb-0.5">
            {celebrantName}
          </h3>
          <p className="text-[10px] text-amber-700 font-medium tracking-wider uppercase">
            Noviembre 2026 &bull; Suárez, Tolima
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
