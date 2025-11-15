import { useMemo, useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { Play, Pause, SkipBack, SkipForward, Music4, Headphones, Sparkles } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm hover:shadow-sm transition-shadow">
      <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white grid place-items-center mb-3">
        <Icon size={18} />
      </div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-600 mt-1">{desc}</p>
    </div>
  )
}

function PlaylistCard({ title, by, color = 'from-neutral-100 to-neutral-50' }) {
  return (
    <div className="group p-4 rounded-xl border border-neutral-200 bg-white/70 hover:bg-white transition-colors">
      <div className={`h-28 rounded-lg bg-gradient-to-br ${color} mb-3`} />
      <h4 className="font-medium text-neutral-900 group-hover:underline underline-offset-4">{title}</h4>
      <p className="text-xs text-neutral-500 mt-0.5">by {by}</p>
    </div>
  )
}

function Player() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1))
    }, 100)
    return () => clearInterval(id)
  }, [playing])

  return (
    <div id="player" className="w-full p-4 rounded-2xl border border-neutral-200 bg-white/80">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-neutral-900" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 truncate">Midnight Vibrations</p>
          <p className="text-xs text-neutral-500">VibeMusic Originals</p>
          <div className="mt-2 h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full bg-neutral-900 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200"><SkipBack size={16} /></button>
          <button onClick={() => setPlaying((s) => !s)} className="h-10 w-10 grid place-items-center rounded-full bg-neutral-900 text-white">
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200"><SkipForward size={16} /></button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const gradients = useMemo(
    () => [
      'from-indigo-100 to-blue-50',
      'from-rose-100 to-orange-50',
      'from-emerald-100 to-teal-50',
      'from-violet-100 to-fuchsia-50',
    ],
    []
  )

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center">
              <Music4 size={18} />
            </div>
            <span className="font-semibold tracking-tight">VibeMusic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-neutral-600 hover:text-neutral-900">Fitur</a>
            <a href="#playlists" className="text-neutral-600 hover:text-neutral-900">Playlist</a>
            <a href="#player" className="text-neutral-600 hover:text-neutral-900">Pemutar</a>
          </nav>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-neutral-200 hover:border-neutral-300">
            <Sparkles size={16} />
            Jelajahi
          </button>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 text-xs text-neutral-600 mb-4">
              <Headphones size={14} />
              Minimal, modern, dan responsif
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Musik untuk fokus dan aliran kerja Anda
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">
              Nikmati pengalaman mendengarkan yang bersih dan elegan. Sentuhan interaktif dengan karakter 3D berheadphone membuatnya semakin hidup.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#player" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:opacity-90">Mulai Putar</a>
              <a href="#playlists" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-neutral-200 text-sm font-medium hover:border-neutral-300">Lihat Playlist</a>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-200 bg-white">
              <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft gradient shine overlay (doesn't block interactions) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={Headphones} title="Desain Minimalis" desc="Antarmuka bersih dengan fokus pada musik tanpa distraksi." />
            <Feature icon={Music4} title="Koleksi Kurasi" desc="Playlist modern untuk fokus, relaksasi, dan eksplorasi genre." />
            <Feature icon={Sparkles} title="3D Interaktif" desc="Objek 3D berheadphone yang responsif dan interaktif." />
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section id="playlists" className="py-6 md:py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold">Playlist untuk Kamu</h2>
              <p className="text-sm text-neutral-600">Campuran santai, fokus, dan energi.</p>
            </div>
            <a href="#" className="hidden md:inline-flex text-sm text-neutral-600 hover:text-neutral-900">Lihat semua</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <PlaylistCard title="Lo-Fi Study" by="VibeMusic" color={`from-amber-100 to-rose-50`} />
            <PlaylistCard title="Deep Focus" by="Studio" color={`from-indigo-100 to-cyan-50`} />
            <PlaylistCard title="Evening Chill" by="Kuro" color={`from-emerald-100 to-teal-50`} />
            <PlaylistCard title="Synthwave Drive" by="Nova" color={`from-fuchsia-100 to-violet-50`} />
          </div>
        </div>
      </section>

      {/* Player */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Player />
          <p className="text-center text-xs text-neutral-500 mt-3">Demo pemutar untuk kebutuhan UI. Tidak memutar audio nyata.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} VibeMusic — dibuat dengan cinta.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-neutral-900">Fitur</a>
            <a href="#playlists" className="hover:text-neutral-900">Playlist</a>
            <a href="#player" className="hover:text-neutral-900">Pemutar</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
