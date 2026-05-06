import { useState } from "react";
import { Link } from "wouter";

const links = [
  { href: "#calculator", label: "Calculator" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#country-rules", label: "Country Rules" },
  { href: "#faq", label: "FAQ" },
  { href: "#articles", label: "Guides" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" alt="School Age Calculator Logo" className="w-9 h-9 flex-shrink-0 transition-transform group-hover:scale-105" />
          <span className="font-extrabold text-lg leading-tight text-slate-800">
            School Age <span className="text-amber-500">Calculator</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-amber-500 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#calculator" className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors shadow-sm">
            Calculate Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-slate-700 mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-slate-700 mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-slate-700"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-amber-100 bg-white px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-amber-500 py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#calculator"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-400 text-white font-bold px-5 py-2.5 rounded-full text-sm text-center mt-1"
          >
            Calculate Now
          </a>
        </div>
      )}
    </nav>
  );
}
