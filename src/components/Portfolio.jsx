const gallery = [
  "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494697536454-6f39e2ccbf0e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-blue-200">A mix of portrait, lifestyle, and commercial shoots.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10">Book Now</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800">
              <img src={src} alt="Portfolio item" className="w-full h-72 object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;