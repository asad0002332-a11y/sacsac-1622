import { useState } from "react";

const faqs = [
  {
    q: "What age does a child start school in the US?",
    a: "In the United States, children typically start Kindergarten at age 5. Most states require children to turn 5 by September 1st of the school year, though cutoff dates vary by state — some use August 1, October 1, or even December 1. Children enter Grade 1 at age 6 and graduate high school (Grade 12) at around age 17–18."
  },
  {
    q: "What age does school start in the UK?",
    a: "In England and Wales, children start Reception class (the first year of primary school) in September after their 4th birthday. This means children as young as 4 years and 1 month may start school. School is compulsory from age 5 and continues through Year 11 (age 16). Many students continue to Year 12 and Year 13 (Sixth Form) until age 18."
  },
  {
    q: "What grade is my child in by age?",
    a: "In the USA: Kindergarten (age 5–6), Grade 1 (6–7), Grade 2 (7–8), Grade 3 (8–9), Grade 4 (9–10), Grade 5 (10–11), Grade 6 (11–12), Grade 7 (12–13), Grade 8 (13–14), Grade 9 (14–15), Grade 10 (15–16), Grade 11 (16–17), Grade 12 (17–18). Use our calculator above for an exact answer based on your child's date of birth and state."
  },
  {
    q: "What age do children start school in Australia?",
    a: "In Australia, children start school in the year they turn 5, but the exact cutoff date varies by state. In NSW, children must turn 5 by July 31. In Victoria, the cutoff is April 30. In Queensland and WA, it's June 30. The first year of school is called Kindergarten (NSW/ACT), Prep (VIC/QLD/TAS), Pre-primary (WA), Reception (SA), or Transition (NT)."
  },
  {
    q: "What age does kindergarten start in Canada?",
    a: "Most Canadian provinces require children to be 5 years old by December 31 to start Kindergarten. Ontario is the exception — it offers Junior Kindergarten (JK) for 4-year-olds and Senior Kindergarten (SK) for 5-year-olds. Alberta's cutoff is March 1, Quebec's is September 30, and Nova Scotia's is October 1. The school year starts in September."
  },
  {
    q: "What is the difference between UK year groups and US grades?",
    a: "UK Year 1 is equivalent to US Kindergarten (age 5–6). UK Year 2 = US Grade 1. UK Year 6 = US Grade 5. UK Year 7 = US Grade 6. UK Year 11 = US Grade 10. UK Year 13 = US Grade 12. The key difference is that UK children start formal school (Reception) at age 4, one year earlier than most US states."
  },
  {
    q: "How do I calculate what grade my child should be in?",
    a: "To calculate your child's grade: (1) Find the kindergarten cutoff date for your state or country. (2) Determine the year your child turned (or will turn) 5 by that date — that's their Kindergarten year. (3) Add years of schooling from that point. Or simply use our free School Age Calculator above — enter the date of birth, select your country and state, and get the answer instantly."
  },
  {
    q: "What is the school starting age in different countries?",
    a: "School starting ages vary significantly by country: USA (age 5), UK (age 4 — Reception), Australia (age 5, varying by state), Canada (age 4–5 depending on province), Germany (age 6), France (age 3 — maternelle), Finland (age 6–7), India (age 5–6), New Zealand (age 5). The UK and Australia start children in formal school earlier than most other countries."
  },
  {
    q: "Can a child start school early or late?",
    a: "Yes, in most countries parents have some flexibility. In the USA, many states allow 'redshirting' — delaying Kindergarten by one year if the child is born close to the cutoff date. In the UK, summer-born children (April–August) can defer their Reception year by up to a year. In Australia, parents can also defer entry in most states. Early entry is sometimes possible with school approval."
  },
  {
    q: "What year will my child graduate from high school?",
    a: "To calculate graduation year: take the year your child starts Kindergarten (or Reception/Year 1) and add 13 years (for a K-12 system). For example, if your child starts Kindergarten in 2024, they'll graduate in 2037. In the UK, a child starting Reception in 2024 will complete Year 13 in 2037. Use our calculator above to get an exact graduation year for your child's date of birth."
  },
  {
    q: "What are the school enrollment age requirements in each US state?",
    a: "Most US states require children to be 5 by September 1 for Kindergarten enrollment. However, some states differ: Michigan and New York use December 1, Connecticut and Vermont use January 1, Hawaii uses July 31, Missouri and Nebraska use July 31, Arkansas and Indiana use August 1. Always check with your local school district as some districts have their own cutoff dates within state guidelines."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">Common Questions</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Everything parents and students need to know about school age requirements.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-amber-50/60 transition-colors text-left"
                aria-expanded={open === i}
              >
                <h3 className="font-semibold text-slate-800 text-base leading-snug pr-4">{faq.q}</h3>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "600px" : "0px" }}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-amber-50 bg-amber-50/30">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
