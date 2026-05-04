import { Link } from "wouter";
import PageSEO from "../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Privacy Policy | School Age Calculator"
        description="How School Age Calculator collects, uses, and protects your information. We process calculator inputs entirely in your browser — never stored on our servers."
        canonical={`${BASE}/privacy`}
        type="website"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${BASE}/privacy` }
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
          <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <div className="prose-custom space-y-8 text-slate-700 leading-relaxed">

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-slate-700">This Privacy Policy explains how <strong>School Age Calculator</strong> ("we", "us", or "our"), operated at <strong>schoolagecalculator.online</strong>, collects, uses, and protects any information you provide when using our website. We are committed to protecting your privacy and handling your data transparently.</p>
          </section>

          <Section title="1. Information We Collect">
            <p>We collect two types of information:</p>
            <SubSection title="1.1 Information You Provide">
              <ul>
                <li><strong>Date of Birth:</strong> Entered into the calculator to determine school grade levels. This data is processed entirely in your browser and is never transmitted to our servers.</li>
                <li><strong>Child's Name (Optional):</strong> If entered, used only to personalize the on-screen result. Never stored or transmitted.</li>
                <li><strong>Country and State/Province:</strong> Selected to apply the correct school enrollment rules. Processed locally in your browser only.</li>
                <li><strong>Contact Form Submissions:</strong> If you contact us via email, we collect your name, email address, and message content to respond to your inquiry.</li>
              </ul>
            </SubSection>
            <SubSection title="1.2 Automatically Collected Information">
              <ul>
                <li><strong>Usage Data:</strong> We may collect anonymous data about how you use the website, including pages visited, time spent, and browser type, via analytics tools.</li>
                <li><strong>Log Data:</strong> Our servers automatically record information including your IP address, browser type, referring URL, and pages visited.</li>
                <li><strong>Cookies:</strong> We use cookies for analytics and to improve user experience. See Section 5 for details.</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul>
              <li>To operate and improve the School Age Calculator tool</li>
              <li>To respond to your inquiries or support requests</li>
              <li>To analyze anonymous usage patterns and improve site performance</li>
              <li>To comply with applicable legal obligations</li>
              <li>To protect the security and integrity of our website</li>
            </ul>
            <p className="mt-3 font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
              We do not sell, rent, or trade your personal information to any third parties for marketing purposes.
            </p>
          </Section>

          <Section title="3. Data Storage & Security">
            <p>All calculator inputs (date of birth, child's name, country, state/province) are processed <strong>exclusively in your browser</strong> using JavaScript. This data is never sent to or stored on our servers.</p>
            <p className="mt-3">For any data we do handle (contact form submissions, analytics), we implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We may use the following third-party services which have their own privacy policies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For anonymous website usage statistics. Data is anonymized and aggregated. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-amber-600 hover:underline">Google Privacy Policy</a></li>
              <li><strong>Google Fonts:</strong> For loading web fonts. Google may collect your IP address when fonts are loaded.</li>
              <li><strong>Cloudflare:</strong> For hosting and security. May process IP addresses for DDoS protection.</li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>We use cookies to:</p>
            <ul>
              <li>Remember your country/region preference between visits</li>
              <li>Collect anonymous analytics data to improve the site</li>
              <li>Ensure the security and performance of our website</li>
            </ul>
            <p className="mt-3">You can control or disable cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>Our website is a tool used by parents, educators, and guardians to look up school age information for children. We do not knowingly collect personal information directly from children under the age of 13.</p>
            <p className="mt-3">All calculator inputs are processed locally in the browser and not stored. If you believe a child has provided personal information to us, please contact us immediately at <a href="mailto:hello@schoolagecalculator.online" className="text-amber-600 hover:underline">hello@schoolagecalculator.online</a>.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of personal data we hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data in a machine-readable format</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:hello@schoolagecalculator.online" className="text-amber-600 hover:underline">hello@schoolagecalculator.online</a>.</p>
          </Section>

          <Section title="8. Links to Other Websites">
            <p>Our website may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "last updated" date. We encourage you to review this policy periodically.</p>
          </Section>

          <Section title="10. Contact Us">
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
    <div className="mt-3">
      <h3 className="font-bold text-slate-700 mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function ContactBox() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
      <p className="text-slate-700">If you have any questions about this Privacy Policy, please contact us:</p>
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
