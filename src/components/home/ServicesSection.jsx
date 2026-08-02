import SectionTitle from '../common/SectionTitle.jsx'
import { services } from '../../data/services.js'

export default function ServicesSection() {
  return (
    <section className="section-space bg-white/[.02]">
      <div className="container-shell">
        <SectionTitle eyebrow="Services" title="What we build" description="Flexible digital engineering services designed around your business goals." />
        <div className="grid gap-5 md:grid-cols-3">
          {services.slice(0,6).map((service) => (
            <article key={service.id} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
