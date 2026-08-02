import { NavLink, Outlet } from 'react-router-dom'

const links = [
  ['Dashboard', '/admin'],
  ['Services', '/admin/services'],
  ['Projects', '/admin/projects'],
  ['Blogs', '/admin/blogs'],
  ['Testimonials', '/admin/testimonials'],
  ['Inquiries', '/admin/inquiries'],
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-r border-white/10 p-6">
        <h1 className="text-xl font-bold">Astronova Admin</h1>
        <nav className="mt-8 grid gap-2">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === '/admin'} className="rounded-lg px-3 py-2 hover:bg-white/10">
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="p-6 md:p-10"><Outlet /></main>
    </div>
  )
}
