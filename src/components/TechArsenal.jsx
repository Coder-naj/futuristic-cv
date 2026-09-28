import { Code2, FileCode, Sparkles, Globe, Palette } from 'lucide-react';

export default function TechArsenal() {
  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-2">
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="font-orbitron text-lg font-bold tracking-wide text-emerald-400">TECH & DATA ARSENAL</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {/* Python & Data Analysis */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50">
          <div className="flex items-center gap-2 font-bold text-emerald-300 font-orbitron mb-2">
            <FileCode className="w-4 h-4 text-emerald-400" />
            PYTHON & DATA
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Python Data Analysis</li>
            <li>• Pandas & NumPy</li>
            <li>• Matplotlib & Visuals</li>
            <li>• Data Cleaning & Insights</li>
          </ul>
        </div>

        {/* AI & Acceleration */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50">
          <div className="flex items-center gap-2 font-bold text-cyan-300 font-orbitron mb-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            AI ACCELERATION
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Prompt Engineering</li>
            <li>• Cursor / Copilot / LLMs</li>
            <li>• Rapid Prototyping</li>
            <li>• Code Refactoring</li>
          </ul>
        </div>

        {/* Frontend Web */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50">
          <div className="flex items-center gap-2 font-bold text-purple-300 font-orbitron mb-2">
            <Globe className="w-4 h-4 text-purple-400" />
            FRONTEND & WEB
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• React / Vite / ES6+ JS</li>
            <li>• Tailwind CSS & GSAP</li>
            <li>• REST API & Fetch</li>
            <li>• Vercel Edge Deployment</li>
          </ul>
        </div>

        {/* UI & Design */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50">
          <div className="flex items-center gap-2 font-bold text-blue-300 font-orbitron mb-2">
            <Palette className="w-4 h-4 text-blue-400" />
            DESIGN & UI/UX
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Adobe Photoshop & AI</li>
            <li>• High-Tech UI & Vector</li>
            <li>• Motion Graphics</li>
            <li>• Responsive Layouts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}