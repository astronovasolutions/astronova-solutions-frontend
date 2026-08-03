// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-slate-950 py-10">
//       <div className="container-shell flex flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
//         <p>© {new Date().getFullYear()} Astronova Solutions. All rights reserved.</p>
//         <div className="flex gap-4">
//           <Link to="/privacy-policy">Privacy</Link>
//           <Link to="/terms">Terms</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   )
// }



import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <Container>

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Astronova
            </h2>

            <p className="text-gray-400">
              Building innovative digital products for businesses
              around the globe.
            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              hello@astronova.com
            </p>

            <p className="text-gray-400">
              Mumbai, India
            </p>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Astronova Solutions.
          All rights reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;