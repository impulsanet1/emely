import React from 'react';

interface BowProps {
  className?: string;
  size?: number;
  color?: 'pink' | 'gold' | 'white';
}

/**
 * Moño estilizado inspirado en la estética tierna de Hello Kitty
 * 100% SVG Vectorial de alta definición, sin dependencias externas.
 */
export const HelloKittyBow: React.FC<BowProps> = ({
  className = '',
  size = 48,
  color = 'pink',
}) => {
  const isGold = color === 'gold';
  const isWhite = color === 'white';

  const leftFill = isGold
    ? 'url(#goldBowGrad)'
    : isWhite
    ? '#ffffff'
    : 'url(#pinkBowGrad)';
  const rightFill = isGold
    ? 'url(#goldBowGrad)'
    : isWhite
    ? '#ffffff'
    : 'url(#pinkBowGrad)';
  const knotFill = isGold ? '#f59e0b' : isWhite ? '#fce7f3' : '#db2777';
  const strokeColor = isGold ? '#d97706' : isWhite ? '#fbcfe8' : '#f43f5e';

  return (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-sm ${className}`}
    >
      <defs>
        <linearGradient id="pinkBowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
        <linearGradient id="pinkBowHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="goldBowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Ala Izquierda del Moño */}
      <path
        d="M50 36 C38 20, 10 12, 10 32 C10 48, 38 46, 50 36 Z"
        fill={leftFill}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Pliegue/Brillo ala izquierda */}
      <ellipse
        cx="28"
        cy="31"
        rx="10"
        ry="6"
        fill="url(#pinkBowHighlight)"
        transform="rotate(-15 28 31)"
      />

      {/* Ala Derecha del Moño */}
      <path
        d="M50 36 C62 20, 90 12, 90 32 C90 48, 62 46, 50 36 Z"
        fill={rightFill}
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Pliegue/Brillo ala derecha */}
      <ellipse
        cx="72"
        cy="31"
        rx="10"
        ry="6"
        fill="url(#pinkBowHighlight)"
        transform="rotate(15 72 31)"
      />

      {/* Nudo Central con brillo */}
      <circle
        cx="50"
        cy="36"
        r="12"
        fill={knotFill}
        stroke={strokeColor}
        strokeWidth="2.5"
      />
      <circle cx="47" cy="33" r="3.5" fill="#ffffff" opacity="0.8" />
    </svg>
  );
};

/**
 * Silueta tierna y elegante inspirada en Hello Kitty
 * Con estética suave y detalles en dorado y rosa pastel.
 */
export const KittySilhouette: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <defs>
          <linearGradient id="kittyFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="90%" stopColor="#fff1f2" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
          <linearGradient id="goldAura" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Halo dorado sutil */}
        <circle cx="60" cy="62" r="54" fill="url(#goldAura)" />

        {/* Oreja Izquierda */}
        <path
          d="M26 44 C24 22, 40 18, 48 30"
          fill="url(#kittyFaceGrad)"
          stroke="#f472b6"
          strokeWidth="2.5"
        />

        {/* Oreja Derecha */}
        <path
          d="M72 30 C80 18, 96 22, 94 44"
          fill="url(#kittyFaceGrad)"
          stroke="#f472b6"
          strokeWidth="2.5"
        />

        {/* Rostro ovalado kawaii */}
        <ellipse
          cx="60"
          cy="66"
          rx="44"
          ry="36"
          fill="url(#kittyFaceGrad)"
          stroke="#f472b6"
          strokeWidth="2.5"
        />

        {/* Ojos tiernos en tono café chocolate suave */}
        <ellipse cx="44" cy="65" rx="3.5" ry="5.5" fill="#4a2828" />
        <ellipse cx="76" cy="65" rx="3.5" ry="5.5" fill="#4a2828" />

        {/* Destellos en los ojos */}
        <circle cx="43" cy="63" r="1.2" fill="#ffffff" />
        <circle cx="75" cy="63" r="1.2" fill="#ffffff" />

        {/* Nariz dorada suave */}
        <ellipse cx="60" cy="73" rx="3.2" ry="2.2" fill="#f59e0b" />

        {/* Bigotes tiernos (3 a cada lado) */}
        {/* Izquierda */}
        <path d="M22 64 L34 65" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 71 L34 71" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 78 L34 76" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />

        {/* Derecha */}
        <path d="M86 65 L98 64" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M86 71 L100 71" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M86 76 L98 78" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />

        {/* Mejillas sonrosadas (blush) */}
        <ellipse cx="35" cy="73" rx="5" ry="3" fill="#fda4af" opacity="0.6" />
        <ellipse cx="85" cy="73" rx="5" ry="3" fill="#fda4af" opacity="0.6" />

        {/* Moño icónico en la oreja derecha */}
        <g transform="translate(68, 14) scale(0.48)">
          <path
            d="M50 36 C38 20, 10 12, 10 32 C10 48, 38 46, 50 36 Z"
            fill="#f43f5e"
            stroke="#be123c"
            strokeWidth="3"
          />
          <path
            d="M50 36 C62 20, 90 12, 90 32 C90 48, 62 46, 50 36 Z"
            fill="#f43f5e"
            stroke="#be123c"
            strokeWidth="3"
          />
          <circle cx="50" cy="36" r="12" fill="#be123c" stroke="#9f1239" strokeWidth="2.5" />
          <circle cx="47" cy="33" r="3.5" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Destello dorado brillante tipo K-Drama
 */
export const GoldenSparkle: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <path
        d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z"
        fill="url(#sparkleGoldGrad)"
      />
      <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
      <defs>
        <linearGradient id="sparkleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/**
 * Esquinas florales ornamentales para marcos de K-drama
 */
export const FloralCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = '', position = 'top-left' }) => {
  const transforms = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  };

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-70 ${className}`}
      style={{ transform: transforms[position] }}
    >
      <path
        d="M3 41 C3 18, 18 3, 41 3"
        stroke="#f472b6"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <circle cx="8" cy="36" r="3" fill="#fda4af" />
      <circle cx="36" cy="8" r="3" fill="#fda4af" />
      <circle cx="22" cy="14" r="2" fill="#f59e0b" />
      <circle cx="14" cy="22" r="2" fill="#f59e0b" />
      <path
        d="M3 41 L10 34 M41 3 L34 10"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    </svg>
  );
};
