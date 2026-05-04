import { Link } from "wouter";
import PageSEO from "../../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE}/guides/australia#article`,
    "headline": "When Does My Child Start School in Australia? Complete State Guide",
    "description": "Is it Kindergarten, Prep, Pre-primary, Reception, or Transition? Every Australian state calls the first year of school something different — and uses a different age cutoff. The definitive guide for Aussie parents.",
    "url": `${BASE}/guides/australia`,
    "image": `${BASE}/og-image.png`,
    "author": { "@type": "Organization", "name": "School Age Calculator", "url": BASE },
    "publisher": {
      "@type": "Organization",
      "name": "School Age Calculator",
      "logo": { "@type": "ImageObject", "url": `${BASE}/logo.svg` }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-05-04",
    "mainEntityOfPage": `${BASE}/guides/australia`,
    "articleSection": "Education",
    "keywords": "Australia school starting age, when does my child start school Australia, Prep age Victoria, Kindergarten age NSW, school enrollment age Australia by state, Australian school cutoff date"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": `${BASE}/#articles` },
      { "@type": "ListItem", "position": 3, "name": "Australia School Guide", "item": `${BASE}/guides/australia` }
    ]
  }
];

export default function GuideAustralia() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="When Does My Child Start School in Australia? Complete State Guide | School Age Calculator"
        description="Kindergarten, Prep, Pre-primary, Reception or Transition? Every Australian state uses a different name and cutoff date. Find the exact school starting age for your state."
        canonical={`${BASE}/guides/australia`}
        type="article"
        datePublished="2025-01-01"
        dateModified="2026-05-04"
        hreflang={[
          { lang: "en", href: `${BASE}/guides/australia` },
          { lang: "en-AU", href: `${BASE}/guides/australia` },
          { lang: "x-default", href: `${BASE}/guides/australia` }
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
            <span className="text-3xl">🇦🇺</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Australia</span>
            <span className="text-xs text-slate-400">5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            When Does My Child Start School<br className="hidden md:block" /> in Australia? Complete State Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Is it Kindergarten, Prep, Pre-primary, Reception, or Transition? Every Australian state calls the first year of school something different — and uses a different age cutoff. Here's the definitive guide for Aussie parents.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-4xl">🎓</div>
          <div className="flex-1"><p className="font-bold text-slate-800">Calculate your child's Australian year level</p><p className="text-slate-600 text-sm">Select your state for an accurate result based on local cutoff dates.</p></div>
          <Link href="/#calculator"><a className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">Calculate Now →</a></Link>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">How the Australian School System Works</h2>
            <p>Australia has a <strong>13-year school system</strong> running from Foundation year (Year 0) through Year 12. Children generally start in the year they turn 5, though exact cutoff dates vary by state. The school year starts in late January or early February.</p>
            <p className="mt-3">Schooling is compulsory until around age 17 in most states. The system is divided into:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Foundation / Year 0</strong> — first year of school (name varies by state)</li>
              <li><strong>Primary School</strong> — Years 1–6 (ages 6–12)</li>
              <li><strong>Secondary School</strong> — Years 7–10 (ages 12–16)</li>
              <li><strong>Senior Secondary</strong> — Years 11–12 (ages 16–18)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">School Starting Age by State & Territory</h2>
            <div className="overflow-x-auto rounded-2xl border border-green-100 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-green-50">
                  <tr>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">State / Territory</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">First Year Name</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">Age Cutoff</th>
                    <th className="text-left px-5 py-3 font-bold text-slate-700">School Year Start</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["New South Wales (NSW)", "Kindergarten", "Must turn 5 by 31 July", "Late January"],
                    ["Victoria (VIC)", "Prep", "Must turn 5 by 30 April", "Late January"],
                    ["Queensland (QLD)", "Prep", "Must turn 5 by 30 June", "Late January"],
                    ["Western Australia (WA)", "Pre-primary", "Must turn 5 by 30 June", "February"],
                    ["South Australia (SA)", "Reception", "Rolling entry — turns 5 before term", "Term-based"],
                    ["Tasmania (TAS)", "Prep", "Must turn 5 by 1 January", "Early February"],
                    ["ACT", "Kindergarten", "Must turn 5 by 30 April", "Late January"],
                    ["Northern Territory (NT)", "Transition", "Must turn 5 by 30 June", "Late January"],
                  ].map(([state, name, cutoff, start], i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <td className="px-5 py-2.5 font-semibold text-slate-800">{state}</td>
                      <td className="px-5 py-2.5 text-slate-700">{name}</td>
                      <td className="px-5 py-2.5 text-slate-600">{cutoff}</td>
                      <td className="px-5 py-2.5 text-slate-500 text-xs">{start}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">Australian Year Level Chart</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Foundation (Prep/Kinder)", years: "Year 0", age: "Age 5", color: "bg-yellow-50 border-yellow-200" },
                { label: "Primary School", years: "Years 1–6", age: "Ages 6–12", color: "bg-green-50 border-green-200" },
                { label: "Lower Secondary", years: "Years 7–10", age: "Ages 12–16", color: "bg-blue-50 border-blue-200" },
                { label: "Senior Secondary", years: "Years 11–12", age: "Ages 16–18", color: "bg-amber-50 border-amber-200" },
              ].map((row, i) => (
                <div key={i} className={`border rounded-xl p-4 ${row.color}`}>
                  <div className="font-bold text-slate-800">{row.label}</div>
                  <div className="text-slate-600 text-sm">{row.years} · {row.age}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Why Does South Australia Use "Rolling Entry"?</h2>
            <p>South Australia is unique — children start Reception (their first year of school) at the <strong>beginning of the term after they turn 5</strong>. This means children can start school at 4 different points during the year rather than waiting for the next school year. This rolling entry system means children don't have to wait up to a full year to start if their birthday just missed a cutoff.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What age does a child start school in Australia?", a: "Children generally start school in the year they turn 5, though the exact cutoff date varies by state. NSW uses July 31, VIC and ACT use April 30, QLD and WA use June 30." },
                { q: "Is prep the same as kindergarten in Australia?", a: "They refer to the same thing — the first year of formal schooling. The name differs: NSW and ACT call it Kindergarten, VIC/QLD/TAS call it Prep, WA calls it Pre-primary, SA calls it Reception, and NT calls it Transition." },
                { q: "What year is a 10-year-old in Australia?", a: "A 10-year-old is typically in Year 4 or Year 5 in Australian primary school." },
                { q: "Can I defer my child's school start in Australia?", a: "Yes, in most states parents can defer entry by up to one year if they feel their child is not ready. This must usually be arranged with the school and local education authority." },
              ].map((faq, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <p className="font-bold text-slate-800 mb-1">{faq.q}</p>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-extrabold mb-2">Find Your Child's Australian Year Level</h3>
          <p className="mb-5 opacity-90">Select your state for an accurate result based on local rules.</p>
          <Link href="/#calculator"><a className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors">Use the Calculator →</a></Link>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-slate-800 mb-4">More Guides</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/guides/usa"><a className="bg-blue-50 border border-blue-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇺🇸</span><p className="font-semibold text-slate-800 text-sm mt-1">USA State Guide</p></a></Link>
            <Link href="/guides/uk"><a className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇬🇧</span><p className="font-semibold text-slate-800 text-sm mt-1">UK Year Groups Guide</p></a></Link>
            <Link href="/guides/canada"><a className="bg-red-50 border border-red-100 rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xl">🇨🇦</span><p className="font-semibold text-slate-800 text-sm mt-1">Canada Province Guide</p></a></Link>
          </div>
        </div>
      </article>
    </div>
  );
}
