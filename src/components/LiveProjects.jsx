import { useState, useEffect, useRef } from 'react';
import { Layers, Clapperboard, CloudSunRain, ExternalLink, ArrowUpRight, RefreshCw } from 'lucide-react';
import HoverCard from './HoverCard';

// Inline GitHub SVG Icon Component (Zero-dependency)
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Initial Featured Deployments
const INITIAL_PROJECTS = [
  {
    id: 'movie-explorer',
    name: 'Movie Explorer Web App',
    description: 'Dynamic multimedia platform featuring real-time API integrations, rich media metadata fetching, and dark-mode UI.',
    link: 'https://movie-explorer-rho-five.vercel.app/',
    tags: ['REST APIs', 'Modern JS', 'Responsive UI', 'Vercel Edge'],
    icon: 'movie',
    isLive: true
  },
  {
    id: 'weather-app',
    name: 'Real-Time Weather App',
    description: 'Meteorological tracking application utilizing live weather endpoints, dynamic metric rendering, and responsive charts.',
    link: 'https://weather-app-xi-ashen-26.vercel.app/',
    tags: ['Weather API', 'Async/Await', 'Tailwind CSS', 'Cloud Hosted'],
    icon: 'weather',
    isLive: true
  }
];

export default function LiveProjects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollTrackRef = useRef(null);

  // Auto-fetch latest repositories from GitHub API
  const fetchDeployments = async ({ updateLoading = true } = {}) => {
    if (updateLoading) setLoading(true);
    try {
      const res = await fetch('https://api.github.com/users/Coder-naj/repos?sort=updated&per_page=6');
      if (res.ok) {
        const data = await res.json();
        const apiProjects = data
          .filter(repo => repo.name !== 'movie-explorer' && repo.name !== 'weather-app')
          .map(repo => ({
            id: repo.id,
            name: repo.name.replace(/-/g, ' ').toUpperCase(),
            description: repo.description || 'Public repository with automated deployment pipeline.',
            link: repo.homepage || repo.html_url,
            tags: [repo.language || 'JavaScript', 'Git CI/CD', 'Vercel'],
            icon: 'github',
            isLive: !!repo.homepage
          }));

        setProjects([...INITIAL_PROJECTS, ...apiProjects]);
      }
    } catch (err) {
      console.warn("Using default project list:", err);
    } finally {
      if (updateLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const syncLatestProjects = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Coder-naj/repos?sort=updated&per_page=6');
        if (!isMounted || !res.ok) return;

        const data = await res.json();
        const apiProjects = data
          .filter(repo => repo.name !== 'movie-explorer' && repo.name !== 'weather-app')
          .map(repo => ({
            id: repo.id,
            name: repo.name.replace(/-/g, ' ').toUpperCase(),
            description: repo.description || 'Public repository with automated deployment pipeline.',
            link: repo.homepage || repo.html_url,
            tags: [repo.language || 'JavaScript', 'Git CI/CD', 'Vercel'],
            icon: 'github',
            isLive: !!repo.homepage
          }));

        setProjects([...INITIAL_PROJECTS, ...apiProjects]);
      } catch (err) {
        console.warn('Using default project list:', err);
      }
    };

    syncLatestProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const getIcon = (type) => {
    if (type === 'movie') return <Clapperboard className="w-4 h-4 text-purple-400" />;
    if (type === 'weather') return <CloudSunRain className="w-4 h-4 text-cyan-400" />;
    return <GithubIcon className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section className="glass-hud rounded-2xl p-6 gsap-card">
      <div className="flex items-center justify-between mb-4 border-b border-cyan-500/20 pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-orbitron text-lg font-bold tracking-wide text-purple-400">
              LIVE FEATURED DEPLOYMENTS
            </h2>
            <p className="text-[11px] text-slate-400 font-mono">Auto-syncs with latest live builds</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchDeployments}
            className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white transition flex items-center gap-1 text-xs font-mono"
            title="Check for new deployments"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            <span className="hidden sm:inline">Sync</span>
          </button>
          <span className="font-mono text-xs text-purple-400 border border-purple-800/50 bg-purple-950/40 px-2 py-0.5 rounded">
            LIVE FEED
          </span>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Scroll Ticker */}
      <div
        className="overflow-hidden relative py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollTrackRef}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
          className="flex gap-4 w-max animate-scroll hover:cursor-grab active:cursor-grabbing"
        >
          {/* Render double array for seamless infinite looping */}
          {[...projects, ...projects].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="w-77.5 md:w-87.5 shrink-0">
              <HoverCard
                glowColor={item.icon === 'weather' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}
                className="h-full flex flex-col justify-between bg-slate-900/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-sm flex items-center gap-2 truncate">
                      {getIcon(item.icon)}
                      <span className="truncate">{item.name}</span>
                    </h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded-md bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 rounded bg-slate-800/90 text-[10px] font-mono text-cyan-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center justify-between pt-2 border-t border-slate-800"
                >
                  <span className="truncate">{item.link.replace(/^https?:\/\//, '')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1" />
                </a>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}