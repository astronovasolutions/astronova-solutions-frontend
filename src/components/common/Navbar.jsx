import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Contact', '/contact'],
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="container-shell flex min-h-16 items-center justify-between gap-5">
        <Link to="/" className="font-bold tracking-wide">ASTRONOVA <span className="text-cyan-400">SOLUTIONS</span></Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={({isActive}) => isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}>
              {label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
