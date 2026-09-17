import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Heart, Send, User, Users } from 'lucide-react';
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
  const [companions, setCompanions] = useState('1');
  const [specialMessage, setSpecialMessage] = useState('');

  const generateWhatsAppUrl = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const cleanGuest = guestName.trim() || 'Un invitado especial';

    let text = `¡Hola ${celebrantName}! ✨\n\n`;

    if (attendance === 'yes') {
      text += `Soy *${cleanGuest}* y confirmo con muchísima alegría mi asistencia a tus XV Años el 1 de Noviembre a las 7:00 PM en 3529+R76 Suárez, Tolima. 💖🎀\n`;
      text += `Asistiré con *${companions} persona(s)*.\n`;
    } else {
      text += `Soy *${cleanGuest}* y con mucho cariño quería felicitarte por tus XV Años. Lamentablemente no podré asistir, pero te deseo una noche inolvidable. 🌸\n`;
    }

    if (specialMessage.trim()) {
      text += `\nMensaje para ti: "${specialMessage.trim()}" 💌\n`;
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
    <section id="rsvp-section" className="py-6 px-3.5 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 border border-rose-200/90 rounded-3xl p-5 shadow-xl shadow-rose-200/40"
      >
        {/* Encabezado */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-rose-50 border border-rose-200 mb-2">
            <HelloKittyBow size={28} color="pink" />
          </div>

          <h2 className="font-serif-elegant text-2xl font-bold text-slate-800">
            Confirmar Asistencia
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
            Por favor confirma tu lugar en esta celebración tan especial.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Nombre */}
          <div>
            <label
              htmlFor="guest-name-input"
              className="block text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1"
            >
              Tu Nombre y Apellido *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-rose-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="guest-name-input"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Ej. Carlos Mendoza"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-rose-50/40 border border-rose-200 focus:border-rose-400 focus:bg-white focus:outline-none text-slate-800 text-xs transition-all"
              />
            </div>
          </div>

          {/* Asistencia */}
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1">
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

          {/* Cantidad si asiste */}
          {attendance === 'yes' && (
            <div>
              <label
                htmlFor="companions-select"
                className="block text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1"
              >
                Número de personas
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-rose-400">
                  <Users className="w-4 h-4" />
                </div>
                <select
                  id="companions-select"
                  value={companions}
                  onChange={(e) => setCompanions(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-rose-50/40 border border-rose-200 focus:border-rose-400 focus:bg-white focus:outline-none text-slate-800 text-xs transition-all"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5+">5 o más personas</option>
                </select>
              </div>
            </div>
          )}

          {/* Mensaje opcional */}
          <div>
            <label
              htmlFor="special-message-input"
              className="block text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1"
            >
              Mensaje para Emely (Opcional)
            </label>
            <textarea
              id="special-message-input"
              rows={2}
              value={specialMessage}
              onChange={(e) => setSpecialMessage(e.target.value)}
              placeholder="Escribe tus buenos deseos..."
              className="w-full px-3 py-2 rounded-xl bg-rose-50/40 border border-rose-200 focus:border-rose-400 focus:bg-white focus:outline-none text-slate-800 text-xs transition-all"
            />
          </div>

          {/* Botón WhatsApp */}
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
