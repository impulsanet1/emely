import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, HelpCircle } from 'lucide-react';
import { GoldenSparkle } from './HelloKittyBow';

interface CountdownSectionProps {
  eventDate: string;
  eventIsoDate?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({
  eventDate,
  eventIsoDate,
}) => {
  // Resuelve fecha objetivo (ISO directo o fallback inteligente)
  const resolvedTargetTime = React.useMemo(() => {
    if (eventIsoDate && !isNaN(Date.parse(eventIsoDate))) {
      return new Date(eventIsoDate).getTime();
    }
    if (eventDate && eventDate !== 'FECHA POR CONFIRMAR') {
      if (!isNaN(Date.parse(eventDate))) {
        return new Date(eventDate).getTime();
      }
      // Si el texto incluye 1 de Noviembre
      if (eventDate.toLowerCase().includes('noviembre')) {
        return new Date('2026-11-01T19:00:00').getTime();
      }
    }
    return null;
  }, [eventDate, eventIsoDate]);

  const isDateConfirmed = resolvedTargetTime !== null;

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    if (!resolvedTargetTime) return;

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = resolvedTargetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [resolvedTargetTime]);

  return (
    <section id="countdown-section" className="py-2.5 px-3 max-w-md mx-auto text-center">
      <div className="inline-flex items-center gap-1.5 mb-1">
        <GoldenSparkle size={12} />
        <span className="text-[9px] uppercase tracking-[0.2em] text-rose-500 font-bold">
          Faltan Muy Pocos Días
        </span>
        <GoldenSparkle size={12} />
      </div>

      <h2 className="font-serif-elegant text-xl font-bold text-slate-800 mb-2">
        Cuenta Regresiva
      </h2>

      {isDateConfirmed ? (
        <div className="bg-white/95 border border-rose-200/90 rounded-2xl p-3 shadow-md shadow-rose-100/50">
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-rose-50/70 border border-rose-200"
              >
                <span className="font-serif-elegant text-lg font-bold text-slate-800 tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[8px] text-rose-500 uppercase tracking-wider font-semibold mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white/95 border border-rose-200/90 rounded-2xl p-3.5 shadow-md shadow-rose-100/50 text-center">
          <div className="inline-flex p-1.5 rounded-xl bg-rose-50 text-rose-500 mb-1.5">
            <HelpCircle className="w-4 h-4 animate-pulse" />
          </div>

          <h3 className="font-serif-elegant text-sm font-bold text-slate-800 mb-0.5">
            Fecha pendiente de confirmación
          </h3>

          <p className="text-[11px] text-slate-600 leading-relaxed font-light">
            El contador se activará automáticamente al confirmar la fecha oficial en Suárez, Tolima.
          </p>
        </div>
      )}
    </section>
  );
};
