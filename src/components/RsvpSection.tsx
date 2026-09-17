import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Heart, Send, User } from 'lucide-react';
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
    const cleanGuest = guestName.trim() || 'Un invitado especial';

    let text = `¡Hola ${celebrantName}! ✨\n\n`;

    if (attendance === 'yes') {
      text += `Soy *${cleanGuest}* y confirmo con muchísima alegría mi asistencia a tus XV Años. 💖🎀\n`;
    } else {
      text += `Soy *${cleanGuest}* y quería felicitarte por tus XV Años. Lamentablemente no podré asistir, pero te deseo una noche inolvidable y llena de bendiciones. 🌸\n`;
    }

    text += `\n¡Felicidades quinceañera! 👑`;

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
    <section id="rsvp-section" className="py-2.5 px-3 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 border border-rose-200/90 rounded-3xl p-4 shadow-lg shadow-rose-200/30"
      >
        {/* Encabezado */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-rose-50 border border-rose-200 mb-1.5">
            <HelloKittyBow size={24} color="pink" />
          </div>

          <h2 className="font-serif-elegant text-xl font-bold text-slate-800">
            Confirmar Asistencia
          </h2>
          <p className="text-[11px] text-slate-600 mt-0.5 max-w-xs mx-auto">
            Por favor confirma si podrás acompañarnos en esta celebración.
          </p>
        </div>

        {/* Formulario simplificado */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Nombre */}
          <div>
            <label
              htmlFor="guest-name-input"
              className="block text-[10px] font-bold uppercase tracking-wider text-rose-600 mb-1"
            >
              Tu Nombre y Apellido *
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
                placeholder="Ej. Carlos Mendoza"
                className="w-full pl-8 pr-3 py-2.5 rounded-xl bg-rose-50/40 border border-rose-200 focus:border-rose-400 focus:bg-white focus:outline-none text-slate-800 text-xs transition-all"
              />
            </div>
          </div>

          {/* Asistencia (Sí voy / No podré) */}
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-rose-600 mb-1">
              ¿Podrás acompañarnos? *
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAttendance('yes')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  attendance === 'yes'
                    ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                    : 'bg-white text-slate-700 border-rose-200 hover:bg-rose-50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${attendance === 'yes' ? 'fill-white' : ''}`} />
                <span>¡Sí, asistiré!</span>
              </button>

              <button
                type="button"
                onClick={() => setAttendance('no')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  attendance === 'no'
                    ? 'bg-slate-700 text-white border-slate-700 shadow-sm'
                    : 'bg-white text-slate-700 border-rose-200 hover:bg-rose-50'
                }`}
              >
                <span>No podré asistir</span>
              </button>
            </div>
          </div>

          {/* Botón directo para WhatsApp */}
          <button
            id="btn-confirm-whatsapp"
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs shadow-md shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirmar por WhatsApp</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </motion.div>
    </section>
  );
};
