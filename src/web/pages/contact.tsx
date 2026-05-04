import { Link } from "wouter";
import { useState } from "react";
import PageSEO from "../components/PageSEO";

const BASE = "https://schoolagecalculator.online";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <PageSEO
        title="Contact Us | School Age Calculator"
        description="Contact School Age Calculator for support, to report errors, or suggest features. Email hello@schoolagecalculator.online or WhatsApp +974 5019 5474."
        canonical={`${BASE}/contact`}
        type="website"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${BASE}/contact#contactpage`,
            "url": `${BASE}/contact`,
            "name": "Contact School Age Calculator",
            "description": "Contact page for School Age Calculator. Reach us via email or WhatsApp."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${BASE}/contact` }
            ]
          }
        ]}
      />
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/"><a className="flex items-center gap-2.5"><img src="/logo.svg" alt="SAC" className="w-9 h-9" /><span className="font-extrabold text-lg text-slate-800">School Age <span className="text-amber-500">Calculator</span></span></a></Link>
          <Link href="/"><a className="ml-auto text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">← Home</a></Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="mb-10 text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4">Get In Touch</span>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Contact Us</h1>
          <p className="text-slate-500 max-w-xl mx-auto">Have a question, found an error, or want to suggest a feature? We'd love to hear from you. We typically respond within 1–2 business days.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          <a href="mailto:hello@schoolagecalculator.online"
            className="group flex flex-col items-center text-center bg-white border-2 border-amber-100 rounded-2xl p-7 hover:border-amber-300 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-amber-200 transition-colors">📧</div>
            <h3 className="font-extrabold text-slate-800 mb-1">Email Us</h3>
            <p className="text-sm text-slate-500 mb-3">Send us a message anytime</p>
            <span className="text-sm font-bold text-amber-600 group-hover:underline break-all">hello@schoolagecalculator.online</span>
          </a>

          <a href="https://wa.me/97450195474" target="_blank" rel="noopener"
            className="group flex flex-col items-center text-center bg-white border-2 border-amber-100 rounded-2xl p-7 hover:border-green-300 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-green-200 transition-colors">💬</div>
            <h3 className="font-extrabold text-slate-800 mb-1">WhatsApp</h3>
            <p className="text-sm text-slate-500 mb-3">Chat with us directly</p>
            <span className="text-sm font-bold text-green-600">+974 5019 5474</span>
          </a>

          <div className="flex flex-col items-center text-center bg-white border-2 border-amber-100 rounded-2xl p-7">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">📍</div>
            <h3 className="font-extrabold text-slate-800 mb-1">Address</h3>
            <p className="text-sm text-slate-500 mb-3">Our registered location</p>
            <span className="text-sm font-bold text-slate-700">Jersey City,<br />New Jersey, USA</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Send Us a Message</h2>
          <p className="text-slate-500 text-sm mb-7">Fill out the form below and we'll get back to you as soon as possible.</p>
          <ContactForm />
        </div>

        {/* FAQ Callout */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5">
          <div className="text-4xl">🤔</div>
          <div className="flex-1">
            <h3 className="font-extrabold text-slate-800 mb-1">Looking for quick answers?</h3>
            <p className="text-slate-500 text-sm">Check our FAQ section on the homepage — it covers the most common questions about school age rules, cutoff dates, and how the calculator works.</p>
          </div>
          <Link href="/#faq"><a className="shrink-0 bg-amber-400 hover:bg-amber-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">View FAQ →</a></Link>
        </div>

        {/* Response Topics */}
        <div className="mt-10">
          <h2 className="text-xl font-extrabold text-slate-800 mb-5">What Can We Help With?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🔢", title: "Calculator Error", desc: "Found an incorrect grade level or cutoff date? Let us know and we'll verify and fix it." },
              { icon: "🌍", title: "New Country / Region", desc: "Don't see your country, state, or province? We'd love to add it." },
              { icon: "💡", title: "Feature Request", desc: "Have an idea to make the tool more useful? We're always looking to improve." },
              { icon: "📋", title: "General Enquiry", desc: "Any other questions about the website, our data sources, or how we work." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white border border-amber-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: "" }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");

    // Build mailto URL as fallback — opens email client
    const subject = encodeURIComponent(form.subject || `Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:hello@schoolagecalculator.online?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // Show success after short delay
    setTimeout(() => setStatus("sent"), 500);
  }

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-extrabold text-slate-800 mb-2">Message Ready!</h3>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto">Your email client has opened with your message pre-filled. Just hit Send!</p>
        <button onClick={() => setStatus("idle")} className="text-sm text-amber-600 hover:underline font-semibold">← Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your Name *" error={errors.name}>
          <input
            name="name" type="text" value={form.name} onChange={handleChange}
            placeholder="Jane Smith"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white outline-none transition-all ${errors.name ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"}`}
          />
        </Field>
        <Field label="Your Email *" error={errors.email}>
          <input
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="jane@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white outline-none transition-all ${errors.email ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"}`}
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject}>
        <select
          name="subject" value={form.subject} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-amber-200 text-sm bg-white outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
        >
          <option value="">Select a topic...</option>
          <option value="Calculator Error">Calculator Error</option>
          <option value="New Country / Region Request">New Country / Region Request</option>
          <option value="Feature Request">Feature Request</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Privacy / Legal">Privacy / Legal</option>
          <option value="Other">Other</option>
        </select>
      </Field>

      <Field label="Message *" error={errors.message}>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          rows={5} placeholder="Describe your question or issue in detail..."
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white outline-none transition-all resize-none ${errors.message ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-amber-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"}`}
        />
        <p className="text-xs text-slate-400 mt-1">{form.message.length} / 2000 characters</p>
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 disabled:bg-amber-200 text-white font-extrabold rounded-xl transition-colors text-sm shadow-sm"
      >
        {status === "sending" ? "Opening email client..." : "Send Message →"}
      </button>

      <p className="text-xs text-slate-400">This form opens your email client with your message pre-filled. Alternatively, email us directly at <a href="mailto:hello@schoolagecalculator.online" className="text-amber-500 hover:underline">hello@schoolagecalculator.online</a></p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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
