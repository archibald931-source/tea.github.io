import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
