import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { HelloKittyBow, GoldenSparkle } from './HelloKittyBow';

interface HeroEditorialProps {
  celebrantName: string;
  celebrationTitle: string;
  eventDate: string;
  eventTime?: string;
  eventAddress?: string;
  locationCity: string;
  locationRegion: string;
  locationCountry: string;
  onExploreClick?: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  celebrantName,
  celebrationTitle,
  eventDate,
  eventTime = '7:00 PM',
  eventAddress = '3529+R76 Suárez, Tolima',
}) => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-3 pt-5 pb-3 overflow-hidden">
      {/* Resplandor suave bokeh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-rose-200/40 blur-2xl pointer-events-none" />

      {/* Tarjeta compacta optimizada para celular */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-sm mx-auto bg-white/95 border border-rose-200/90 rounded-3xl p-5 shadow-lg shadow-rose-200/30 backdrop-blur-md"
      >
        {/* Monograma / Moño superior */}
        <div className="flex flex-col items-center justify-center mb-2">
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-rose-50 to-white border border-rose-200 shadow-sm">
            <HelloKittyBow size={32} color="pink" />
            <div className="absolute -top-1 -right-1">
              <GoldenSparkle size={12} />
            </div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-rose-500 font-semibold mt-1.5">
            Nuestra Quinceañera
          </span>
        </div>

        {/* Nombre de Emely */}
        <h1 className="font-serif-elegant text-4xl sm:text-5xl font-bold tracking-tight text-slate-800 drop-shadow-sm mb-0.5">
          <span className="rose-gold-gradient">{celebrantName}</span>
        </h1>

        {/* Título de la celebración */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-rose-300" />
          <p className="font-script text-2xl sm:text-3xl text-rose-600">
            {celebrationTitle}
          </p>
          <span className="h-[1px] w-6 bg-rose-300" />
        </div>

        {/* Cita breve */}
        <p className="text-[11px] text-slate-600 leading-relaxed font-light italic max-w-xs mx-auto mb-3">
          “Hay momentos que se convierten en recuerdos para toda la vida. Hoy quiero compartir contigo este día tan especial.”
        </p>

        {/* Badge de fecha, hora y lugar */}
        <div className="p-2.5 rounded-2xl bg-rose-50/85 border border-rose-200/80 text-[11px] font-semibold text-slate-700 space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-rose-600">
            <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{eventDate}</span>
            <span className="text-rose-300">•</span>
            <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>{eventTime}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium text-slate-800">{eventAddress}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
