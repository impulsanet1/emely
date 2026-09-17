import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';
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
    <footer id="closing-section" className="relative py-4 px-3 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-b from-white/95 via-rose-50/80 to-white/95 border border-rose-200/90 rounded-3xl p-4 shadow-lg shadow-rose-200/30"
      >
        {/* Kitty silueta compacta */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <KittySilhouette size={52} className="animate-float" />
            <div className="absolute -bottom-1 right-0">
              <HelloKittyBow size={18} color="gold" />
            </div>
          </div>
        </div>

        {/* Destellos */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Star className="w-3 h-3 text-amber-400 fill-amber-300" />
          <Heart className="w-3 h-3 text-rose-400 fill-rose-300" />
          <GoldenSparkle size={12} />
          <Heart className="w-3 h-3 text-rose-400 fill-rose-300" />
          <Star className="w-3 h-3 text-amber-400 fill-amber-300" />
        </div>

        {/* Mensaje de cierre */}
        <p className="font-serif-elegant text-sm font-medium text-slate-800 leading-snug mb-1.5">
          “{closingMessage}”
        </p>

        <p className="text-[11px] text-slate-600 font-light max-w-xs mx-auto mb-3 leading-relaxed">
          Gracias por acompañarme en este sueño y ser parte de mis recuerdos más bonitos.
        </p>

        {/* Firma */}
        <div className="flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.25em] text-rose-400 font-semibold mb-0.5">
            Con todo mi cariño,
          </span>
          <h3 className="font-script text-3xl text-rose-600 mb-0.5">
            {celebrantName}
          </h3>
          <p className="text-[9px] text-amber-700 font-medium tracking-wider uppercase">
            Mis XV Años • 3529+R76 Suárez, Tolima
          </p>
        </div>

        {/* Moño final */}
        <div className="mt-3 flex justify-center">
          <HelloKittyBow size={24} color="pink" />
        </div>
      </motion.div>

      <p className="text-[10px] text-rose-400/80 mt-2.5">
        Diseñado con amor y dulzura para Emely 🌸
      </p>
    </footer>
  );
};
