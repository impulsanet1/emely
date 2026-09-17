import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, Heart, AlertCircle, Gift } from 'lucide-react';

interface DressCodeAndGiftsProps {
  dressCodeTitle: string;
  dressCodeDescription: string;
  dressCodeColorNote: string;
  giftTitle: string;
  giftDescription: string;
}

export const DressCodeAndGifts: React.FC<DressCodeAndGiftsProps> = ({
  dressCodeTitle,
  dressCodeDescription,
  dressCodeColorNote,
  giftTitle,
  giftDescription,
}) => {
  return (
    <section id="dresscode-gifts-section" className="py-6 px-3.5 max-w-md mx-auto space-y-3.5">
      {/* CÓDIGO DE VESTIMENTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 border border-rose-200/90 rounded-2xl p-4 shadow-md shadow-rose-100/50 text-center"
      >
        <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto mb-2 text-rose-500">
          <Sparkles className="w-5 h-5" />
        </div>

        <span className="text-[10px] uppercase tracking-wider font-semibold text-rose-400">
          Dress Code
        </span>
        <h3 className="font-serif-elegant text-lg font-bold text-slate-800 mb-1">
          {dressCodeTitle}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed font-light mb-3 max-w-xs mx-auto">
          {dressCodeDescription}
        </p>

        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-left flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-rose-700 leading-snug">
            <strong>Color Reservado:</strong> {dressCodeColorNote}
          </p>
        </div>
      </motion.div>

      {/* SUGERENCIA DE REGALO: REGALO O LLUVIA DE SOBRES */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/95 border border-rose-200/90 rounded-2xl p-4 shadow-md shadow-rose-100/50 text-center"
      >
        {/* Iconos combinados de Regalo y Sobre */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
            <Gift className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <Mail className="w-5 h-5" />
          </div>
        </div>

        <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600">
          Detalle para la Quinceañera
        </span>
        <h3 className="font-serif-elegant text-lg font-bold text-slate-800 mb-1">
          {giftTitle}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed font-light mb-3 max-w-xs mx-auto">
          {giftDescription}
        </p>

        {/* Dos opciones claras para los invitados */}
        <div className="space-y-2 text-left">
          <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-2">
            <Gift className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-700 leading-snug">
              <strong className="text-rose-600">Regalo / Obsequio:</strong> Dispondrás de una mesa especial en el salón para colocar tu regalo personal.
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2">
            <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-700 leading-snug">
              <strong className="text-amber-700">Lluvia de Sobres:</strong> Si prefieres esta opción, habrá un cofre decorativo a la entrada de la recepción para recibir tu sobre.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
