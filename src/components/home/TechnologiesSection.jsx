import SectionTitle from '../common/SectionTitle.jsx'
import { technologies } from '../../data/technologies.js'

export default function TechnologiesSection() {
  return (
    <section className="section-space bg-white/[.02]">
      <div className="container-shell">
        <SectionTitle eyebrow="Technology" title="Our core stack" />
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map(t => <span key={t} className="rounded-full border border-white/10 px-4 py-2 text-slate-300">{t}</span>)}
        </div>
      </div>
    </section>
  )
}
