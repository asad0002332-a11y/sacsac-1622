import { Link, useLocation } from "wouter";

const articles = [
  {
    flag: "🇺🇸",
    tag: "United States",
    tagColor: "bg-blue-100 text-blue-700",
    title: "School Starting Ages in the US: A Complete State-by-State Guide (2025)",
    excerpt: "Kindergarten cutoff dates vary dramatically across all 50 states — from July 31 in Hawaii to December 1 in Michigan. Learn the exact rules for your state so you're never caught off guard during enrollment season.",
    readTime: "6 min read",
    topics: ["Kindergarten Age", "Cutoff Dates", "School Enrollment"],
    href: "/guides/usa",
  },
  {
    flag: "🇬🇧",
    tag: "United Kingdom",
    tagColor: "bg-indigo-100 text-indigo-700",
    title: "UK School Year Groups Explained: Ages, Key Stages & Year Numbers",
    excerpt: "From Reception at age 4 to Year 13 at age 18, the UK school system has its own unique structure. Discover how the Key Stage system works, when GCSEs and A-Levels happen, and how UK years compare to US grades.",
    readTime: "5 min read",
    topics: ["Year Groups", "Key Stages", "GCSEs & A-Levels"],
    href: "/guides/uk",
  },
  {
    flag: "🇦🇺",
    tag: "Australia",
    tagColor: "bg-green-100 text-green-700",
    title: "When Does My Child Start School in Australia? Complete State Guide",
    excerpt: "Is it Kindergarten, Prep, Pre-primary, Reception, or Transition? Every Australian state calls the first year of school something different — and uses a different age cutoff. Here's the definitive guide for Aussie parents.",
    readTime: "5 min read",
    topics: ["Prep/Kindergarten", "State Cutoffs", "School Entry"],
    href: "/guides/australia",
  },
  {
    flag: "🇨🇦",
    tag: "Canada",
    tagColor: "bg-red-100 text-red-700",
    title: "Canada Kindergarten Age by Province: What Every Parent Needs to Know",
    excerpt: "Ontario's Junior Kindergarten starts at age 4. Quebec has la maternelle. Alberta has an early March cutoff. Each province has its own rules — this guide breaks down every province and territory so you always know when your child is eligible.",
    readTime: "6 min read",
    topics: ["JK & Kindergarten", "Province Rules", "School Readiness"],
    href: "/guides/canada",
  },
];

export default function Blog() {
  const [, navigate] = useLocation();

  return (
    <section id="articles" className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-200 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">In-Depth Guides</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">School Age Guides by Country</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Deep-dive articles on school enrollment rules, age requirements, and grade structures.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <Link key={i} href={article.href}>
              <a className="block bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{article.flag}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${article.tagColor}`}>{article.tag}</span>
                    <span className="text-xs text-slate-400 ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug mb-3 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map(t => (
                      <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <span className="block w-full text-center text-amber-600 font-semibold text-sm border border-amber-200 group-hover:border-amber-400 rounded-xl py-2.5 transition-colors bg-amber-50 group-hover:bg-amber-100">
                    Read Guide →
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
