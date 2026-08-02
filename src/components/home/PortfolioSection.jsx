import SectionTitle from '../common/SectionTitle.jsx'
import { projects } from '../../data/projects.js'
export default function PortfolioSection(){
 return <section className="section-space bg-white/[.02]"><div className="container-shell"><SectionTitle eyebrow="Portfolio" title="Selected work" />
 <div className="grid gap-5 md:grid-cols-3">{projects.map(p=><article key={p.id} className="rounded-2xl border border-white/10 p-6"><p className="text-sm text-cyan-400">{p.category}</p><h3 className="mt-2 text-xl font-bold">{p.title}</h3><p className="mt-3 text-slate-400">{p.description}</p></article>)}</div></div></section>
}
