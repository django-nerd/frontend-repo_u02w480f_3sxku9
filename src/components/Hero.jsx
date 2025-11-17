function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1920&auto=format&fit=crop" alt="Studio background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Modern. Cinematic. Timeless.
          </h1>
          <p className="mt-6 text-blue-100 text-lg">
            Seattle-based photography studio crafting editorial portraits, lifestyle campaigns, and brand stories.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition">View Portfolio</a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Book a Session</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;