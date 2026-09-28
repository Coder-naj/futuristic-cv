import { Bot, Mail, Phone, Triangle } from 'lucide-react';
import TextReveal from './TextReveal';

export default function Hero() {
  return (
    <section className="glass-hud rounded-2xl p-6 md:p-8 relative overflow-hidden gsap-fade">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider">
            <Bot className="w-4 h-4 animate-pulse" />
            <span>AI-Assisted Web & App Developer • Python Analyst</span>
          </div>
          
          {/* Main Name Heading */}
          {/* <h1 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight">
            <TextReveal 
              text="Md. Zillur Rahman" 
              className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-cyan-400 font-orbitron"
              speed={0.04} 
              delay={0.1} 
            />
          </h1> */}
          <h1 className="text-3xl md:text-5xl font-black font-orbitron tracking-wider uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
           <TextReveal
            text="Md. Zillur Rahman" 
            className="font-orbitron"
            charClassName="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200"
            speed={0.04} 
            delay={0.1} 
           />
          </h1>
          {/* Subtitle */}
          <div className="text-slate-400 text-sm md:text-base flex flex-wrap items-center gap-2 font-mono">
            <TextReveal 
              text="Frontend / Full-Stack • Data Analysis with Python • Vercel Cloud" 
              className="text-slate-300"
              speed={0.015} 
              delay={0.5} 
              tracking={false} 
            />
          </div>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 font-mono text-xs">
          <a
            href="mailto:zillu.naj@gmail.com"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/80 hover:scale-[1.02] transition duration-200 text-slate-300 hover:text-white"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>zillu.naj@gmail.com</span>
          </a>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>+880 1650-108067</span>
          </div>
          <a
            href="https://github.com/Coder-naj"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 hover:bg-slate-800/80 hover:scale-[1.02] transition duration-200 text-slate-300 hover:text-white"
          >
            <svg className="w-4 h-4 fill-current text-purple-400 shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/Coder-naj</span>
          </a>
          <a
            href="https://vercel.com/three25"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/80 hover:scale-[1.02] transition duration-200 text-slate-300 hover:text-white"
          >
            <Triangle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>vercel.com/three25</span>
          </a>
        </div>
      </div>
    </section>
  );
}