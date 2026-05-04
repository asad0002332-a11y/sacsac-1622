import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/"><a className="flex items-center gap-2.5 mb-3 group">
              <img src="/logo.svg" alt="School Age Calculator Logo" className="w-10 h-10 flex-shrink-0" />
              <span className="font-extrabold text-lg leading-tight text-white">
                School Age <span className="text-amber-400">Calculator</span>
              </span>
            </a></Link>
            <p className="text-sm leading-relaxed">Free school age calculator for USA, UK, Australia and Canada. Instant results by date of birth.</p>
          </div>

          {/* Calculator */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Calculator</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">School Age Calculator</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#country-rules" className="hover:text-amber-400 transition-colors">Country Rules</a></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Countries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#country-rules" className="hover:text-amber-400 transition-colors">🇺🇸 USA School Ages</a></li>
              <li><a href="#country-rules" className="hover:text-amber-400 transition-colors">🇬🇧 UK Year Groups</a></li>
              <li><a href="#country-rules" className="hover:text-amber-400 transition-colors">🇦🇺 Australia School Ages</a></li>
              <li><a href="#country-rules" className="hover:text-amber-400 transition-colors">🇨🇦 Canada Provinces</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#articles" className="hover:text-amber-400 transition-colors">School Guides</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Legal & Contact</h4>
            <ul className="space-y-2 text-sm mb-5">
              <li><Link href="/privacy"><a className="hover:text-amber-400 transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-amber-400 transition-colors">Terms of Use</a></Link></li>
              <li><Link href="/cookies"><a className="hover:text-amber-400 transition-colors">Cookie Policy</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-amber-400 transition-colors">Contact Us</a></Link></li>
            </ul>
            <div className="space-y-1.5 text-xs">
              <a href="mailto:hello@schoolagecalculator.online" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <span>📧</span>
                <span>hello@schoolagecalculator.online</span>
              </a>
              <a href="https://wa.me/97450195474" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <span>💬</span>
                <span>+974 5019 5474</span>
              </a>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Jersey City, NJ, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} schoolagecalculator.online — All rights reserved.</p>
          <p className="text-center max-w-md">
            <strong className="text-slate-300">Disclaimer:</strong> This calculator provides general guidance based on standard school enrollment rules. Always verify with your local school district for official enrollment requirements.
          </p>
        </div>
      </div>
    </footer>
  );
}
