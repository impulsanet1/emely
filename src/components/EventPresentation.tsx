import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { HelloKittyBow, GoldenSparkle } from './HelloKittyBow';

interface EventPresentationProps {
  celebrantName: string;
  romanticMessage: string;
  familyMessage?: string;
}

export const EventPresentation: React.FC<EventPresentationProps> = ({
  celebrantName,
  romanticMessage,
  familyMessage = 'Con la bendición de Dios y el amor de mi familia, tengo el honor de invitarte a celebrar mis quince años.',
}) => {
  return (
    <section id="presentation-section" className="py-6 px-3.5 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/95 border border-rose-200/90 rounded-3xl p-5 sm:p-6 shadow-lg shadow-rose-100/60 text-center"
      >
        {/* Emblema con moño Hello Kitty */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider">
              Momento Especial
            </span>
            <HelloKittyBow size={18} color="pink" />
          </div>
        </div>

        {/* Mensaje de bendición familiar */}
        <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide leading-relaxed mb-3">
          {familyMessage}
        </p>

        {/* Cita principal */}
        <p className="font-serif-elegant text-base sm:text-lg text-slate-800 leading-relaxed italic my-2">
          “{romanticMessage}”
        </p>

        {/* Separador decorativo con corazones */}
        <div className="my-4 flex items-center justify-center gap-2">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 animate-pulse" />
          <GoldenSparkle size={14} />
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 animate-pulse" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-rose-300" />
        </div>

        {/* Firma caligráfica */}
        <p className="font-script text-3xl sm:text-4xl text-rose-600">
          {celebrantName}
        </p>
        <p className="text-[10px] text-rose-400 tracking-widest uppercase font-semibold">
          Quinceañera
        </p>
      </motion.div>
    </section>
  );
};
