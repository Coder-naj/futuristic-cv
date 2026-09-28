export default function BackgroundGlow() {
  return (
    <>
      <div className="ambient-glow fixed -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="ambient-glow fixed top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="ambient-glow fixed -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
    </>
  );
}