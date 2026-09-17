import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, X, User } from 'lucide-react';
import { HelloKittyBow } from './HelloKittyBow';

interface RsvpSectionProps {
  celebrantName: string;
  whatsappNumber: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  celebrantName,
  whatsappNumber,
}) => {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');

  const generateWhatsAppUrl = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const cleanGuest = guestName.trim() || 'Invitado especial';

    let text = `Hola ${celebrantName},\n\n`;

    if (attendance === 'yes') {
      text += `Soy ${cleanGuest} y confirmo con mucha alegría mi asistencia a tus XV Años.\n`;
    } else {
      text += `Soy ${cleanGuest} y quería agradecerte la invitación a tus XV Años. Lamentablemente no podré asistir, pero te deseo una noche inolvidable y muchas bendiciones.\n`;
    }

    text += `\nUn saludo cordial.`;

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      return;
    }
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="rsvp-section" className="py-6 px-4 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Encabezado */}
        <div className="mb-4">
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-rose-100/60 border border-rose-200/70 mb-1.5">
            <HelloKittyBow size={24} color="pink" />
          </div>

          <h2 className="font-serif-elegant text-2xl font-bold text-slate-800">
            Confirmación de Asistencia
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
            Por favor indícanos si podremos contar con tu valiosa compañía.
          </p>
        </div>

        {/* Formulario fluido sin caja envolvente */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-left w-full max-w-xs">
          {/* Nombre */}
          <div>
            <label
              htmlFor="guest-name-input"
              className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Nombre y Apellido
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-rose-400">
                <User className="w-3.5 h-3.5" />
              </div>
              <input
                id="guest-name-input"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Escribe tu nombre completo"
                className="w-full pl-8 pr-3 py-2.5 rounded-2xl bg-white/80 border border-rose-200 focus:border-rose-400 focus:bg-white focus:outline-none text-slate-800 text-xs transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Asistencia */}
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Confirmación
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAttendance('yes')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                  attendance === 'yes'
                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                    : 'bg-white/80 text-slate-700 border-rose-200 hover:bg-white'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Sí, asistiré</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance('no')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                  attendance === 'no'
                    ? 'bg-slate-700 text-white border-slate-700 shadow-sm'
                    : 'bg-white/80 text-slate-700 border-rose-200 hover:bg-white'
                }`}
              >
                <X className="w-3.5 h-3.5" />
                <span>No podré asistir</span>
              </button>
            </div>
          </div>

          {/* Botón directo para WhatsApp */}
          <button
            id="btn-confirm-whatsapp"
            type="submit"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enviar Confirmación por WhatsApp</span>
          </button>
        </form>
      </motion.div>
    </section>
  );
};
