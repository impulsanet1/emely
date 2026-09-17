import React from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, Clock } from 'lucide-react';
import { HelloKittyBow } from './HelloKittyBow';

interface EventPresentationProps {
  celebrantName: string;
  romanticMessage: string;
  familyMessage?: string;
  parentsTitle?: string;
  parentsNames?: string;
  inviteCallToAction?: string;
  specialDateText?: string;
}

export const EventPresentation: React.FC<EventPresentationProps> = ({
  celebrantName,
  romanticMessage,
  parentsTitle = 'MIS PADRES',
  parentsNames = 'Manuel Cadena y Yaneth Tafur',
  inviteCallToAction = 'Te invitamos a acompañarnos el día:',
}) => {
  return (
    <section id="presentation-section" className="py-6 px-4 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Emblema superior con moño */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/60 border border-rose-200/70 text-rose-700 mb-3">
          <span className="text-[10px] uppercase font-bold tracking-widest">
            Momento Especial
          </span>
          <HelloKittyBow size={16} color="pink" />
        </div>

        {/* Sección: MIS PADRES */}
        <div className="mb-3">
          <span className="text-[11px] font-bold text-rose-600 uppercase tracking-[0.25em] block mb-1">
            {parentsTitle}
          </span>
          <h3 className="font-serif-elegant text-xl sm:text-2xl font-bold text-slate-800 tracking-wide">
            {parentsNames}
          </h3>
        </div>

        {/* Cita reflexiva / emotiva */}
        <p className="font-serif-elegant text-base text-slate-700 leading-relaxed italic my-2 max-w-xs mx-auto">
          “{romanticMessage}”
        </p>

        {/* Separador sutil */}
        <div className="my-3.5 flex items-center justify-center gap-2.5 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-300/80" />
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300/60 shrink-0" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-300/80" />
        </div>

        {/* Te invitamos a acompañarnos el día: */}
        <p className="text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider mb-2">
          {inviteCallToAction}
        </p>

        {/* Fecha y hora en dorado */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-100/50 border border-amber-300/60 mb-2">
          <div className="flex items-center gap-1.5 text-amber-800 font-serif-elegant text-base sm:text-lg font-bold tracking-wide">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>Domingo, 1 de Noviembre 2026</span>
          </div>
          <span className="hidden sm:inline text-amber-500 font-bold">•</span>
          <div className="flex items-center gap-1 text-amber-800 font-medium text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>7:00 PM</span>
          </div>
        </div>

        {/* Nombre caligráfico */}
        <p className="font-script text-3xl sm:text-4xl text-rose-600 mt-1">
          {celebrantName}
        </p>
      </motion.div>
    </section>
  );
};
