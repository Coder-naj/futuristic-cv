import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TextReveal({ 
  text, 
  className = "", 
  charClassName = "", 
  delay = 0, 
  speed = 0.04, 
  tracking = true 
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const letters = containerRef.current.querySelectorAll('.reveal-char');
    
    if (letters.length > 0) {
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 16,
          filter: "blur(6px)",
          letterSpacing: tracking ? "0.2em" : "normal",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          letterSpacing: tracking ? "0.02em" : "normal",
          duration: 0.6,
          stagger: speed,
          ease: "power3.out",
          delay: delay
        }
      );
    }
  }, [text, delay, speed, tracking]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`reveal-char inline-block opacity-0 ${charClassName}`}
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}