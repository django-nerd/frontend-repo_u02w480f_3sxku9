import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Thanks! We'll be in touch shortly." });
        e.currentTarget.reset();
      } else {
        setStatus({ type: "error", message: data?.detail || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
            <p className="mt-3 text-blue-200">Tell us about your project, desired dates, and any references. We'll follow up within one business day.</p>
            <div className="mt-8 text-blue-200 space-y-2">
              <p><span className="text-white">Email:</span> hello@studio19seattle.com</p>
              <p><span className="text-white">Location:</span> Seattle, WA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200 mb-1">Name</label>
                <input name="name" required className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="you@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200 mb-1">Message</label>
                <textarea name="message" required rows="4" className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40" placeholder="Tell us about your project" />
              </div>
            </div>
            <button disabled={loading} className="mt-4 w-full px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 disabled:opacity-60">
              {loading ? "Sending..." : "Send inquiry"}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;