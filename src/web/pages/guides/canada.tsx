import { Link } from "wouter";
import PageSEO from "../../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE}/guides/canada#article`,
    "headline": "Canada Kindergarten Age by Province: What Every Parent Needs to Know",
    "description": "Ontario's Junior Kindergarten starts at age 4. Quebec has la maternelle. Alberta has an early March cutoff. Each province has its own rules — this guide breaks down every province and territory.",
    "url": `${BASE}/guides/canada`,
    "image": `${BASE}/og-image.png`,
    "author": { "@type": "Organization", "name": "School Age Calculator", "url": BASE },
    "publisher": {
      "@type": "Organization",
      "name": "School Age Calculator",
      "logo": { "@type": "ImageObject", "url": `${BASE}/logo.svg` }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-05-04",
    "mainEntityOfPage": `${BASE}/guides/canada`,
    "articleSection": "Education",
    "keywords": "Canada kindergarten age by province, Ontario junior kindergarten age, when does school start in Canada, Canadian school enrollment age, Quebec maternelle age, Alberta kindergarten cutoff"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${BASE}/#articles` },
      { "@type": "ListItem", "position": 3, "name": "Canada School Guide", "item": `${BASE}/guides/canada` }
    ]
  }
];

export default function GuideCanada() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Canada Kindergarten Age by Province — Complete Guide for Parents | School Age Calculator"
        description="Ontario JK starts at age 4. Alberta cutoff is March 1. Quebec has maternelle. Every Canadian province has different rules — find the exact school starting age for your province."
        canonical={`${BASE}/guides/canada`}
        type="article"
        datePublished="2025-01-01"
        dateModified="2026-05-04"
        hreflang={[
          { lang: "en", href: `${BASE}/guides/canada` },
          { lang: "en-CA", href: `${BASE}/guides/canada` },
          { lang: "x-default", href: `${BASE}/guides/canada` }
        ]}
        schemas={pageSchemas}
      />
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="SAC" className="w-9 h-9" />
            <span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span>
          </Link>
          <Link href="/#articles" className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← All Guides</Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🇨🇦</span>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Canada</span>
            <span className="text-xs text-slate-400">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            Canada Kindergarten Age by Province:<br className="hidden md:block" /> What Every Parent Needs to Know
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ontario's Junior Kindergarten starts at age 4. Quebec has la maternelle. Alberta has an early March cutoff. Each province has its own rules — this guide breaks down every province and territory so you always know when your child is eligible.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">🎓</div>
          <div className="flex-1"><p className="font-bold text-slate-800">Calculate your child's Canadian grade instantly</p><p className="text-slate-600 text-sm">Select your province for province-specific results.</p></div>
          <Link href="/#calculator" className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Calculate Now →</Link>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">How the Canadian School System Works</h2>
            <p>Canada does not have a single national school system — <strong>each province and territory manages its own education system</strong>. However, the overall structure is similar across the country: Kindergarten (or Junior Kindergarten in Ontario), followed by Grades 1–12.</p>
            <p className="mt-3">The school year runs from September to June. Compulsory schooling generally runs from age 6 to age 16–18 depending on the province.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">Kindergarten Age by Province & Territory</h2>
            <div className="overflow-x-auto rounded-2xl border border-red-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-red-50">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Province / Territory</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">First Year</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Age Requirement</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ontario", "JK (Junior Kindergarten)", "Turns 4 by Dec 31", "Unique JK + SK system"],
                    ["British Columbia", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Alberta", "Kindergarten", "Turns 5 by March 1", "Early cutoff"],
                    ["Quebec", "Maternelle (4 ans / 5 ans)", "Turns 5 by Sep 30", "French system"],
                    ["Manitoba", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Saskatchewan", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Nova Scotia", "Grade Primary (P)", "Turns 5 by Oct 1", "Called 'Primary' not K"],
                    ["New Brunswick", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Newfoundland & Labrador", "Kindergarten", "Turns 5 by Sep 1", ""],
                    ["Prince Edward Island", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Yukon", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Northwest Territories", "Kindergarten", "Turns 5 by Dec 31", ""],
                    ["Nunavut", "Kindergarten", "Turns 5 by Dec 31", ""],
                  ].map(([prov, first, req, note], i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <td className="px-5 py-2.5 font-semibold text-slate-800">{prov}</td>
                      <td className="px-5 py-2.5 text-slate-700">{first}</td>
                      <td className="px-5 py-2.5 text-slate-600">{req}</td>
                      <td className="px-5 py-2.5 text-slate-500 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Ontario's JK/SK System Explained</h2>
            <p>Ontario is the only Canadian province with a <strong>Junior Kindergarten (JK)</strong> program. Children enter JK at age 4 (turning 4 by December 31), then move to Senior Kindergarten (SK) the following year at age 5, and Grade 1 the year after.</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "JK", age: "Age 4", detail: "Junior Kindergarten" },
                { label: "SK", age: "Age 5", detail: "Senior Kindergarten" },
                { label: "Grade 1", age: "Age 6", detail: "First grade year" },
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-red-600">{item.label}</div>
                  <div className="text-slate-700 font-semibold text-sm">{item.age}</div>
                  <div className="text-slate-500 text-xs">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Canadian Grade Structure</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Kindergarten / JK & SK", years: "K or JK–SK", age: "Ages 4–6", color: "bg-yellow-50 border-yellow-200" },
                { label: "Elementary School", years: "Grades 1–6", age: "Ages 6–12", color: "bg-green-50 border-green-200" },
                { label: "Middle / Junior High", years: "Grades 7–9", age: "Ages 12–15", color: "bg-blue-50 border-blue-200" },
                { label: "High School", years: "Grades 10–12", age: "Ages 15–18", color: "bg-amber-50 border-amber-200" },
              ].map((row, i) => (
                <div key={i} className={`border rounded-xl p-4 ${row.color}`}>
                  <div className="font-bold text-slate-800">{row.label}</div>
                  <div className="text-slate-600 text-sm">{row.years} · {row.age}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What age does a child start Kindergarten in Canada?", a: "Most provinces require children to be 5 years old by December 31 of that school year. Ontario allows children to start Junior Kindergarten at age 4." },
                { q: "Is Kindergarten mandatory in Canada?", a: "Kindergarten is not mandatory in all provinces. However, Grade 1 (usually at age 6) is compulsory. Many provinces strongly encourage Kindergarten attendance." },
                { q: "What grade is a 7-year-old in Canada?", a: "A 7-year-old is typically in Grade 1 or Grade 2 in Canada, depending on their birthday relative to the provincial cutoff date." },
                { q: "Does Quebec have a different school system?", a: "Yes. Quebec has a unique system: Maternelle (age 4–5), Primary school (Grades 1–6), Secondary school (Grades 7–11), and CÉGEP (pre-university college) instead of Grade 12." },
              ].map((faq, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <p className="font-bold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Find Your Child's Canadian Grade</h3>
          <p className="mb-5 opacity-90">Select your province for accurate, province-specific results.</p>
          <Link href="/#calculator" className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors">Use the Calculator →</Link>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-slate-800 mb-4">More Guides</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/guides/usa" className="bg-blue-50 border border-blue-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇺🇸</span><p className="font-semibold text-slate-800 text-sm mt-1">USA State Guide</p></Link>
            <Link href="/guides/uk" className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇬🇧</span><p className="font-semibold text-slate-800 text-sm mt-1">UK Year Groups Guide</p></Link>
            <Link href="/guides/australia" className="bg-green-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇦🇺</span><p className="font-semibold text-slate-800 text-sm mt-1">Australia School Ages</p></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
