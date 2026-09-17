import React, { useEffect, useRef } from 'react';

interface FloatingPetalsCanvasProps {
  intensity?: 'gentle' | 'medium' | 'lush';
  className?: string;
}

export const FloatingPetalsCanvas: React.FC<FloatingPetalsCanvasProps> = ({
  intensity = 'medium',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const count = intensity === 'gentle' ? 22 : intensity === 'medium' ? 36 : 52;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      type: 'petal' | 'sparkle' | 'heart';
      opacity: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = [];

    const petalColors = [
      'rgba(251, 113, 133, ', // rose-400
      'rgba(244, 114, 182, ', // pink-400
      'rgba(253, 164, 175, ', // rose-300
      'rgba(252, 231, 243, ', // pink-100
      'rgba(245, 158, 11, ',  // amber-500 gold
    ];

    for (let i = 0; i < count; i++) {
      const isSparkle = Math.random() < 0.28;
      const isHeart = !isSparkle && Math.random() < 0.15;
      const colorBase = isSparkle
        ? 'rgba(253, 224, 71, '
        : petalColors[Math.floor(Math.random() * petalColors.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isSparkle ? Math.random() * 3 + 2 : Math.random() * 10 + 8,
        speedY: Math.random() * 0.7 + 0.35,
        speedX: Math.sin(Math.random() * Math.PI * 2) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colorBase,
        type: isSparkle ? 'sparkle' : isHeart ? 'heart' : 'petal',
        opacity: Math.random() * 0.5 + 0.3,
        opacitySpeed: (Math.random() - 0.5) * 0.008,
      });
    }

    const drawPetal = (
      pCtx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      alpha: number
    ) => {
      pCtx.save();
      pCtx.translate(x, y);
      pCtx.rotate(rot);
      pCtx.beginPath();
      pCtx.moveTo(0, -size / 2);
      pCtx.bezierCurveTo(size / 2, -size / 2, size / 1.5, size / 2, 0, size);
      pCtx.bezierCurveTo(-size / 1.5, size / 2, -size / 2, -size / 2, 0, -size / 2);
      pCtx.fillStyle = `${color}${alpha})`;
      pCtx.fill();
      pCtx.restore();
    };

    const drawSparkle = (
      pCtx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      alpha: number
    ) => {
      pCtx.save();
      pCtx.translate(x, y);
      pCtx.rotate(rot);
      pCtx.beginPath();
      pCtx.arc(0, 0, size, 0, Math.PI * 2);
      pCtx.fillStyle = `${color}${alpha})`;
      pCtx.shadowBlur = 8;
      pCtx.shadowColor = '#fbbf24';
      pCtx.fill();
      pCtx.restore();
    };

    const drawHeart = (
      pCtx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      alpha: number
    ) => {
      pCtx.save();
      pCtx.translate(x, y);
      pCtx.rotate(rot);
      const s = size * 0.6;
      pCtx.beginPath();
      pCtx.moveTo(0, s * 0.3);
      pCtx.bezierCurveTo(-s * 0.6, -s * 0.4, -s, s * 0.3, 0, s);
      pCtx.bezierCurveTo(s, s * 0.3, s * 0.6, -s * 0.4, 0, s * 0.3);
      pCtx.fillStyle = `${color}${alpha * 0.85})`;
      pCtx.fill();
      pCtx.restore();
    };

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + i) * 0.4;
        p.rotation += p.rotationSpeed;
        p.opacity += p.opacitySpeed;

        if (p.opacity > 0.85 || p.opacity < 0.2) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        // Loop around edges
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        if (p.type === 'sparkle') {
          drawSparkle(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
        } else if (p.type === 'heart') {
          drawHeart(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
        } else {
          drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
