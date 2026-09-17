import React from 'react';
import { motion } from 'motion/react';

interface HeroEditorialProps {
  celebrantName: string;
  celebrationTitle?: string;
  eventDate?: string;
  eventTime?: string;
  eventAddress?: string;
  locationCity?: string;
  locationRegion?: string;
  locationCountry?: string;
  onExploreClick?: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  celebrantName,
}) => {
  return (
    <section className="relative min-h-[620px] sm:min-h-[680px] flex flex-col justify-end items-center text-center px-4 pb-28 sm:pb-36 pt-12 overflow-hidden">
      {/* IMAGEN DE FONDO CON VESTIDO DE QUINCEAÑERA */}
      <div className="absolute inset-0 z-0">
        <img
          src="/emely-hero.jpg"
          alt="Foto de la Quinceañera Emely"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[1.05]"
        />
        {/* Degradado envolvente para garantizar contraste sin tapar el vestido */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
      </div>

      {/* TEXTO ELEVADO A BUENA ALTURA VISUAL: ÚNICAMENTE "Mis XV Años" Y EL NOMBRE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center"
      >
        {/* Mis XV Años en tipografía cursiva blanca/dorado marfil muy suave */}
        <p className="font-script text-3xl sm:text-4xl text-rose-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] tracking-wide mb-1.5">
          Mis XV Años
        </p>

        {/* Nombre de la quinceañera */}
        <h1 className="font-serif-elegant text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.98)]">
          {celebrantName}
        </h1>
      </motion.div>
    </section>
  );
};
