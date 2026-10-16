import React from 'react';
import { Code2, BarChart3, Sparkles, Globe, Palette } from 'lucide-react';

export default function TechArsenal() {
  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-2">
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
          <Code2 className="w-5 h-5" />
        </div>
        <h2 className="font-orbitron text-lg font-bold tracking-wide text-emerald-400">TECH, DATA & BI ARSENAL</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {/* Power BI & Business Intelligence */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50">
          <div className="flex items-center gap-2 font-bold text-amber-300 font-orbitron mb-2">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            POWER BI & BI
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Power BI Dashboards</li>
            <li>• DAX Calculations</li>
            <li>• Power Query ETL</li>
            <li>• KPI & Metric Reports</li>
          </ul>
        </div>

        {/* Python & Machine Learning */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50">
          <div className="flex items-center gap-2 font-bold text-emerald-300 font-orbitron mb-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            PYTHON & ML
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Data Analytics (Pandas/NumPy)</li>
            <li>• Machine Learning Pipelines</li>
            <li>• Data Visualization</li>
            <li>• Predictive Modeling</li>
          </ul>
        </div>

        {/* Frontend Web */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50">
          <div className="flex items-center gap-2 font-bold text-purple-300 font-orbitron mb-2">
            <Globe className="w-4 h-4 text-purple-400" />
            WEB & CLOUD
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• React / Vite / ES6+ JS</li>
            <li>• Tailwind CSS & GSAP</li>
            <li>• REST API & Async Fetch</li>
            <li>• Vercel Edge Deployment</li>
          </ul>
        </div>

        {/* UI & Creative Design */}
        <div className="interactive-card p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50">
          <div className="flex items-center gap-2 font-bold text-blue-300 font-orbitron mb-2">
            <Palette className="w-4 h-4 text-blue-400" />
            DESIGN & UI/UX
          </div>
          <ul className="space-y-1.5 text-slate-300 font-mono">
            <li>• Adobe Photoshop & AI</li>
            <li>• Vector Graphics & Icons</li>
            <li>• Motion & Animation</li>
            <li>• Responsive UI Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
