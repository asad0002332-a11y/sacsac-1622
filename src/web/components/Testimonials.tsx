const testimonials = [
  {
    quote: "We were completely confused about our daughter's school start date after moving from California to Texas. This calculator gave us the exact answer in seconds. The state-by-state feature is brilliant.",
    name: "Sarah M.",
    role: "Parent of a 5-year-old",
    location: "Austin, TX",
    avatar: "👩",
    stars: 5,
  },
  {
    quote: "As a primary school teacher in the UK, I recommend this to parents every single year. The UK year group chart is accurate and clearly explains Key Stages — parents love how simple it is.",
    name: "James T.",
    role: "Primary School Teacher",
    location: "Manchester, UK",
    avatar: "👨‍🏫",
    stars: 5,
  },
  {
    quote: "We moved from NSW to Victoria and the school name changed from Kindergarten to Prep — we were so confused! This calculator explained everything instantly. The Australian state guide saved us.",
    name: "Emma W.",
    role: "Parent, recently relocated",
    location: "Melbourne, Australia",
    avatar: "👩‍👦",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">What Parents Say</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Trusted by Parents & Educators</h2>
          <p className="text-lg text-slate-600">Helping families navigate school enrollment since 2024.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow relative">
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-6xl text-amber-200 font-serif leading-none select-none" aria-hidden="true">"</div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-2xl">{t.avatar}</div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-xs text-amber-600 font-medium">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "US States Covered" },
            { number: "4", label: "Countries Supported" },
            { number: "100%", label: "Free to Use" },
            { number: "Instant", label: "Results" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <div className="text-3xl font-extrabold text-amber-500 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
