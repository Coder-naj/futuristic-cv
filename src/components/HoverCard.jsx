import { useRef } from 'react';

export default function HoverCard({ children, className = "", glowColor = "rgba(6, 182, 212, 0.25)" }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.opacity = '1';
    glowRef.current.style.transform = `translate(${x - 120}px, ${y - 120}px)`;

    // Subtle 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;
    glowRef.current.style.opacity = '0';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.18s ease-out, border-color 0.2s ease' }}
      className={`relative overflow-hidden glass-hud rounded-xl p-5 border border-cyan-500/20 hover:border-cyan-400/50 ${className}`}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        ref={glowRef}
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          width: '240px',
          height: '240px',
          opacity: 0,
          transition: 'opacity 0.25s ease',
        }}
        className="pointer-events-none absolute top-0 left-0 rounded-full blur-xl z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}