import { Link } from "wouter";
import PageSEO from "../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Cookie Policy | School Age Calculator"
        description="What cookies School Age Calculator uses, how third-party services like Google Analytics and Cloudflare use them, and how you can control or disable cookies."
        canonical={`${BASE}/cookies`}
        type="website"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
            { "@type": "ListItem", "position": 2, "name": "Cookie Policy", "item": `${BASE}/cookies` }
          ]
        }]}
      />
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/"><a className="flex items-center gap-2.5"><img src="/logo.svg" alt="SAC" className="w-9 h-9" /><span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span></a></Link>
          <Link href="/"><a className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← Home</a></Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="mb-10">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Legal</span>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Cookie Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-slate-700">This Cookie Policy explains how <strong>School Age Calculator</strong> ("we", "us", or "our") uses cookies and similar tracking technologies when you visit <strong>schoolagecalculator.online</strong>. By using our Website, you consent to the use of cookies as described in this policy.</p>
          </section>

          <Section title="1. What Are Cookies?">
            <p>Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.</p>
            <p className="mt-3">Cookies can be:</p>
            <ul>
              <li><strong>Session cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
              <li><strong>First-party cookies:</strong> Set directly by School Age Calculator</li>
              <li><strong>Third-party cookies:</strong> Set by third-party services we use (e.g., analytics providers)</li>
            </ul>
          </Section>

          <Section title="2. How We Use Cookies">
            <p>We use cookies for the following purposes:</p>

            <CookieTable cookies={[
              { name: "Preference Cookies", purpose: "Remember your selected country/region so you don't have to re-select on return visits", duration: "30 days", type: "First-party" },
              { name: "Analytics Cookies", purpose: "Collect anonymous data on how visitors use the site (pages visited, time spent, click patterns) to help us improve the user experience", duration: "Up to 2 years", type: "Third-party (Google Analytics)" },
              { name: "Performance Cookies", purpose: "Help us understand how the Website performs and identify any technical issues", duration: "Session", type: "First-party / Third-party" },
              { name: "Security Cookies", purpose: "Protect against fraudulent activity and help ensure the security of the Website", duration: "Session", type: "Third-party (Cloudflare)" },
            ]} />
          </Section>

          <Section title="3. Specific Third-Party Cookies">
            <p>The following third-party services place cookies on your device when you visit our Website:</p>

            <div className="space-y-4 mt-3">
              <ThirdPartyCard
                icon="📊"
                name="Google Analytics"
                description="We use Google Analytics to understand how visitors interact with our Website. Google Analytics uses cookies to collect anonymous usage data such as pages visited, time on site, and referral source. This data is aggregated and cannot be used to identify individual users."
                link="https://policies.google.com/privacy"
                linkText="Google Privacy Policy"
                optOut="https://tools.google.com/dlpage/gaoptout"
                optOutText="Google Analytics Opt-Out"
              />
              <ThirdPartyCard
                icon="🔤"
                name="Google Fonts"
                description="We use Google Fonts to load custom web fonts (Nunito and Source Sans 3). When your browser loads these fonts, a request is made to Google's servers, which may log your IP address. No cookies are set by Google Fonts, but network requests are made."
                link="https://developers.google.com/fonts/faq/privacy"
                linkText="Google Fonts Privacy FAQ"
              />
              <ThirdPartyCard
                icon="🛡️"
                name="Cloudflare"
                description="We use Cloudflare for website hosting, performance optimization, and security (DDoS protection). Cloudflare may set a session cookie (__cf_bm) to distinguish between humans and bots. This cookie does not collect personal information and is necessary for security."
                link="https://www.cloudflare.com/privacypolicy/"
                linkText="Cloudflare Privacy Policy"
              />
            </div>
          </Section>

          <Section title="4. What We Do NOT Use Cookies For">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-semibold text-green-800 mb-3">We want to be clear about what we don't do:</p>
              <ul className="text-green-700 space-y-1">
                <li>✓ We do not use cookies to store personal information entered into the calculator</li>
                <li>✓ We do not use cookies for behavioral advertising or ad targeting</li>
                <li>✓ We do not sell cookie data or tracking data to third parties</li>
                <li>✓ We do not use cookies to track you across other websites</li>
                <li>✓ We do not use cross-site tracking technologies</li>
              </ul>
            </div>
          </Section>

          <Section title="5. Managing & Controlling Cookies">
            <p>You have several options to manage cookies:</p>

            <SubSection title="5.1 Browser Settings">
              <p>Most web browsers allow you to control cookies through their settings. You can:</p>
              <ul>
                <li>View and delete existing cookies</li>
                <li>Block all cookies from being set</li>
                <li>Allow only first-party cookies</li>
                <li>Set up notifications when a cookie is placed</li>
              </ul>
              <p className="mt-3">Links to cookie settings for popular browsers:</p>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                {[
                  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                  { name: "Safari", url: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
                  { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                ].map(b => (
                  <a key={b.name} href={b.url} target="_blank" rel="noopener" className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm hover:border-amber-300 hover:text-amber-600 transition-all">
                    <span className="font-semibold">{b.name}</span>
                    <span className="text-xs text-slate-400">→ Cookie settings</span>
                  </a>
                ))}
              </div>
            </SubSection>

            <SubSection title="5.2 Opt-Out Tools">
              <p>You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-amber-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
              <p className="mt-2">For general advertising cookie opt-outs, visit the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener" className="text-amber-600 hover:underline">Digital Advertising Alliance opt-out tool</a>.</p>
            </SubSection>

            <SubSection title="5.3 Impact of Disabling Cookies">
              <p>If you disable or reject cookies, most features of this Website will still function correctly. However, your country/region preference may not be remembered between visits, and our ability to improve the Website based on usage patterns will be limited.</p>
            </SubSection>
          </Section>

          <Section title="6. Do Not Track Signals">
            <p>Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. We respect DNT signals where technically feasible and do not engage in cross-site tracking.</p>
          </Section>

          <Section title="7. Cookie Policy for EU/EEA/UK Users">
            <p>If you are located in the European Union, European Economic Area, or United Kingdom, you have rights under GDPR and UK GDPR regarding cookies that collect personal data. You have the right to:</p>
            <ul>
              <li>Give informed consent before non-essential cookies are placed</li>
              <li>Withdraw consent at any time by adjusting your browser settings</li>
              <li>Request information about what cookies we use</li>
            </ul>
            <p className="mt-3">Essential cookies (security, basic functionality) do not require consent. Analytics and preference cookies are non-essential and can be disabled.</p>
          </Section>

          <Section title="8. Changes to This Cookie Policy">
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will update the "Last updated" date at the top of this page when changes are made. We encourage you to check this page periodically.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have questions about our use of cookies, please contact us:</p>
            <ContactBox />
          </Section>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-slate-800 mb-3 pb-2 border-b border-amber-100">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-slate-700 mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function CookieTable({ cookies }: { cookies: { name: string; purpose: string; duration: string; type: string }[] }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-amber-50">
            <th className="text-left p-3 border border-amber-100 font-bold text-slate-700">Cookie Type</th>
            <th className="text-left p-3 border border-amber-100 font-bold text-slate-700">Purpose</th>
            <th className="text-left p-3 border border-amber-100 font-bold text-slate-700">Duration</th>
            <th className="text-left p-3 border border-amber-100 font-bold text-slate-700">Party</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((c, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="p-3 border border-amber-100 font-semibold text-slate-800">{c.name}</td>
              <td className="p-3 border border-amber-100 text-slate-600">{c.purpose}</td>
              <td className="p-3 border border-amber-100 text-slate-600 whitespace-nowrap">{c.duration}</td>
              <td className="p-3 border border-amber-100 text-slate-600 whitespace-nowrap">{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ThirdPartyCard({ icon, name, description, link, linkText, optOut, optOutText }: {
  icon: string; name: string; description: string; link: string; linkText: string; optOut?: string; optOutText?: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-bold text-slate-800">{name}</h3>
      </div>
      <p className="text-slate-600 text-sm mb-3">{description}</p>
      <div className="flex gap-3 flex-wrap">
        <a href={link} target="_blank" rel="noopener" className="text-xs text-amber-600 hover:underline font-semibold">{linkText} ↗</a>
        {optOut && <a href={optOut} target="_blank" rel="noopener" className="text-xs text-slate-500 hover:underline font-semibold">{optOutText} ↗</a>}
      </div>
    </div>
  );
}

function ContactBox() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 mt-3">
      <div className="grid sm:grid-cols-3 gap-4">
        <a href="mailto:hello@schoolagecalculator.online" className="flex items-center gap-3 bg-white border border-amber-100 rounded-xl p-4 hover:border-amber-300 hover:shadow-sm transition-all">
          <span className="text-2xl">📧</span>
          <div><div className="text-xs text-slate-500 font-semibold uppercase">Email</div><div className="text-sm font-bold text-amber-600">hello@schoolagecalculator.online</div></div>
        </a>
        <a href="https://wa.me/97450195474" target="_blank" rel="noopener" className="flex items-center gap-3 bg-white border border-amber-100 rounded-xl p-4 hover:border-amber-300 hover:shadow-sm transition-all">
          <span className="text-2xl">💬</span>
          <div><div className="text-xs text-slate-500 font-semibold uppercase">WhatsApp</div><div className="text-sm font-bold text-amber-600">+974 5019 5474</div></div>
        </a>
        <div className="flex items-center gap-3 bg-white border border-amber-100 rounded-xl p-4">
          <span className="text-2xl">📍</span>
          <div><div className="text-xs text-slate-500 font-semibold uppercase">Address</div><div className="text-sm font-bold text-slate-700">Jersey City, New Jersey, USA</div></div>
        </div>
      </div>
    </div>
  );
}

function PageFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-14">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <Link href="/"><a className="flex items-center gap-2"><img src="/logo.svg" alt="SAC" className="w-7 h-7"/><span className="text-white font-bold">School Age Calculator</span></a></Link>
        <div className="flex gap-4">
          <Link href="/privacy"><a className="hover:text-amber-400 transition-colors">Privacy Policy</a></Link>
          <Link href="/terms"><a className="hover:text-amber-400 transition-colors">Terms of Use</a></Link>
          <Link href="/cookies"><a className="hover:text-amber-400 transition-colors">Cookie Policy</a></Link>
          <Link href="/contact"><a className="hover:text-amber-400 transition-colors">Contact</a></Link>
        </div>
        <p>© {new Date().getFullYear()} schoolagecalculator.online</p>
      </div>
    </footer>
  );
}
