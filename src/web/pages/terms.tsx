import { Link } from "wouter";
import PageSEO from "../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Terms of Use | School Age Calculator"
        description="Terms and conditions for using School Age Calculator. The tool is provided free of charge for informational purposes. Governed by New Jersey law."
        canonical={`${BASE}/terms`}
        type="website"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
            { "@type": "ListItem", "position": 2, "name": "Terms of Use", "item": `${BASE}/terms` }
          ]
        }]}
      />
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="SAC" className="w-9 h-9" />
            <span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span>
          </Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="mb-10">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Legal</span>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Terms of Use</h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-slate-700">Please read these Terms of Use ("Terms") carefully before using the <strong>School Age Calculator</strong> website located at <strong>schoolagecalculator.online</strong> ("the Website"), operated by School Age Calculator ("we", "us", or "our"). By accessing or using our Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our Website.</p>
          </section>

          <Section title="1. Acceptance of Terms">
            <p>By using this Website, you confirm that you are at least 13 years of age and have the legal capacity to enter into these Terms. If you are using this Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>School Age Calculator provides a free online tool that helps parents, educators, and guardians determine the appropriate school grade level and enrollment year for children based on their date of birth. We provide this information for the following countries and their respective states, provinces, or regions:</p>
            <ul>
              <li>United States of America (all 50 states)</li>
              <li>United Kingdom (England, Scotland, Wales, Northern Ireland)</li>
              <li>Australia (all states and territories)</li>
              <li>Canada (all provinces and territories)</li>
            </ul>
            <p className="mt-3">The service is provided free of charge and is intended for informational purposes only.</p>
          </Section>

          <Section title="3. Disclaimer of Warranties">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 font-semibold text-amber-800">
              THE WEBSITE AND ALL CONTENT, TOOLS, AND INFORMATION ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </div>
            <p className="mt-4">We specifically disclaim all warranties including, but not limited to:</p>
            <ul>
              <li>The accuracy, completeness, or reliability of school enrollment rules, grade levels, or cutoff dates presented on this Website</li>
              <li>That the information will be up to date or reflect recent changes to education legislation or policies</li>
              <li>That the Website will be uninterrupted, error-free, or free from viruses or other harmful components</li>
              <li>That the results produced by the calculator are appropriate for your specific situation</li>
            </ul>
            <p className="mt-4 font-semibold">School enrollment rules vary by school district, jurisdiction, and academic year. Always verify enrollment requirements directly with your local school district, school board, or educational authority before making any decisions.</p>
          </Section>

          <Section title="4. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, School Age Calculator, its owners, operators, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul>
              <li>Your use of or inability to use the Website or its tools</li>
              <li>Any errors or omissions in the content or calculator results</li>
              <li>Any decisions made based on information from this Website</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any third-party content or services linked from this Website</li>
            </ul>
            <p className="mt-3">This limitation applies even if we have been advised of the possibility of such damages. In jurisdictions that do not allow exclusion of implied warranties or limitation of liability, our liability is limited to the maximum extent permitted by law.</p>
          </Section>

          <Section title="5. Accuracy of Information">
            <p>While we strive to maintain accurate and current information about school enrollment ages and grade levels, we make no representations or guarantees about the completeness, accuracy, or timeliness of such information. Education policies and cutoff dates may change, vary by school district, or differ from the general rules we present.</p>
            <p className="mt-3">We strongly recommend:</p>
            <ul>
              <li>Contacting your local school district or board of education directly</li>
              <li>Checking the official government education department website for your region</li>
              <li>Consulting with your child's prospective school administrator</li>
              <li>Reviewing any recent changes to education legislation in your jurisdiction</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>All content on this Website, including but not limited to text, graphics, logos, icons, images, and software, is the property of School Age Calculator and is protected by applicable intellectual property laws.</p>
            <p className="mt-3">You are granted a limited, non-exclusive, non-transferable license to:</p>
            <ul>
              <li>Access and use the Website for personal, non-commercial purposes</li>
              <li>Share results from the calculator for personal or educational use</li>
            </ul>
            <p className="mt-3">You may not:</p>
            <ul>
              <li>Reproduce, distribute, or create derivative works of the Website content without written permission</li>
              <li>Scrape or systematically extract data from the Website</li>
              <li>Use any automated tools to access or use the Website</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Website</li>
            </ul>
          </Section>

          <Section title="7. User Conduct">
            <p>When using this Website, you agree not to:</p>
            <ul>
              <li>Use the Website for any unlawful purpose or in violation of any regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Interfere with the proper functioning of the Website</li>
              <li>Use the Website to collect or harvest personal information about others</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </Section>

          <Section title="8. Third-Party Links">
            <p>This Website may contain links to third-party websites for additional reference or information. These links are provided for convenience only. We do not endorse, control, or take responsibility for the content, privacy practices, or accuracy of any third-party website. Visiting linked websites is at your own risk.</p>
          </Section>

          <Section title="9. Privacy">
            <p>Your use of this Website is also governed by our <Link href="/privacy" className="text-amber-600 hover:underline font-semibold">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.</p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. The "Last updated" date at the top of this page indicates when these Terms were last revised. Your continued use of the Website after any changes constitutes your acceptance of the new Terms.</p>
          </Section>

          <Section title="11. Governing Law & Jurisdiction">
            <p>These Terms shall be governed by and construed in accordance with the laws of the <strong>State of New Jersey, United States of America</strong>, without regard to its conflict of law provisions.</p>
            <p className="mt-3">Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Hudson County, New Jersey, USA</strong>. If you are accessing this Website from outside the United States, you are responsible for compliance with applicable local laws.</p>
          </Section>

          <Section title="12. Severability">
            <p>If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole. Such provisions shall be deleted without affecting the remaining provisions herein.</p>
          </Section>

          <Section title="13. Entire Agreement">
            <p>These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and School Age Calculator regarding your use of the Website, superseding any prior agreements.</p>
          </Section>

          <Section title="14. Contact Us">
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

function ContactBox() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
      <p className="text-slate-700">If you have any questions about these Terms of Use, please contact us:</p>
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
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SAC" className="w-7 h-7" />
          <span className="text-white font-bold">School Age Calculator</span>
        </Link>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Use</Link>
          <Link href="/cookies" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} schoolagecalculator.online</p>
      </div>
    </footer>
  );
}
