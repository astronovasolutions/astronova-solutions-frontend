import SectionTitle from '../common/SectionTitle.jsx'
import { testimonials } from '../../data/testimonials.js'
export default function TestimonialsSection(){
 return <section className="section-space"><div className="container-shell"><SectionTitle eyebrow="Clients" title="Built on trust" />
 <div className="grid gap-5 md:grid-cols-2">{testimonials.map(t=><blockquote key={t.id} className="rounded-2xl border border-white/10 p-6"><p>“{t.quote}”</p><footer className="mt-4 text-sm text-slate-400">{t.name} — {t.company}</footer></blockquote>)}</div></div></section>
}
