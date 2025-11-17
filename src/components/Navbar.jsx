import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-slate-900/70 border-b border-white/10 py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="text-white text-lg font-semibold tracking-wide">
            Studio <span className="text-blue-400">19</span> Seattle
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100">
            <button onClick={() => scrollTo("portfolio")} className="hover:text-white transition">Portfolio</button>
            <button onClick={() => scrollTo("services")} className="hover:text-white transition">Services</button>
            <button onClick={() => scrollTo("about")} className="hover:text-white transition">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white transition">Contact</button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/5">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 grid gap-2 text-blue-100">
            <button onClick={() => scrollTo("portfolio")} className="py-2 text-left hover:text-white">Portfolio</button>
            <button onClick={() => scrollTo("services")} className="py-2 text-left hover:text-white">Services</button>
            <button onClick={() => scrollTo("about")} className="py-2 text-left hover:text-white">About</button>
            <button onClick={() => scrollTo("contact")} className="py-2 text-left hover:text-white">Contact</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;