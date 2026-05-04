const steps = [
  {
    icon: "📅",
    step: "01",
    title: "Enter Date of Birth",
    description: "Simply type in your child's date of birth — or your own. The calculator works for any age from newborn to adult.",
  },
  {
    icon: "🌍",
    step: "02",
    title: "Choose Country & Region",
    description: "Select the country (USA, UK, Australia, or Canada) and your specific state or province for accurate local rules.",
  },
  {
    icon: "🎓",
    step: "03",
    title: "Get Instant Results",
    description: "See the current grade level, school type, enrollment year, and expected graduation year — all in one click.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">Simple & Fast</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">Three easy steps to find out what grade your child is in or when they start school.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" aria-hidden="true" />
          {steps.map((s, i) => (
            <div key={i} className="relative bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow">
                {s.step}
              </div>
              <div className="text-5xl mb-4 mt-2">{s.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
