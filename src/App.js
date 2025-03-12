import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectSection from './sections/ProjectSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';



function App() {
  return (
    <main className=' max-w-7xl mx-auto relative '>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}

export default App;
