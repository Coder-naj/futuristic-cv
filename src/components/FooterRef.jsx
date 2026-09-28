export default function FooterRef() {
  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400 font-mono">
        <div>
          <span className="text-slate-500 block mb-1 uppercase tracking-wider">Repository Matrix</span>
          <a
            href="https://github.com/Coder-naj"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            https://github.com/Coder-naj
          </a>
          <div className="text-slate-400 mt-0.5">Location: Shalgaria, Pabna – 6670, Bangladesh</div>
        </div>
        <div className="sm:text-right">
          <div className="w-44 border-b border-cyan-500/50 pb-1 mb-1 sm:ml-auto font-sans text-cyan-300 font-bold">
            Md. Zillur Rahman
          </div>
          <span className="text-slate-500">AI & Web Developer Verification</span>
        </div>
      </div>
    </section>
  );
}