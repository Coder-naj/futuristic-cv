import { useState, useEffect, useRef, useCallback } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?~";

export default function MatrixTextReveal({ 
  text, 
  className = "", 
  scrambleSpeed = 30, // ms per tick
  delay = 100, // delay before starting decryption (ms)
  revealSpeed = 3, // iterations per character before locking
  hoverReplay = true // replay cipher on mouse hover
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const startDecryption = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    let iteration = 0;
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);

    // Initial delay before cipher starts
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("");
        });

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          isAnimatingRef.current = false;
        }

        iteration += 1 / revealSpeed;
      }, scrambleSpeed);
    }, delay);
  }, [text, scrambleSpeed, delay, revealSpeed]);

  useEffect(() => {
    startDecryption();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [startDecryption]);

  return (
    <span
      onMouseEnter={() => {
        if (hoverReplay) startDecryption();
      }}
      className={`inline-block cursor-pointer select-none transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] ${className}`}
    >
      {displayText}
    </span>
  );
}