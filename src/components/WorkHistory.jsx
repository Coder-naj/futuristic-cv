import { Briefcase } from 'lucide-react';

export default function WorkHistory() {
  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/20 pb-2">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
          <Briefcase className="w-5 h-5" />
        </div>
        <h2 className="font-orbitron text-lg font-bold tracking-wide text-cyan-400">WORK HISTORY & REPUTATION</h2>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-linear-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
        
        {/* Role 1 */}
        <div className="interactive-card relative pl-8 md:pl-10 p-3 rounded-lg bg-slate-900/30 border border-transparent hover:border-cyan-500/30">
          <span className="absolute left-1.5 md:left-2.5 top-3 w-3.5 h-3.5 rounded-full bg-cyan-400 -translate-x-1/2 ring-4 ring-cyan-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="font-bold text-slate-100 text-base">Freelance Web Developer & AI Workflow Integrator</h3>
            <span className="font-mono text-xs text-cyan-300 bg-cyan-950/80 border border-cyan-700/60 px-2 py-0.5 rounded font-bold shadow-glow-cyan">
              JAN 2026 – TILL DATE
            </span>
          </div>
          <ul className="text-slate-400 text-xs mt-2 space-y-1">
            <li>• Building responsive SPAs and deploying directly via Git/Vercel edge pipelines.</li>
            <li>• Integrating Python data analysis pipelines and modern AI-accelerated workflows.</li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="interactive-card relative pl-8 md:pl-10 p-3 rounded-lg bg-slate-900/30 border border-transparent hover:border-purple-500/30">
          <span className="absolute left-1.5 md:left-2.5 top-3 w-3.5 h-3.5 rounded-full bg-purple-400 -translate-x-1/2 ring-4 ring-purple-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="font-bold text-slate-100 text-base">
              Remote Graphic & UI Designer <span className="text-purple-400">@ DIT Institute</span>
            </h3>
            <span className="font-mono text-xs text-purple-300 bg-purple-950/80 border border-purple-800/40 px-2 py-0.5 rounded font-semibold">
              JUNE 2023 – DEC 2024
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1.5">
            Architected digital design systems, user experience elements, high-resolution vector assets, and institutional branding materials.
          </p>
        </div>

        {/* Role 3 */}
        <div className="interactive-card relative pl-8 md:pl-10 p-3 rounded-lg bg-slate-900/30 border border-transparent hover:border-emerald-500/30">
          <span className="absolute left-1.5 md:left-2.5 top-3 w-3.5 h-3.5 rounded-full bg-emerald-400 -translate-x-1/2 ring-4 ring-emerald-950"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="font-bold text-slate-100 text-base">
              SDT Supervisor <span className="text-emerald-400">@ Nestlé Bangladesh PLC (Project)</span>
            </h3>
            <span className="font-mono text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-800/40 px-2 py-0.5 rounded">
              JAN 2017 – JUN 2023
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1.5">
            Managed team pipelines, diagnostic metrics, and workflow efficiency. Recognized with <em>Best Supervisor of the Year (2018, 2020)</em>.
          </p>
        </div>

      </div>
    </section>
  );
}