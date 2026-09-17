import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
