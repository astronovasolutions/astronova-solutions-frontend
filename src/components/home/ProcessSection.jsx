import SectionTitle from '../common/SectionTitle.jsx'
const steps=['Discover','Design','Develop','Test','Launch','Improve']
export default function ProcessSection(){
 return <section className="section-space"><div className="container-shell"><SectionTitle eyebrow="Process" title="From idea to launch" />
 <div className="grid gap-4 md:grid-cols-6">{steps.map((s,i)=><div key={s} className="rounded-xl border border-white/10 p-4 text-center"><b className="text-cyan-400">{i+1}</b><p className="mt-2">{s}</p></div>)}</div></div></section>
}
