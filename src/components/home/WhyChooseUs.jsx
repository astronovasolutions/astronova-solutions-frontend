import SectionTitle from '../common/SectionTitle.jsx'

export default function WhyChooseUs() {
  const points = ['Modern technology stack','Scalable architecture','Responsive UX','Transparent delivery']
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle eyebrow="Why Astronova" title="Technology with business purpose" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p,i)=><div key={p} className="rounded-2xl border border-white/10 p-6"><span className="text-cyan-400">0{i+1}</span><h3 className="mt-4 font-bold">{p}</h3></div>)}
        </div>
      </div>
    </section>
  )
}
