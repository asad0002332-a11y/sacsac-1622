import { Link } from "wouter";
import PageSEO from "../../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE}/guides/usa#article`,
    "headline": "School Starting Ages in the US: A Complete State-by-State Guide (2025)",
    "description": "Kindergarten cutoff dates vary dramatically across all 50 US states. Learn the exact rules for your state — from September 1 in most states to December 1 in Michigan and July 31 in Hawaii.",
    "url": `${BASE}/guides/usa`,
    "image": `${BASE}/og-image.png`,
    "author": { "@type": "Organization", "name": "School Age Calculator", "url": BASE },
    "publisher": {
      "@type": "Organization",
      "name": "School Age Calculator",
      "logo": { "@type": "ImageObject", "url": `${BASE}/logo.svg` }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-05-04",
    "mainEntityOfPage": `${BASE}/guides/usa`,
    "articleSection": "Education",
    "keywords": "US school starting age, kindergarten cutoff date by state, what grade is my child in USA, school enrollment age United States, kindergarten age requirements"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${BASE}/#articles` },
      { "@type": "ListItem", "position": 3, "name": "USA School Guide", "item": `${BASE}/guides/usa` }
    ]
  }
];

export default function GuideUSA() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="US School Starting Ages — Complete State-by-State Guide (2025) | School Age Calculator"
        description="Kindergarten cutoff dates vary across all 50 US states. Find the exact age requirement for your state — from September 1 to December 1. Free guide for parents."
        canonical={`${BASE}/guides/usa`}
        type="article"
        datePublished="2025-01-01"
        dateModified="2026-05-04"
        hreflang={[
          { lang: "en", href: `${BASE}/guides/usa` },
          { lang: "en-US", href: `${BASE}/guides/usa` },
          { lang: "x-default", href: `${BASE}/guides/usa` }
        ]}
        schemas={pageSchemas}
      />
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.svg" alt="SAC" className="w-9 h-9" />
            <span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span>
          </Link>
          <Link href="/#articles" className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← All Guides</Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🇺🇸</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">United States</span>
            <span className="text-xs text-slate-400">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            School Starting Ages in the US:<br className="hidden md:block" /> A Complete State-by-State Guide (2025)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Kindergarten cutoff dates vary dramatically across all 50 states — from July 31 in Hawaii to December 1 in Michigan. Learn the exact rules for your state so you're never caught off guard during enrollment season.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">🎓</div>
          <div className="flex-1">
            <p className="font-bold text-slate-800">Want the exact answer for your state?</p>
            <p className="text-slate-600 text-sm">Use our free calculator — enter your child's date of birth and select your state.</p>
          </div>
          <Link href="/#calculator" className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Calculate Now →</Link>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">How the US School System Works</h2>
            <p>The United States school system runs from <strong>Kindergarten (K)</strong> through <strong>Grade 12</strong>, spanning 13 years of compulsory education. Children typically start at age 5 and graduate high school at age 17–18.</p>
            <p className="mt-3">The system is divided into three levels:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Elementary School</strong> — Kindergarten through Grade 5 (ages 5–11)</li>
              <li><strong>Middle School</strong> — Grades 6–8 (ages 11–14)</li>
              <li><strong>High School</strong> — Grades 9–12 (ages 14–18)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">What Is a Kindergarten Cutoff Date?</h2>
            <p>A <strong>kindergarten cutoff date</strong> is the birthday deadline by which a child must turn 5 in order to enroll in Kindergarten that school year. If a child's birthday falls after the cutoff, they must wait until the following year to enroll.</p>
            <p className="mt-3">For example, in California (cutoff: September 1), a child born on August 31 can start Kindergarten in September of that year. A child born on September 2 must wait until the following year.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">Kindergarten Cutoff Dates by State</h2>
            <div className="overflow-x-auto rounded-2xl border border-amber-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">State</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Cutoff Date</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Alabama", "September 1", ""],
                    ["Alaska", "September 1", ""],
                    ["Arizona", "September 1", ""],
                    ["Arkansas", "August 1", ""],
                    ["California", "September 1", ""],
                    ["Colorado", "October 1", ""],
                    ["Connecticut", "January 1", ""],
                    ["Delaware", "August 31", ""],
                    ["Florida", "September 1", ""],
                    ["Georgia", "September 1", ""],
                    ["Hawaii", "July 31", "Earliest cutoff in the US"],
                    ["Idaho", "September 1", ""],
                    ["Illinois", "September 1", ""],
                    ["Indiana", "August 1", ""],
                    ["Iowa", "September 15", ""],
                    ["Kansas", "August 31", ""],
                    ["Kentucky", "October 1", ""],
                    ["Louisiana", "September 30", ""],
                    ["Maine", "October 15", ""],
                    ["Maryland", "September 1", ""],
                    ["Massachusetts", "September 1", ""],
                    ["Michigan", "December 1", "Latest cutoff in most states"],
                    ["Minnesota", "September 1", ""],
                    ["Mississippi", "September 1", ""],
                    ["Missouri", "July 31", ""],
                    ["Montana", "September 10", ""],
                    ["Nebraska", "July 31", ""],
                    ["Nevada", "September 30", ""],
                    ["New Hampshire", "September 30", ""],
                    ["New Jersey", "October 1", ""],
                    ["New Mexico", "September 1", ""],
                    ["New York", "December 1", "District option"],
                    ["North Carolina", "August 31", ""],
                    ["North Dakota", "August 1", ""],
                    ["Ohio", "August 1", ""],
                    ["Oklahoma", "November 1", ""],
                    ["Oregon", "September 1", ""],
                    ["Pennsylvania", "September 1", ""],
                    ["Rhode Island", "September 1", ""],
                    ["South Carolina", "September 1", ""],
                    ["South Dakota", "September 1", ""],
                    ["Tennessee", "September 30", ""],
                    ["Texas", "September 1", ""],
                    ["Utah", "September 1", ""],
                    ["Vermont", "January 1", ""],
                    ["Virginia", "September 30", ""],
                    ["Washington", "August 31", ""],
                    ["West Virginia", "November 1", ""],
                    ["Wisconsin", "September 1", ""],
                    ["Wyoming", "September 15", ""],
                    ["Washington D.C.", "December 31", ""],
                  ].map(([state, date, note], i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <td className="px-5 py-2.5 font-semibold text-slate-800">{state}</td>
                      <td className="px-5 py-2.5 text-slate-700">{date}</td>
                      <td className="px-5 py-2.5 text-slate-500 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">US Grade Level Chart</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { grade: "Kindergarten", age: "5–6", type: "Elementary", color: "bg-green-50 border-green-200" },
                { grade: "Grade 1–5", age: "6–11", type: "Elementary", color: "bg-green-50 border-green-200" },
                { grade: "Grade 6–8", age: "11–14", type: "Middle School", color: "bg-blue-50 border-blue-200" },
                { grade: "Grade 9–12", age: "14–18", type: "High School", color: "bg-amber-50 border-amber-200" },
              ].map((row, i) => (
                <div key={i} className={`border rounded-xl p-4 ${row.color}`}>
                  <div className="font-bold text-slate-800">{row.grade}</div>
                  <div className="text-slate-600 text-sm">Ages {row.age} · {row.type}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">What Is "Redshirting"?</h2>
            <p>Redshirting is the practice of delaying a child's kindergarten entry by one year, even if they are technically eligible. Parents often consider this for children born close to the cutoff date, believing an extra year of development will give them an academic or social advantage.</p>
            <p className="mt-3">Research on redshirting is mixed. Some studies show short-term academic benefits, while others suggest these advantages disappear by 3rd or 4th grade. Ultimately it's a personal decision based on your child's individual readiness.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What age does a child start Kindergarten in the US?", a: "Most children start Kindergarten at age 5. The exact enrollment date depends on your state's cutoff date — your child must turn 5 by that date to enroll." },
                { q: "What grade is a 7-year-old in?", a: "A 7-year-old is typically in 1st or 2nd Grade, depending on when their birthday falls relative to their state's cutoff date." },
                { q: "Can my child skip Kindergarten?", a: "In most states, Kindergarten is mandatory. Some states allow early entry to Grade 1 if the child passes a readiness assessment, but this varies widely." },
                { q: "What year does my child graduate high school?", a: "Take the year your child starts Kindergarten and add 13. For example, a child starting K in 2024 graduates in 2037. Use our calculator for an exact answer." },
              ].map((faq, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <p className="font-bold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Find Your Child's Exact Grade</h3>
          <p className="mb-5 opacity-90">Enter their date of birth and select your state for an instant, accurate result.</p>
          <Link href="/#calculator" className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors">Use the Calculator →</Link>
        </div>

        {/* Other guides */}
        <div className="mt-10">
          <h3 className="font-bold text-slate-800 mb-4">More Guides</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/guides/uk" className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇬🇧</span><p className="font-semibold text-slate-800 text-sm mt-1">UK Year Groups Guide</p></Link>
            <Link href="/guides/australia" className="bg-green-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇦🇺</span><p className="font-semibold text-slate-800 text-sm mt-1">Australia School Ages</p></Link>
            <Link href="/guides/canada" className="bg-red-50 border border-red-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇨🇦</span><p className="font-semibold text-slate-800 text-sm mt-1">Canada Province Guide</p></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
