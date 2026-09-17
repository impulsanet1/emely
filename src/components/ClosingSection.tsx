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
    <footer id="closing-section" className="relative py-8 px-3.5 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-b from-white/95 via-rose-50/80 to-white/95 border border-rose-200/90 rounded-3xl p-5 shadow-lg shadow-rose-200/30"
      >
        {/* Kitty silueta compacta */}
        <div className="flex justify-center mb-3">
          <div className="relative">
            <KittySilhouette size={64} className="animate-float" />
            <div className="absolute -bottom-1 right-0">
              <HelloKittyBow size={20} color="gold" />
            </div>
          </div>
        </div>

        {/* Destellos */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-300" />
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300" />
          <GoldenSparkle size={14} />
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300" />
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-300" />
        </div>

        {/* Mensaje de cierre */}
        <p className="font-serif-elegant text-base font-medium text-slate-800 leading-snug mb-2">
          “{closingMessage}”
        </p>

        <p className="text-xs text-slate-600 font-light max-w-xs mx-auto mb-4 leading-relaxed">
          Gracias por acompañarme en este sueño y ser parte de mis recuerdos más bonitos.
        </p>

        {/* Firma */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-rose-400 font-semibold mb-0.5">
            Con todo mi cariño,
          </span>
          <h3 className="font-script text-4xl text-rose-600 mb-0.5">
            {celebrantName}
          </h3>
          <p className="text-[10px] text-amber-700 font-medium tracking-wider uppercase">
            Mis XV Años • 3529+R76 Suárez, Tolima
          </p>
        </div>

        {/* Moño final */}
        <div className="mt-4 flex justify-center">
          <HelloKittyBow size={28} color="pink" />
        </div>
      </motion.div>

      <p className="text-[11px] text-rose-400/80 mt-4">
        Diseñado con amor y dulzura para Emely 🌸
      </p>
    </footer>
  );
};
