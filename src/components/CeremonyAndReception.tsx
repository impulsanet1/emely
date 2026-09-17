import React from 'react';
import { motion } from 'motion/react';
import { Church, Wine, Clock, MapPin, ExternalLink } from 'lucide-react';
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
  receptionTitle,
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
    <section id="ceremony-reception-section" className="py-6 px-3.5 max-w-md mx-auto">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 mb-1">
          <HelloKittyBow size={20} color="pink" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-rose-500 font-bold">
            ¿Dónde y Cuándo?
          </span>
          <HelloKittyBow size={20} color="pink" />
        </div>
        <h2 className="font-serif-elegant text-2xl font-bold text-slate-800">
          {hasCeremony ? 'Ceremonia y Recepción' : 'Lugar de la Celebración'}
        </h2>
      </div>

      <div className="space-y-3.5">
        {/* TARJETA CEREMONIA RELIGIOSA (Solo si aplica) */}
        {hasCeremony && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 border border-rose-200/90 rounded-2xl p-4 shadow-md shadow-rose-100/50 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 mb-2">
              <Church className="w-5 h-5" />
            </div>

            <span className="text-[10px] uppercase tracking-wider font-semibold text-rose-400">
              Misa de Acción de Gracias
            </span>
            <h3 className="font-serif-elegant text-lg font-bold text-slate-800 mb-2">
              {ceremonyTitle}
            </h3>

            <div className="w-full space-y-1.5 py-2.5 my-1 border-y border-rose-100 text-xs">
              <div className="flex items-center justify-center gap-1.5 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="font-semibold text-rose-600">{ceremonyTime}</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-medium text-slate-800">{ceremonyPlace}</span>
              </div>
            </div>

            <a
              href={getMapsUrl(ceremonyPlace || '', ceremonyAddress || '')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-all"
            >
              <span>Ver Ubicación</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        )}

        {/* TARJETA: RECEPCIÓN & FIESTA DE GALA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: hasCeremony ? 0.1 : 0 }}
          className="bg-white/95 border border-rose-200/90 rounded-2xl p-4 sm:p-5 shadow-md shadow-rose-100/50 flex flex-col items-center text-center"
        >
          <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-2 shadow-sm">
            <Wine className="w-5 h-5" />
          </div>

          <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600">
            Gran Celebración de Gala
          </span>
          <h3 className="font-serif-elegant text-xl font-bold text-slate-800 mb-2">
            {receptionTitle}
          </h3>

          <div className="w-full space-y-2 py-3 my-1 border-y border-rose-100 text-xs">
            {eventDate && (
              <div className="flex items-center justify-center gap-1.5 text-slate-700">
                <span className="text-rose-500 font-bold">📅</span>
                <span className="font-semibold text-rose-600">{eventDate}</span>
              </div>
            )}
            <div className="flex items-center justify-center gap-1.5 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-medium text-amber-700">{receptionTime}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="font-medium text-slate-800">{receptionPlace}</span>
            </div>
            <div className="text-[11px] text-slate-500">
              {locationCity}, {locationRegion} • {locationCountry}
            </div>
          </div>

          <a
            href={getMapsUrl(receptionPlace, receptionAddress)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-50 to-rose-50 hover:from-amber-100 hover:to-rose-100 text-amber-900 border border-amber-200/80 text-xs font-semibold shadow-sm transition-all"
          >
            <span>Ver Ubicación en Mapa</span>
            <ExternalLink className="w-3 h-3 text-amber-700" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
