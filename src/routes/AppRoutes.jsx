import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import Technologies from '../pages/Technologies.jsx'
import Blog from '../pages/Blog.jsx'
import BlogDetails from '../pages/BlogDetails.jsx'
import Careers from '../pages/Careers.jsx'
import FAQ from '../pages/FAQ.jsx'
import Contact from '../pages/Contact.jsx'
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx'
import Terms from '../pages/Terms.jsx'
import NotFound from '../pages/NotFound.jsx'
import Login from '../pages/admin/Login.jsx'
import Dashboard from '../pages/admin/Dashboard.jsx'
import ManageServices from '../pages/admin/ManageServices.jsx'
import ManageProjects from '../pages/admin/ManageProjects.jsx'
import ManageBlogs from '../pages/admin/ManageBlogs.jsx'
import ManageTestimonials from '../pages/admin/ManageTestimonials.jsx'
import ContactInquiries from '../pages/admin/ContactInquiries.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<ManageServices />} />
        <Route path="projects" element={<ManageProjects />} />
        <Route path="blogs" element={<ManageBlogs />} />
        <Route path="testimonials" element={<ManageTestimonials />} />
        <Route path="inquiries" element={<ContactInquiries />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
