import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar';
import HeroSection from './sections/heroSection';


function App() {
  return (
    <main className=' max-w-7xl mx-auto relative '>
      <Navbar/>
      <HeroSection/>
    </main>
  );
}

export default App;
