import SectionTitle from '../common/SectionTitle.jsx'
import { faqs } from '../../data/faqs.js'
export default function FAQSection(){return <section className="section-space bg-white/[.02]"><div className="container-shell max-w-3xl"><SectionTitle eyebrow="FAQ" title="Common questions" />{faqs.slice(0,4).map(f=><details key={f.q} className="mb-3 rounded-xl border border-white/10 p-5"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 text-slate-400">{f.a}</p></details>)}</div></section>}
