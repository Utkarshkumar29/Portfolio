import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';



function App() {
  return (
    <main className=' max-w-7xl mx-auto relative '>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}

export default App;
