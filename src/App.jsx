import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return

    console.log('Email:', email)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-7 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">A</span>
          </div>

          <div className="text-left">
            <h2 className="text-lg font-bold leading-none">
              Astronova
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              SOLUTIONS
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

          <span className="text-sm text-slate-600 dark:text-slate-300">
            Launching Soon
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-16 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
            ✦ Something powerful is coming
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          We build software
          <br />

          <span className="text-blue-600 dark:text-blue-500">
            that moves you forward.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-500 dark:text-slate-400">
          Astronova Solutions builds, scales, and maintains modern software
          solutions designed to help businesses grow, automate, and innovate.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
          />

          <button
            type="submit"
            className="px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            Notify Me
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-400 dark:text-slate-500">
          Be the first to know when we launch.
        </p>
      </section>

      {/* Services */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-5">

          {/* Service 1 */}
          <div className="group p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm text-left hover:border-blue-300 dark:hover:border-blue-500/40 transition">

            <div className="w-11 h-11 mb-5 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
              &lt;/&gt;
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Software Development
            </h3>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Reliable and scalable web applications built around your
              business requirements.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm text-left hover:border-blue-300 dark:hover:border-blue-500/40 transition">

            <div className="w-11 h-11 mb-5 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
              ⚡
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Digital Solutions
            </h3>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Smart digital solutions that automate processes and improve
              business efficiency.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm text-left hover:border-blue-300 dark:hover:border-blue-500/40 transition">

            <div className="w-11 h-11 mb-5 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
              ↻
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Support & Maintenance
            </h3>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Continuous monitoring, improvements, updates, and support to keep
              your software running smoothly.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Astronova Solutions.
          </p>

          <p className="text-sm text-slate-400">
            Build. Scale. Maintain.
          </p>

        </div>
      </footer>

    </main>
  )
}

export default App