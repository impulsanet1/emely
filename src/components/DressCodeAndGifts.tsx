import React from 'react';
import { motion } from 'motion/react';
import { Mail, Gift } from 'lucide-react';

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
    <section id="dresscode-gifts-section" className="py-6 px-4 max-w-md mx-auto space-y-8 text-center">
      {/* CÓDIGO DE VESTIMENTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-rose-500 mb-1 block">
          Código de Vestimenta
        </span>
        <h3 className="font-serif-elegant text-2xl font-bold text-slate-800 mb-2">
          {dressCodeTitle}
        </h3>

        {/* Iconos vectoriales limpios: Vestido y Corbata */}
        <div className="flex items-center justify-center gap-6 my-2 text-rose-500">
          <svg
            className="w-10 h-10 stroke-rose-500 fill-transparent"
            viewBox="0 0 48 48"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 11 L14 16 L20 17 L24 19 L28 17 L34 16 L32 11" />
            <path d="M20 17 C22 21, 26 21, 28 17" />
            <path d="M19 23 L29 23" />
            <path d="M20 17 L19 23" />
            <path d="M28 17 L29 23" />
            <path d="M19 23 C17 31, 12 37, 12 40 C20 37, 28 37, 36 40 C36 37, 31 31, 29 23" />
            <path d="M24 23 C23 30, 22 35, 23 38" />
            <path d="M25 23 C26 30, 27 35, 26 38" />
          </svg>

          <svg
            className="w-10 h-10 stroke-slate-700 fill-transparent"
            viewBox="0 0 48 48"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 13 L24 19 L33 13" />
            <path d="M15 13 L19 21 L24 19" />
            <path d="M33 13 L29 21 L24 19" />
            <polygon points="21,19 27,19 26,23 22,23" />
            <polygon points="22,23 26,23 28,37 24,42 20,37" />
            <line x1="22.5" y1="27" x2="25.5" y2="29" />
            <line x1="21.5" y1="32" x2="26.5" y2="34" />
            <line x1="21" y1="36" x2="26" y2="38" />
          </svg>
        </div>

        <p className="font-serif-elegant text-base font-bold text-slate-800 tracking-wide mt-2 mb-1">
          {dressCodeDescription}
        </p>

        <p className="text-xs text-rose-800 font-medium leading-relaxed max-w-xs mx-auto mt-1">
          {dressCodeColorNote}
        </p>
      </motion.div>

      {/* SUGERENCIA DE REGALO */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-600 mb-1 block">
          Detalle Especial
        </span>
        <h3 className="font-serif-elegant text-2xl font-bold text-slate-800 mb-1.5">
          {giftTitle}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed font-light mb-3 max-w-xs mx-auto">
          {giftDescription}
        </p>

        <div className="space-y-2 text-left w-full max-w-xs">
          <div className="py-2 border-b border-rose-200/60 flex items-start gap-2.5">
            <Gift className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-rose-700 font-semibold">Regalo u Obsequio:</strong> Dispondremos de una mesa especial en la recepción para tu presente.
            </div>
          </div>

          <div className="py-2 border-b border-rose-200/60 flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-amber-800 font-semibold">Lluvia de Sobres:</strong> Contaremos con un cofre en la entrada para recibir tu sobre.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
