import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { HelloKittyBow } from './HelloKittyBow';

interface NavigationHeaderProps {
  celebrantName: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  celebrantName,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Mis XV Años - ${celebrantName}`,
          text: `¡Estás invitado a mis XV años en Suárez, Tolima!`,
          url: window.location.href,
        });
      } catch {
        // Cancelado por el usuario
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-2 z-40 max-w-md mx-auto px-3 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-1.5 px-3.5 py-2 rounded-full bg-white/95 border border-rose-200/90 shadow-md shadow-rose-200/20 backdrop-blur-md">
        {/* Nombre & Moño */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          <HelloKittyBow size={20} color="pink" />
          <span className="font-serif-elegant font-bold text-slate-800 text-xs tracking-wide">
            {celebrantName}
          </span>
          <span className="font-script text-rose-500 text-sm">
            Mis XV
          </span>
        </div>

        {/* Acceso rápido a secciones clave */}
        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600">
          <button
            onClick={() => scrollToSection('ceremony-reception-section')}
            className="px-2 py-1 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
          >
            Recepción
          </button>
          <button
            onClick={() => scrollToSection('itinerary-section')}
            className="px-2 py-1 rounded-full hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
          >
            Horario
          </button>
          <button
            onClick={() => scrollToSection('rsvp-section')}
            className="px-2.5 py-1 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors cursor-pointer"
          >
            Confirmar
          </button>
        </div>

        {/* Botón Compartir */}
        <button
          id="nav-share-btn"
          onClick={handleShare}
          title="Compartir enlace"
          className="p-1.5 rounded-full bg-rose-50 border border-rose-200 text-slate-600 hover:bg-rose-100 transition-colors cursor-pointer"
        >
          {copiedLink ? (
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <Share2 className="w-3.5 h-3.5 text-rose-500" />
          )}
        </button>
      </nav>
    </header>
  );
};
