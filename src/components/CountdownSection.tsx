import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
  const resolvedTargetTime = React.useMemo(() => {
    if (eventIsoDate && !isNaN(Date.parse(eventIsoDate))) {
      return new Date(eventIsoDate).getTime();
    }
    if (eventDate && eventDate !== 'FECHA POR CONFIRMAR') {
      if (!isNaN(Date.parse(eventDate))) {
        return new Date(eventDate).getTime();
      }
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
    <section id="countdown-section" className="py-6 px-4 max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-1.5 mb-1 text-rose-500">
          <GoldenSparkle size={12} />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-rose-600">
            Faltan muy pocos días
          </span>
          <GoldenSparkle size={12} />
        </div>

        <h2 className="font-serif-elegant text-2xl font-bold text-slate-800 mb-4">
          Cuenta Regresiva
        </h2>

        {isDateConfirmed ? (
          <div className="flex items-center justify-between w-full max-w-xs mx-auto py-2">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds },
            ].map((unit, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center min-w-[56px]">
                  <span className="font-serif-elegant text-3xl font-bold text-rose-600 tabular-nums">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mt-0.5">
                    {unit.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <span className="text-rose-300 font-light text-xl -mt-3 select-none">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="py-2 text-center">
            <p className="text-xs text-slate-600 font-light">
              Fecha en confirmación oficial.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};
