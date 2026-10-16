import React from 'react';
import { GraduationCap, Award, Check } from 'lucide-react';

export default function AcademicAndCerts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Academic Background */}
      <section className="glass-hud rounded-2xl p-6 gsap-card">
        <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-2">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="font-orbitron text-base font-bold text-blue-400">ACADEMIC BACKGROUND</h2>
        </div>
        <div className="space-y-3 text-xs font-mono">
          <div>
            <div className="text-white font-bold">Master of Pharmacy (M.Pharm)</div>
            <div className="text-slate-400">University of Development Alternative (UODA) • Completed</div>
          </div>
          <div>
            <div className="text-white font-bold">Bachelor of Pharmacy (B.Pharm - 4 Yrs)</div>
            <div className="text-cyan-400">CGPA: 3.74 / 4.00 (2012) • UODA</div>
          </div>
          <div>
            <div className="text-white font-bold">Higher Secondary Certificate (HSC Science)</div>
            <div className="text-emerald-400">GPA: 5.00 / 5.00 (Rajshahi Board - 2006)</div>
          </div>
          <div>
            <div className="text-white font-bold">Secondary School Certificate (SSC Science)</div>
            <div className="text-cyan-400">GPA: 4.63 / 5.00 (Rajshahi Board - 2004)</div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="glass-hud rounded-2xl p-6 gsap-card">
        <div className="flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-2">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="font-orbitron text-base font-bold text-amber-400">VERIFIED CERTIFICATIONS</h2>
        </div>
        <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Power BI (21 Days):</strong> Gobeshona Learning Academy (Issued: 03/10/2026).</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Data Analytics (30 Days):</strong> Gobeshona Learning Academy (Issued: 11/08/2026).</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span><strong>Machine Learning (30 Days):</strong> Gobeshona Learning Academy (Issued: 21/07/2026).</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>A-Grade Registered Pharmacist:</strong> PCB Reg. No: A-4665.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span><strong>Cartoon Animation:</strong> 10 Minute School (Cert ID: 60dda15f584a2).</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
