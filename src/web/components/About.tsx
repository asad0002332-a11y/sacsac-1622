export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-400 to-orange-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute right-0 bottom-0 w-72 h-72 opacity-10" viewBox="0 0 300 300">
          <circle cx="200" cy="200" r="200" fill="white" />
        </svg>
        <svg className="absolute left-0 top-0 w-48 h-48 opacity-10" viewBox="0 0 200 200">
          <circle cx="0" cy="0" r="150" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo.svg" alt="School Age Calculator" className="w-16 h-16 drop-shadow-lg" />
        </div>
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          About School Age Calculator
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
          Built for Parents &amp; Students<br />Who Need Real Answers
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-amber-50 leading-relaxed text-lg mb-10">
          <p>
            The <strong className="text-white">School Age Calculator</strong> was built because navigating school enrollment rules is genuinely confusing — especially for families who move between states, provinces, or countries. Cutoff dates vary, grade names differ, and the information scattered across government websites is hard to parse.
          </p>
          <p>
            Our tool uses accurate, up-to-date enrollment rules for all 50 US states, UK England/Wales, all 8 Australian states and territories, and all 13 Canadian provinces. We update the calculator regularly to reflect any changes in local regulations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["✅ Verified Data", "✅ No Sign Up", "✅ Works on Mobile", "✅ Completely Free"].map(f => (
            <span key={f} className="bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-full border border-white/30">
              {f}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <a href="#calculator" className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all text-lg">
            Try the Calculator →
          </a>
        </div>
      </div>
    </section>
  );
}
