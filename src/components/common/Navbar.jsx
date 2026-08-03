// import { Link, NavLink } from 'react-router-dom'
// import ThemeToggle from './ThemeToggle.jsx'

// const links = [
//   ['Home', '/'], ['About', '/about'], ['Services', '/services'],
//   ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Contact', '/contact'],
// ]

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
//       <div className="container-shell flex min-h-16 items-center justify-between gap-5">
//         <Link to="/" className="font-bold tracking-wide">ASTRONOVA <span className="text-cyan-400">SOLUTIONS</span></Link>
//         <nav className="hidden items-center gap-5 md:flex">
//           {links.map(([label, path]) => (
//             <NavLink key={path} to={path} className={({isActive}) => isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}>
//               {label}
//             </NavLink>
//           ))}
//         </nav>
//         <ThemeToggle />
//       </div>
//     </header>
//   )
// }



import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Blog",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Astronova
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button>
            Get Started
          </Button>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;