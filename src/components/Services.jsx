function Services() {
  const items = [
    {
      title: "Portraits",
      desc: "Editorial and lifestyle portraits with cinematic lighting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
      ),
    },
    {
      title: "Brand & Campaigns",
      desc: "Creative direction and production for brands and agencies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h6.375m-7.5 0V8.25m0 10.125c0 .621.504 1.125 1.125 1.125M20.625 19.5c.621 0 1.125-.504 1.125-1.125m0 0V11.25m0 7.125c0 .621-.504 1.125-1.125 1.125M10.5 19.5h3m-9.375-3h17.25m-17.25 0A1.125 1.125 0 013 15.375M3.375 16.5V8.25m0 7.125c0 .621.504 1.125 1.125 1.125m17.25 0c.621 0 1.125-.504 1.125-1.125M21 16.5V11.25m0 5.25A1.125 1.125 0 0119.875 18M8.25 9V5.25A2.25 2.25 0 0110.5 3h3A2.25 2.25 0 0115.75 5.25V9M8.25 9h7.5" /></svg>
      ),
    },
    {
      title: "Events",
      desc: "Weddings, corporate events, and private celebrations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75V6.75A2.25 2.25 0 0018.75 4.5h-13.5A2.25 2.25 0 003 6.75v6m18 0v4.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12.75m18 0H3" /></svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-blue-200 max-w-2xl">End-to-end production support from pre-visualization to delivery. Flexible packages for individuals, brands, and agencies.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] transition">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-blue-300 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-blue-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;