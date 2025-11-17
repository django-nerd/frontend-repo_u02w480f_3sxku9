function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop" alt="Behind the scenes" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About the Studio</h2>
            <p className="mt-4 text-blue-200">We are a Seattle-based team focused on crafting striking visuals for people and brands. Our approach blends cinematic lighting with natural storytelling, producing images that feel modern and timeless.</p>
            <p className="mt-4 text-blue-200">Available for studio and on-location shoots throughout the Pacific Northwest and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;