import { Terminal } from 'lucide-react';

export default function ExecutiveOverview() {
  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="flex items-center gap-3 mb-3 border-b border-cyan-500/20 pb-2">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
          <Terminal className="w-5 h-5" />
        </div>
        <h2 className="font-orbitron text-lg font-bold tracking-wide text-cyan-400">EXECUTIVE OVERVIEW</h2>
      </div>
      <p className="text-slate-300 leading-relaxed text-sm md:text-[14.5px]">
        Agile and results-driven <strong>AI-Assisted Web & App Developer</strong> and <strong>Data Analyst (Python)</strong> specialized in building rapid, high-performance web applications and extracting actionable insights from data. Skilled in leveraging LLMs (Cursor, Copilot, GPT-4o, Claude Code), modern frontend ecosystems (JavaScript, Tailwind CSS, GSAP), and scientific data analysis packages (<strong className="text-emerald-400">Python, Pandas, NumPy, Data Visualization</strong>). Combines Master of Pharmacy analytical training with extensive UI/UX design background to deliver intuitive, data-powered applications.
      </p>
    </section>
  );
}