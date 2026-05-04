import { useState } from "react";

type CountryKey = "usa" | "uk" | "australia" | "canada";

const tabs: { key: CountryKey; label: string; flag: string }[] = [
  { key: "usa", label: "USA", flag: "🇺🇸" },
  { key: "uk", label: "UK", flag: "🇬🇧" },
  { key: "australia", label: "Australia", flag: "🇦🇺" },
  { key: "canada", label: "Canada", flag: "🇨🇦" },
];

const usaGrades = [
  { grade: "Pre-K", age: "3–4", type: "Pre-school (optional)" },
  { grade: "Kindergarten (K)", age: "5–6", type: "Elementary" },
  { grade: "Grade 1", age: "6–7", type: "Elementary" },
  { grade: "Grade 2", age: "7–8", type: "Elementary" },
  { grade: "Grade 3", age: "8–9", type: "Elementary" },
  { grade: "Grade 4", age: "9–10", type: "Elementary" },
  { grade: "Grade 5", age: "10–11", type: "Elementary" },
  { grade: "Grade 6", age: "11–12", type: "Middle School" },
  { grade: "Grade 7", age: "12–13", type: "Middle School" },
  { grade: "Grade 8", age: "13–14", type: "Middle School" },
  { grade: "Grade 9", age: "14–15", type: "High School" },
  { grade: "Grade 10", age: "15–16", type: "High School" },
  { grade: "Grade 11", age: "16–17", type: "High School" },
  { grade: "Grade 12", age: "17–18", type: "High School" },
];

const ukYears = [
  { year: "Nursery", age: "3–4", stage: "EYFS", type: "Pre-school" },
  { year: "Reception", age: "4–5", stage: "EYFS", type: "Primary" },
  { year: "Year 1", age: "5–6", stage: "Key Stage 1", type: "Primary" },
  { year: "Year 2", age: "6–7", stage: "Key Stage 1", type: "Primary" },
  { year: "Year 3", age: "7–8", stage: "Key Stage 2", type: "Primary" },
  { year: "Year 4", age: "8–9", stage: "Key Stage 2", type: "Primary" },
  { year: "Year 5", age: "9–10", stage: "Key Stage 2", type: "Primary" },
  { year: "Year 6", age: "10–11", stage: "Key Stage 2", type: "Primary" },
  { year: "Year 7", age: "11–12", stage: "Key Stage 3", type: "Secondary" },
  { year: "Year 8", age: "12–13", stage: "Key Stage 3", type: "Secondary" },
  { year: "Year 9", age: "13–14", stage: "Key Stage 3", type: "Secondary" },
  { year: "Year 10", age: "14–15", stage: "Key Stage 4 (GCSEs)", type: "Secondary" },
  { year: "Year 11", age: "15–16", stage: "Key Stage 4 (GCSEs)", type: "Secondary" },
  { year: "Year 12", age: "16–17", stage: "Key Stage 5 (A-Levels)", type: "Sixth Form" },
  { year: "Year 13", age: "17–18", stage: "Key Stage 5 (A-Levels)", type: "Sixth Form" },
];

const australiaStates = [
  { state: "NSW", firstYear: "Kindergarten", cutoff: "Must turn 5 by 31 July" },
  { state: "VIC", firstYear: "Prep", cutoff: "Must turn 5 by 30 April" },
  { state: "QLD", firstYear: "Prep", cutoff: "Must turn 5 by 30 June" },
  { state: "WA", firstYear: "Pre-primary", cutoff: "Must turn 5 by 30 June" },
  { state: "SA", firstYear: "Reception", cutoff: "Rolling entry — turns 5 before term starts" },
  { state: "TAS", firstYear: "Prep", cutoff: "Must turn 5 by 1 January" },
  { state: "ACT", firstYear: "Kindergarten", cutoff: "Must turn 5 by 30 April" },
  { state: "NT", firstYear: "Transition", cutoff: "Must turn 5 by 30 June" },
];

const canadaProvinces = [
  { province: "Ontario", firstYear: "JK (Junior Kindergarten)", cutoff: "Turns 4 by Dec 31" },
  { province: "British Columbia", firstYear: "Kindergarten", cutoff: "Turns 5 by Dec 31" },
  { province: "Alberta", firstYear: "Kindergarten", cutoff: "Turns 5 by March 1" },
  { province: "Quebec", firstYear: "Maternelle", cutoff: "Turns 5 by Sep 30" },
  { province: "Manitoba", firstYear: "Kindergarten", cutoff: "Turns 5 by Dec 31" },
  { province: "Saskatchewan", firstYear: "Kindergarten", cutoff: "Turns 5 by Dec 31" },
  { province: "Nova Scotia", firstYear: "Primary (Grade P)", cutoff: "Turns 5 by Oct 1" },
  { province: "New Brunswick", firstYear: "Kindergarten", cutoff: "Turns 5 by Dec 31" },
  { province: "Newfoundland & Labrador", firstYear: "Kindergarten", cutoff: "Turns 5 by Sep 1" },
];

export default function CountryRules() {
  const [active, setActive] = useState<CountryKey>("usa");

  return (
    <section id="country-rules" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-200 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">By Country</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">School Age Rules by Country</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every country has different grade structures, starting ages, and cutoff dates. Here's a complete reference.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white rounded-2xl p-2 border border-amber-100 shadow-sm max-w-md mx-auto">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-sm transition-all ${
                active === t.key
                  ? "bg-amber-400 text-white shadow"
                  : "text-slate-600 hover:bg-amber-50"
              }`}
            >
              <span>{t.flag}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          {active === "usa" && (
            <div>
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">🇺🇸 United States School System</h3>
                <p className="opacity-90">Most states require children to be age 5 by September 1st to start Kindergarten. Grades K–12 span ages 5–18.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-amber-50 border-b border-amber-100">
                    <tr>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Grade</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Typical Age</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">School Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usaGrades.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="px-6 py-3 font-semibold text-slate-800">{row.grade}</td>
                        <td className="px-6 py-3 text-slate-600">{row.age}</td>
                        <td className="px-6 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            row.type.includes("High") ? "bg-amber-100 text-amber-700"
                            : row.type.includes("Middle") ? "bg-orange-100 text-orange-700"
                            : row.type.includes("Pre") ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                          }`}>{row.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-amber-50 border-t border-amber-100">
                <p className="text-sm text-slate-600"><strong>Note:</strong> Cutoff dates vary by state. Use the calculator above to get your exact state's rules. Most common cutoff: September 1.</p>
              </div>
            </div>
          )}

          {active === "uk" && (
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">🇬🇧 United Kingdom School System</h3>
                <p className="opacity-90">Children start Reception (school) the September after their 4th birthday. School is compulsory to age 16.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-blue-50 border-b border-blue-100">
                    <tr>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Year Group</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Age</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Key Stage</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ukYears.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="px-6 py-3 font-semibold text-slate-800">{row.year}</td>
                        <td className="px-6 py-3 text-slate-600">{row.age}</td>
                        <td className="px-6 py-3 text-slate-600">{row.stage}</td>
                        <td className="px-6 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            row.type === "Secondary" ? "bg-amber-100 text-amber-700"
                            : row.type === "Sixth Form" ? "bg-purple-100 text-purple-700"
                            : row.type === "Pre-school" ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                          }`}>{row.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {active === "australia" && (
            <div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">🇦🇺 Australia School System</h3>
                <p className="opacity-90">Each state has different names for the first year of school and different age cutoff dates. Children generally start in the year they turn 5.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-green-50 border-b border-green-100">
                    <tr>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">State / Territory</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">First Year Name</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Age Cutoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {australiaStates.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="px-6 py-3 font-semibold text-slate-800">{row.state}</td>
                        <td className="px-6 py-3 text-slate-600">{row.firstYear}</td>
                        <td className="px-6 py-3 text-slate-600">{row.cutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-green-50 border-t border-green-100">
                <p className="text-sm text-slate-600">Australia follows Foundation → Year 12. Names differ by state but structure is consistent. School starts January/February.</p>
              </div>
            </div>
          )}

          {active === "canada" && (
            <div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">🇨🇦 Canada School System</h3>
                <p className="opacity-90">Canada's school system varies by province. Most children start Kindergarten at age 5, with Ontario offering Junior Kindergarten from age 4.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-red-50 border-b border-red-100">
                    <tr>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Province</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">First Year</th>
                      <th className="text-left px-6 py-3 font-bold text-slate-700">Age Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {canadaProvinces.map((row, i) => (
                      <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                        <td className="px-6 py-3 font-semibold text-slate-800">{row.province}</td>
                        <td className="px-6 py-3 text-slate-600">{row.firstYear}</td>
                        <td className="px-6 py-3 text-slate-600">{row.cutoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
