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
    <section id="dresscode-gifts-section" className="py-2.5 px-3 max-w-md mx-auto space-y-2.5">
      {/* CÓDIGO DE VESTIMENTA ESTILO IMAGEN CON PALETA COHERENTE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 border border-rose-200/90 rounded-2xl p-4 shadow-md shadow-rose-100/50 text-center"
      >
        <span className="text-[9px] uppercase tracking-wider font-semibold text-rose-400">
          Código de Vestimenta
        </span>
        <h3 className="font-serif-elegant text-base sm:text-lg font-bold text-slate-800 mb-2">
          Dress Code
        </h3>

        {/* Iconos vectoriales limpios: Vestido y Corbata */}
        <div className="flex items-center justify-center gap-6 my-2 text-rose-500">
          {/* Icono Vestido */}
          <svg
            className="w-10 h-10 stroke-rose-500 fill-transparent"
            viewBox="0 0 48 48"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Tirantes y escote */}
            <path d="M16 11 L14 16 L20 17 L24 19 L28 17 L34 16 L32 11" />
            <path d="M20 17 C22 21, 26 21, 28 17" />
            {/* Cintura */}
            <path d="M19 23 L29 23" />
            <path d="M20 17 L19 23" />
            <path d="M28 17 L29 23" />
            {/* Falda acampanada */}
            <path d="M19 23 C17 31, 12 37, 12 40 C20 37, 28 37, 36 40 C36 37, 31 31, 29 23" />
            <path d="M24 23 C23 30, 22 35, 23 38" />
            <path d="M25 23 C26 30, 27 35, 26 38" />
          </svg>

          {/* Icono Corbata con cuello */}
          <svg
            className="w-10 h-10 stroke-slate-700 fill-transparent"
            viewBox="0 0 48 48"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cuello de camisa */}
            <path d="M15 13 L24 19 L33 13" />
            <path d="M15 13 L19 21 L24 19" />
            <path d="M33 13 L29 21 L24 19" />
            {/* Nudo de corbata */}
            <polygon points="21,19 27,19 26,23 22,23" />
            {/* Cuerpo de la corbata */}
            <polygon points="22,23 26,23 28,37 24,42 20,37" />
            {/* Rayas diagonales interiores */}
            <line x1="22.5" y1="27" x2="25.5" y2="29" />
            <line x1="21.5" y1="32" x2="26.5" y2="34" />
            <line x1="21" y1="36" x2="26" y2="38" />
          </svg>
        </div>

        {/* Ellas: Divinas   Ellos: Elegantes */}
        <p className="font-serif-elegant text-sm sm:text-base font-bold text-slate-800 tracking-wide mt-2 mb-1">
          Ellas: Divinas &nbsp;&bull;&nbsp; Ellos: Elegantes
        </p>

        {/* Nota del color reservado */}
        <div className="mt-2 p-2 rounded-xl bg-rose-50/80 border border-rose-200/80">
          <p className="text-[11px] text-rose-700 font-medium leading-snug">
            Para esta noche tan especial nos reservamos el color <strong>Fucsia y dorado</strong>
          </p>
        </div>
      </motion.div>

      {/* SUGERENCIA DE REGALO: REGALO O LLUVIA DE SOBRES */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/95 border border-rose-200/90 rounded-2xl p-3.5 shadow-md shadow-rose-100/50 text-center"
      >
        {/* Iconos combinados de Regalo y Sobre */}
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500">
            <Gift className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <Mail className="w-4 h-4" />
          </div>
        </div>

        <span className="text-[9px] uppercase tracking-wider font-semibold text-amber-600">
          Detalle para la Quinceañera
        </span>
        <h3 className="font-serif-elegant text-base font-bold text-slate-800 mb-0.5">
          {giftTitle}
        </h3>

        <p className="text-[11px] text-slate-600 leading-relaxed font-light mb-2 max-w-xs mx-auto">
          {giftDescription}
        </p>

        {/* Dos opciones claras para los invitados */}
        <div className="space-y-1.5 text-left">
          <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-2">
            <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
            <div className="text-[10.5px] text-slate-700 leading-snug">
              <strong className="text-rose-600">Regalo / Obsequio:</strong> Mesa especial en el salón para tu detalle personal.
            </div>
          </div>

          <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-[10.5px] text-slate-700 leading-snug">
              <strong className="text-amber-700">Lluvia de Sobres:</strong> Cofre decorativo a la entrada de la recepción para recibir tu sobre.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
