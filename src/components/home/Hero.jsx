import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-shell grid items-center gap-12 md:grid-cols-2">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
          <p className="mb-4 font-semibold text-cyan-400">BUILD • SCALE • INNOVATE</p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">Digital solutions engineered for growth.</h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">
            Astronova Solutions builds modern websites, applications and scalable software experiences for ambitious businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">
              Start a Project <ArrowRight size={18}/>
            </Link>
            <Link to="/portfolio" className="rounded-xl border border-white/15 px-5 py-3 font-semibold">View Our Work</Link>
          </div>
        </motion.div>
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-8">
          <div className="aspect-square rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm text-cyan-400">ASTRONOVA SYSTEM</p>
            <div className="mt-8 grid gap-4">
              {['Web Development','Enterprise Applications','Cloud & API Solutions','UI/UX Engineering'].map(x =>
                <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-4">{x}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
