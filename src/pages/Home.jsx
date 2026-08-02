import Hero from '../components/home/Hero.jsx'
import ServicesSection from '../components/home/ServicesSection.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import TechnologiesSection from '../components/home/TechnologiesSection.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import PortfolioSection from '../components/home/PortfolioSection.jsx'
import TestimonialsSection from '../components/home/TestimonialsSection.jsx'
import StatsSection from '../components/home/StatsSection.jsx'
import FAQSection from '../components/home/FAQSection.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'

export default function Home(){return <><Hero/><ServicesSection/><WhyChooseUs/><TechnologiesSection/><ProcessSection/><PortfolioSection/><TestimonialsSection/><StatsSection/><FAQSection/><section className="section-space"><div className="container-shell max-w-2xl"><h2 className="mb-6 text-center text-3xl font-bold">Start your project</h2><ContactForm/></div></section></>}
