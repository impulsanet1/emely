import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { HelloKittyBow } from './HelloKittyBow';

interface CeremonyAndReceptionProps {
  ceremonyTitle?: string;
  ceremonyTime?: string;
  ceremonyPlace?: string;
  ceremonyAddress?: string;
  receptionTitle: string;
  receptionTime: string;
  receptionPlace: string;
  receptionAddress: string;
  locationCity: string;
  locationRegion: string;
  locationCountry: string;
  eventDate?: string;
}

export const CeremonyAndReception: React.FC<CeremonyAndReceptionProps> = ({
  ceremonyTitle,
  ceremonyTime,
  ceremonyPlace,
  ceremonyAddress,
  receptionTime,
  receptionPlace,
  receptionAddress,
  locationCity,
  locationRegion,
  locationCountry,
  eventDate,
}) => {
  const hasCeremony = Boolean(ceremonyTitle && ceremonyTitle.trim().length > 0);

  const getMapsUrl = (place: string, address: string) => {
    const query = address || place || '3529+R76 Suárez, Tolima';
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <section id="ceremony-reception-section" className="py-6 px-4 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-1.5 mb-1.5">
          <HelloKittyBow size={18} color="pink" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-rose-500 font-semibold">
            Ubicación
          </span>
          <HelloKittyBow size={18} color="pink" />
        </div>
        <h2 className="font-serif-elegant text-2xl font-bold text-slate-800 mb-3">
          Lugar de la Celebración
        </h2>

        {/* CEREMONIA RELIGIOSA (Si aplica) */}
        {hasCeremony && (
          <div className="w-full max-w-xs space-y-1.5 py-3 border-y border-rose-200/60 mb-4 text-xs">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-rose-500 mb-1 block">
              Misa de Acción de Gracias
            </span>
            <h3 className="font-serif-elegant text-lg font-bold text-slate-800 mb-2">
              {ceremonyTitle}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="font-semibold text-rose-600">{ceremonyTime}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-medium text-slate-800">{ceremonyPlace}</span>
            </div>
            <a
              href={getMapsUrl(ceremonyPlace || '', ceremonyAddress || '')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-all"
            >
              <span>Ver Ubicación en Mapa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* DETALLES DE RECEPCIÓN DIRECTOS, SIN RECTÁNGULOS BLANCOS */}
        <div className="w-full max-w-xs space-y-2 py-3 border-y border-rose-200/60 text-xs">
          {eventDate && (
            <div className="flex items-center justify-center gap-1.5 text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="font-semibold text-rose-700">{eventDate}</span>
            </div>
          )}
          <div className="flex items-center justify-center gap-1.5 text-slate-700">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-medium text-amber-800">{receptionTime}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="font-medium text-slate-800">{receptionPlace}</span>
          </div>
          <div className="text-[11px] text-slate-500 font-light">
            {locationCity}, {locationRegion} &bull; {locationCountry}
          </div>
        </div>

        <a
          href={getMapsUrl(receptionPlace, receptionAddress)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-rose-200 text-xs font-semibold shadow-sm transition-all"
        >
          <span>Ver Ubicación en Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
        </a>
      </motion.div>
    </section>
  );
};
