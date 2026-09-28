import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BackgroundGlow from './components/BackgroundGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import ExecutiveOverview from './components/ExecutiveOverview';
import LiveProjects from './components/LiveProjects';
import TechArsenal from './components/TechArsenal';
import WorkHistory from './components/WorkHistory';
import AcademicAndCerts from './components/AcademicAndCerts';
import FooterRef from './components/FooterRef';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.context handles clean execution before initial paint
    const ctx = gsap.context(() => {
      // 1. Smooth page wrapper reveal
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });

      // 2. Hero In-view Fade
      const heroFade = mainRef.current?.querySelectorAll(".gsap-fade");
      if (heroFade && heroFade.length > 0) {
        gsap.fromTo(
          heroFade,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      // 3. Ambient Floating Background Orbs
      const orbs = document.querySelectorAll(".ambient-glow");
      if (orbs && orbs.length > 0) {
        gsap.to(orbs, {
          y: 20,
          x: -15,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.7
        });
      }

      // 4. Staggered Entrance for Section Cards
      const cards = mainRef.current?.querySelectorAll(".gsap-card");
      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true
              }
            }
          );
        });
      }

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    // Starts at opacity-0 and smoothly transitions to 1, killing any flash of unstyled content
    <div ref={mainRef} className="relative min-h-screen cyber-grid overflow-x-hidden opacity-0">
      <BackgroundGlow />
      <Header />
      <main className="max-w-5xl mx-auto px-4 pb-16 space-y-6 relative z-20">
        <Hero />
        <ExecutiveOverview />
        <LiveProjects />
        <TechArsenal />
        <WorkHistory />
        <AcademicAndCerts />
        <FooterRef />
      </main>
    </div>
  );
}