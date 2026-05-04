import { Link } from "wouter";
import PageSEO from "../../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE}/guides/uk#article`,
    "headline": "UK School Year Groups Explained: Ages, Key Stages & Year Numbers",
    "description": "From Reception at age 4 to Year 13 at age 18, the UK school system has its own unique structure. Discover how the Key Stage system works, when GCSEs and A-Levels happen, and how UK years compare to US grades.",
    "url": `${BASE}/guides/uk`,
    "image": `${BASE}/og-image.png`,
    "author": { "@type": "Organization", "name": "School Age Calculator", "url": BASE },
    "publisher": {
      "@type": "Organization",
      "name": "School Age Calculator",
      "logo": { "@type": "ImageObject", "url": `${BASE}/logo.svg` }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-05-04",
    "mainEntityOfPage": `${BASE}/guides/uk`,
    "articleSection": "Education",
    "keywords": "UK school year groups, UK school starting age, Reception year age, Key Stage guide, GCSE age, A-Level age, UK vs US school grades, year group calculator UK"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${BASE}/#articles` },
      { "@type": "ListItem", "position": 3, "name": "UK School Guide", "item": `${BASE}/guides/uk` }
    ]
  }
];

export default function GuideUK() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="UK School Year Groups Explained — Ages, Key Stages &amp; Numbers | School Age Calculator"
        description="From Reception at age 4 to Year 13 at 18 — understand the UK school system, Key Stages, GCSEs, A-Levels, and how UK year groups compare to US grades."
        canonical={`${BASE}/guides/uk`}
        type="article"
        datePublished="2025-01-01"
        dateModified="2026-05-04"
        hreflang={[
          { lang: "en", href: `${BASE}/guides/uk` },
          { lang: "en-GB", href: `${BASE}/guides/uk` },
          { lang: "x-default", href: `${BASE}/guides/uk` }
        ]}
        schemas={pageSchemas}
      />
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/"><a className="flex items-center gap-2.5"><img src="/logo.svg" alt="SAC" className="w-9 h-9" /><span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span></a></Link>
          <Link href="/#articles"><a className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← All Guides</a></Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🇬🇧</span>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">United Kingdom</span>
            <span className="text-xs text-slate-400">5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            UK School Year Groups Explained:<br className="hidden md:block" /> Ages, Key Stages & Year Numbers
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From Reception at age 4 to Year 13 at age 18, the UK school system has its own unique structure. Discover how the Key Stage system works, when GCSEs and A-Levels happen, and how UK years compare to US grades.
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">🎓</div>
          <div className="flex-1"><p className="font-bold text-slate-800">Find your child's UK year group instantly</p><p className="text-slate-600 text-sm">Enter their date of birth in our free calculator for an instant result.</p></div>
          <Link href="/#calculator"><a className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Calculate Now →</a></Link>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">How the UK School System Works</h2>
            <p>In England and Wales, children start <strong>Reception</strong> — the first year of primary school — in September after their 4th birthday. This makes the UK one of the earliest school starters in the world. The school year runs from September to July, and the age cutoff is <strong>September 1</strong>.</p>
            <p className="mt-3">Compulsory education runs from age 5 to 16 (Year 1 through Year 11). Many students continue to Year 12 and Year 13 (Sixth Form) for A-Levels or BTECs to prepare for university.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">Complete UK Year Group Chart</h2>
            <div className="overflow-x-auto rounded-2xl border border-indigo-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Year Group</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Age</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Key Stage</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">US Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nursery", "3–4", "EYFS (Early Years)", "Pre-K"],
                    ["Reception", "4–5", "EYFS (Early Years)", "Kindergarten"],
                    ["Year 1", "5–6", "Key Stage 1", "Grade K/1"],
                    ["Year 2", "6–7", "Key Stage 1", "Grade 1/2"],
                    ["Year 3", "7–8", "Key Stage 2", "Grade 2/3"],
                    ["Year 4", "8–9", "Key Stage 2", "Grade 3/4"],
                    ["Year 5", "9–10", "Key Stage 2", "Grade 4/5"],
                    ["Year 6", "10–11", "Key Stage 2", "Grade 5/6"],
                    ["Year 7", "11–12", "Key Stage 3", "Grade 6/7"],
                    ["Year 8", "12–13", "Key Stage 3", "Grade 7/8"],
                    ["Year 9", "13–14", "Key Stage 3", "Grade 8/9"],
                    ["Year 10", "14–15", "Key Stage 4 — GCSEs", "Grade 9/10"],
                    ["Year 11", "15–16", "Key Stage 4 — GCSEs", "Grade 10/11"],
                    ["Year 12", "16–17", "Key Stage 5 — A-Levels", "Grade 11/12"],
                    ["Year 13", "17–18", "Key Stage 5 — A-Levels", "Grade 12"],
                  ].map(([year, age, ks, us], i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <td className="px-5 py-2.5 font-semibold text-slate-800">{year}</td>
                      <td className="px-5 py-2.5 text-slate-600">{age}</td>
                      <td className="px-5 py-2.5 text-slate-600">{ks}</td>
                      <td className="px-5 py-2.5 text-slate-500 text-xs">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">What Are Key Stages?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "EYFS (Early Years)", years: "Nursery & Reception", age: "Ages 3–5", desc: "Foundation stage — play-based learning, communication, creativity.", color: "bg-yellow-50 border-yellow-200" },
                { label: "Key Stage 1", years: "Year 1–2", age: "Ages 5–7", desc: "Reading, writing, maths fundamentals. SATs at end of Year 2.", color: "bg-green-50 border-green-200" },
                { label: "Key Stage 2", years: "Year 3–6", age: "Ages 7–11", desc: "Primary education. SATs at end of Year 6.", color: "bg-blue-50 border-blue-200" },
                { label: "Key Stage 3", years: "Year 7–9", age: "Ages 11–14", desc: "Secondary school. Broader curriculum before GCSE options.", color: "bg-purple-50 border-purple-200" },
                { label: "Key Stage 4 — GCSEs", years: "Year 10–11", age: "Ages 14–16", desc: "GCSE exams at end of Year 11. Required subjects + options.", color: "bg-orange-50 border-orange-200" },
                { label: "Key Stage 5 — A-Levels", years: "Year 12–13", age: "Ages 16–18", desc: "Sixth Form / College. A-Levels or BTECs for university entry.", color: "bg-amber-50 border-amber-200" },
              ].map((ks, i) => (
                <div key={i} className={`border rounded-xl p-4 ${ks.color}`}>
                  <div className="font-bold text-slate-800">{ks.label}</div>
                  <div className="text-xs text-slate-500 mb-1">{ks.years} · {ks.age}</div>
                  <div className="text-slate-600 text-sm">{ks.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Summer-Born Children in the UK</h2>
            <p>Children born between <strong>April 1 and August 31</strong> are called "summer-born." They are the youngest in their year group and some parents request to defer their child's Reception entry by a full year. Since 2015, UK guidance allows parents to request this deferral and have their child enter Reception (not Year 1) at age 5.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What age does a child start school in the UK?", a: "Children start Reception in September after their 4th birthday, making them as young as 4 years and 1 month when they begin school." },
                { q: "What year group is a 10-year-old in?", a: "A 10-year-old is typically in Year 6 (their final year of primary school), or Year 5 if their birthday falls late in the academic year." },
                { q: "When do UK students take GCSEs?", a: "GCSEs are taken at the end of Year 11, when students are 15–16 years old." },
                { q: "Is Sixth Form (Year 12–13) compulsory?", a: "Since 2015, young people in England must be in some form of education or training until age 18. This doesn't have to be Sixth Form — apprenticeships and part-time education also count." },
              ].map((faq, i) => (
                <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                  <p className="font-bold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Find Your Child's UK Year Group</h3>
          <p className="mb-5 opacity-90">Enter their date of birth for an instant result.</p>
          <Link href="/#calculator"><a className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors">Use the Calculator →</a></Link>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-slate-800 mb-4">More Guides</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/guides/usa"><a className="bg-blue-50 border border-blue-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇺🇸</span><p className="font-semibold text-slate-800 text-sm mt-1">USA State Guide</p></a></Link>
            <Link href="/guides/australia"><a className="bg-green-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇦🇺</span><p className="font-semibold text-slate-800 text-sm mt-1">Australia School Ages</p></a></Link>
            <Link href="/guides/canada"><a className="bg-red-50 border border-red-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇨🇦</span><p className="font-semibold text-slate-800 text-sm mt-1">Canada Province Guide</p></a></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
