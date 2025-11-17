import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/70 text-sm">© {new Date().getFullYear()} Studio 19 Seattle. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;