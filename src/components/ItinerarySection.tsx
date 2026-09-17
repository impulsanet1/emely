import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, Wine, Utensils, PartyPopper, Users } from 'lucide-react';
import { ItineraryItem } from '../types';
import { GoldenSparkle } from './HelloKittyBow';

interface ItinerarySectionProps {
  items: ItineraryItem[];
  celebrantName: string;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({
  items,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'reception':
        return <Users className="w-4 h-4 text-rose-500" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'waltz':
        return <Music className="w-4 h-4 text-rose-500" />;
      case 'toast':
        return <Wine className="w-4 h-4 text-amber-500" />;
      case 'dinner':
        return <Utensils className="w-4 h-4 text-rose-500" />;
      case 'party':
        return <PartyPopper className="w-4 h-4 text-amber-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="itinerary-section" className="py-2.5 px-3 max-w-md mx-auto">
      <div className="text-center mb-2.5">
        <div className="inline-flex items-center gap-1.5 mb-0.5">
          <GoldenSparkle size={12} />
          <span className="text-[9px] uppercase tracking-[0.2em] text-rose-500 font-bold">
            Cronograma del Evento
          </span>
          <GoldenSparkle size={12} />
        </div>
        <h2 className="font-serif-elegant text-xl font-bold text-slate-800">
          Itinerario de la Noche
        </h2>
      </div>

      <div className="bg-white/95 border border-rose-200/90 rounded-2xl p-3 shadow-md shadow-rose-100/50 space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="flex items-start gap-2.5 p-2 rounded-xl bg-rose-50/60 border border-rose-200/70"
          >
            <div className="w-7 h-7 rounded-full bg-white border border-rose-300 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              {getIcon(item.icon)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="font-serif-elegant text-xs font-bold text-slate-800 truncate">
                  {item.title}
                </h4>
                <span className="text-[9px] font-bold text-rose-600 uppercase tracking-wider shrink-0 bg-white px-1.5 py-0.5 rounded border border-rose-200">
                  {item.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
