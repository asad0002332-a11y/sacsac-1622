import { useState, useRef } from "react";
import { calculate, Country, CalculatorResult, USA_STATES, AUSTRALIA_STATES, CANADA_PROVINCES } from "../lib/calculator";

const COUNTRIES: { value: Country; label: string; flag: string }[] = [
  { value: "USA",       label: "United States",  flag: "🇺🇸" },
  { value: "UK",        label: "United Kingdom", flag: "🇬🇧" },
  { value: "Australia", label: "Australia",      flag: "🇦🇺" },
  { value: "Canada",    label: "Canada",         flag: "🇨🇦" },
];

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}
function PrintIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
    </svg>
  );
}

function ResultCard({ result, name }: { result: CalculatorResult; name: string }) {
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const { ageExact, schoolJourneyPercent, isTooOld, isPreSchool, isTooYoung } = result;

  const gradeColor = isPreSchool || isTooYoung ? "text-blue-600"
    : isTooOld ? "text-slate-500" : "text-amber-600";

  const ageStr = [
    ageExact.years > 0 ? `${ageExact.years} yr` : "",
    ageExact.months > 0 ? `${ageExact.months} mo` : "",
    ageExact.days > 0 ? `${ageExact.days} d` : "",
  ].filter(Boolean).join(" ") || "< 1 day";

  const handleCopy = () => {
    const namePrefix = name ? `${name}'s Result\n` : "";
    const text = `${namePrefix}School Age Calculator Result
Country: ${result.country} — ${result.region}
Grade / Year: ${result.gradeLabel}
Current Age: ${ageStr}
School Type: ${result.schoolType}
Enrollment Year: ${result.enrollmentYear} (${result.enrollmentSeason})
Graduation Year: ${result.graduationYear}
Next: ${result.nextMilestone}
🔗 schoolagecalculator.online`;

    // Try modern clipboard API first, fall back to execCommand
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none;";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Last resort: open a small window with the text pre-selected
      const w = window.open("", "_blank", "width=500,height=300");
      if (w) {
        w.document.write(`<html><body style="font-family:sans-serif;padding:20px;">
          <h3 style="margin-bottom:12px;color:#D97706;">Copy this result:</h3>
          <textarea style="width:100%;height:180px;font-size:13px;padding:8px;border:2px solid #FDE68A;border-radius:8px;" onclick="this.select()">${text}</textarea>
          <p style="color:#64748B;font-size:12px;margin-top:8px;">Press Ctrl+C (or Cmd+C) to copy</p>
        </body></html>`);
        w.document.close();
      }
    } finally {
      document.body.removeChild(ta);
    }
  };

  const handleShare = () => {
    const namePrefix = name ? `${name}'s ` : "";
    const shareText = `${namePrefix}Grade: ${result.currentGrade} — ${result.gradeLabel}. Graduation: ${result.graduationYear}`;
    // Web Share API — works on mobile/HTTPS
    if (navigator.share) {
      navigator.share({
        title: "School Age Calculator Result",
        text: shareText,
        url: "https://schoolagecalculator.online",
      }).catch(() => handleCopy()); // user dismissed or failed → fall back to copy
    } else {
      // Desktop fallback: open share options
      const encoded = encodeURIComponent(shareText + " https://schoolagecalculator.online");
      const shareUrl = `https://twitter.com/intent/tweet?text=${encoded}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handlePrint = () => {
    const node = resultRef.current;
    if (!node) return;

    const clone = node.cloneNode(true) as HTMLElement;
    // Remove action buttons
    clone.querySelectorAll(".grid.grid-cols-3").forEach(el => el.remove());

    const printWindow = window.open("", "_blank", "width=700,height=900");
    if (!printWindow) return;

    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>School Age Calculator — Result</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Source Sans 3', sans-serif; background: #fff; padding: 32px; max-width: 560px; margin: 0 auto; color: #1E293B; }
    h1,h2,h3,h4,h5,h6 { font-family: 'Nunito', sans-serif; }

    /* Header */
    .print-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid #FDE68A; }
    .print-header img { width: 48px; height: 48px; }
    .print-header-text h2 { font-size: 20px; font-weight: 900; color: #1E293B; }
    .print-header-text p  { font-size: 12px; color: #92400E; }

    /* Tailwind-like utility resets for cloned card */
    .rounded-2xl  { border-radius: 1rem; }
    .rounded-xl   { border-radius: 0.75rem; }
    .rounded-lg   { border-radius: 0.5rem; }
    .rounded-full { border-radius: 9999px; }
    .overflow-hidden { overflow: hidden; }
    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06); }
    .border-2   { border-width: 2px; }
    .border     { border-width: 1px; }
    .border-amber-200 { border-color: #FDE68A; }
    .border-amber-100 { border-color: #FEF3C7; }
    .border-slate-200 { border-color: #E2E8F0; }
    .border-blue-100  { border-color: #DBEAFE; }
    .border-green-100 { border-color: #DCFCE7; }
    .bg-white  { background: #fff; }
    .bg-amber-50  { background: #FFFBEB; }
    .bg-blue-50   { background: #EFF6FF; }
    .bg-green-50  { background: #F0FDF4; }
    .bg-slate-50  { background: #F8FAFC; }
    .bg-slate-100 { background: #F1F5F9; }
    .text-white   { color: #fff; }
    .text-slate-800 { color: #1E293B; }
    .text-slate-700 { color: #334155; }
    .text-slate-600 { color: #475569; }
    .text-slate-500 { color: #64748B; }
    .text-slate-400 { color: #94A3B8; }
    .text-amber-500 { color: #F59E0B; }
    .text-amber-600 { color: #D97706; }
    .text-blue-600  { color: #2563EB; }
    .text-green-600 { color: #16A34A; }
    .text-green-700 { color: #15803D; }
    .font-extrabold { font-weight: 800; }
    .font-bold      { font-weight: 700; }
    .font-semibold  { font-weight: 600; }
    .text-5xl  { font-size: 3rem; line-height: 1; }
    .text-xl   { font-size: 1.25rem; }
    .text-sm   { font-size: 0.875rem; }
    .text-xs   { font-size: 0.75rem; }
    .text-\\[10px\\] { font-size: 10px; }
    .text-lg   { font-size: 1.125rem; }
    .text-2xl  { font-size: 1.5rem; }
    .uppercase { text-transform: uppercase; }
    .tracking-widest { letter-spacing: 0.1em; }
    .leading-none { line-height: 1; }
    .mb-1  { margin-bottom: 0.25rem; }
    .mb-0\\.5 { margin-bottom: 0.125rem; }
    .mt-0\\.5 { margin-top: 0.125rem; }
    .mt-1  { margin-top: 0.25rem; }
    .p-5   { padding: 1.25rem; }
    .p-3   { padding: 0.75rem; }
    .px-2  { padding-left: 0.5rem; padding-right: 0.5rem; }
    .py-1\\.5 { padding-top: 0.375rem; padding-bottom: 0.375rem; }
    .py-2  { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .space-y-4 > * + * { margin-top: 1rem; }
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .flex  { display: flex; }
    .flex-wrap { flex-wrap: wrap; }
    .flex-1  { flex: 1; }
    .items-start { align-items: flex-start; }
    .min-w-\\[60px\\] { min-width: 60px; }
    .text-center { text-align: center; }
    .grid { display: grid; }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .gap-3 { gap: 0.75rem; }
    .h-3 { height: 0.75rem; }
    .h-full { height: 100%; }
    .w-full { width: 100%; }
    .opacity-70 { opacity: 0.7; }
    .opacity-75 { opacity: 0.75; }
    .transition-all { transition: all .15s; }

    /* Progress bar colors */
    .bg-blue-400  { background: #60A5FA; }
    .bg-amber-400 { background: #FBBF24; }
    .bg-green-500 { background: #22C55E; }

    /* Gradient banner */
    .bg-gradient-to-r.from-amber-400.to-orange-400 {
      background: linear-gradient(to right, #FBBF24, #FB923C) !important;
    }

    /* Journey step colors */
    .bg-amber-400.text-white.border-amber-400 { background:#FBBF24!important; color:#fff!important; border-color:#FBBF24!important; }
    .bg-green-100.text-green-700.border-green-200 { background:#DCFCE7!important; color:#15803D!important; border-color:#BBF7D0!important; }
    .bg-slate-50.text-slate-400.border-slate-200 { background:#F8FAFC!important; color:#94A3B8!important; border-color:#E2E8F0!important; }

    /* Footer */
    .print-footer { margin-top: 24px; padding-top: 12px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #94A3B8; text-align: center; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="print-header">
    <img src="${window.location.origin}/logo.svg" alt="SAC"/>
    <div class="print-header-text">
      <h2>School Age Calculator</h2>
      <p>schoolagecalculator.online</p>
    </div>
  </div>
  ${clone.outerHTML}
  <div class="print-footer">Generated by schoolagecalculator.online &nbsp;|&nbsp; ${new Date().toLocaleDateString()}</div>
  <script>
    window.onload = function() { window.print(); }
  </script>
</body>
</html>`);
    printWindow.document.close();
  };

  const progressColor = schoolJourneyPercent < 33 ? "bg-blue-400"
    : schoolJourneyPercent < 66 ? "bg-amber-400" : "bg-green-500";

  return (
    <div ref={resultRef} className="mt-6 rounded-2xl border-2 border-amber-200 overflow-hidden shadow-md animate-result">
      {/* Grade banner */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-5 text-white text-center relative">
        <div className="text-xs font-bold uppercase tracking-widest opacity-75 mb-1">
          {result.country} · {result.region}
        </div>
        <div className={`text-5xl font-extrabold mb-1 ${isTooOld ? "text-white/70" : "text-white"}`}>
          {result.currentGrade}
        </div>
        {name && <div className="text-amber-100 text-sm font-semibold">{name}'s result</div>}
        <div className="text-white font-semibold mt-1">{result.gradeLabel}</div>
        <div className="text-amber-100 text-sm mt-0.5">{result.schoolType}</div>
      </div>

      <div className="bg-white p-5 space-y-4">
        {/* Stat grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
            <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Exact Age</div>
            <div className="text-slate-800 font-bold text-sm">{ageStr}</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
            <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Graduation Year</div>
            <div className="text-slate-800 font-bold text-sm">{result.graduationYear ?? "—"}</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
            <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Enrolled Since</div>
            <div className="text-slate-800 font-bold text-sm">{result.isPreSchool ? "Not yet" : result.enrollmentYear}</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
            <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Cutoff Date</div>
            <div className="text-slate-800 font-bold text-sm">{result.cutoffDate}</div>
          </div>
          {!result.isPreSchool && !isTooOld && (
            <>
              <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Years in School</div>
                <div className="text-blue-600 font-bold text-sm">{result.yearsInSchool} year{result.yearsInSchool !== 1 ? "s" : ""}</div>
              </div>
              <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Years to Graduate</div>
                <div className="text-green-600 font-bold text-sm">{result.yearsToGraduation} year{result.yearsToGraduation !== 1 ? "s" : ""}</div>
              </div>
            </>
          )}
        </div>

        {/* School journey progress bar */}
        {!result.isPreSchool && !isTooYoung && (
          <div>
            <div className="flex justify-between text-xs text-slate-500 mb-1 font-semibold">
              <span>School Journey</span>
              <span>{schoolJourneyPercent}% complete</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${progressColor}`}
                style={{ width: `${schoolJourneyPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Start</span><span>Graduation</span>
            </div>
          </div>
        )}

        {/* Journey milestones */}
        {!result.isPreSchool && !isTooYoung && result.journeySteps.length > 0 && (
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Key Milestones</div>
            <div className="flex gap-1 flex-wrap">
              {result.journeySteps.map((step, i) => (
                <div key={i} className={`flex-1 min-w-[60px] text-center px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  step.current
                    ? "bg-amber-400 text-white border-amber-400 shadow"
                    : step.done
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-slate-50 text-slate-400 border-slate-200"
                }`}>
                  <div>{step.label}</div>
                  <div className="text-[10px] opacity-70">{step.year}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next milestone */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex gap-2 items-start">
          <span className="text-amber-500 text-lg mt-0.5">→</span>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase mb-0.5">Next</div>
            <div className="text-slate-700 text-sm font-semibold">{result.nextMilestone}</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all"
          >
            <CopyIcon />{copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all"
          >
            <ShareIcon />{typeof navigator !== "undefined" && navigator.share ? "Share" : "Tweet"}
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all"
          >
            <PrintIcon />Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [dob, setDob] = useState("");
  const [childName, setChildName] = useState("");
  const [country, setCountry] = useState<Country>("USA");
  const [region, setRegion] = useState("CA");
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [error, setError] = useState("");

  const regionOptions = () => {
    if (country === "USA") return Object.entries(USA_STATES).map(([k, v]) => ({ value: k, label: v.name }));
    if (country === "Australia") return Object.entries(AUSTRALIA_STATES).map(([k, v]) => ({ value: k, label: v.name }));
    if (country === "Canada") return Object.entries(CANADA_PROVINCES).map(([k, v]) => ({ value: k, label: v.name }));
    return [];
  };

  const handleCountryChange = (c: Country) => {
    setCountry(c);
    setResult(null);
    if (c === "USA") setRegion("CA");
    else if (c === "Australia") setRegion("NSW");
    else if (c === "Canada") setRegion("ON");
    else setRegion("");
  };

  const handleCalculate = () => {
    if (!dob) { setError("Please enter a date of birth."); return; }
    const dobDate = new Date(dob + "T00:00:00");
    if (isNaN(dobDate.getTime())) { setError("Invalid date."); return; }
    if (dobDate > new Date()) { setError("Date of birth cannot be in the future."); return; }
    setError("");
    setResult(calculate(dobDate, country, region));
    // Smooth scroll to result on mobile
    setTimeout(() => {
      document.getElementById("calc-result")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleReset = () => {
    setDob("");
    setChildName("");
    setResult(null);
    setError("");
  };

  const maxDate = new Date().toISOString().split("T")[0];
  const minDate = new Date(new Date().getFullYear() - 30, 0, 1).toISOString().split("T")[0];

  return (
    <section id="calculator" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-white py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg className="absolute top-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="#F59E0B" />
          <circle cx="300" cy="100" r="80" fill="#FDE68A" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-64 h-64 opacity-10" viewBox="0 0 300 300">
          <circle cx="100" cy="200" r="120" fill="#F59E0B" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#92400e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div className="hero-text lg:pt-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🎓 Free Tool — No Sign Up Required
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="School Age Calculator" className="w-14 h-14 flex-shrink-0 drop-shadow-md" />
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Official Tool</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
              Free <span className="text-amber-500">School Age</span><br />Calculator
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Find out what grade your child is in, when they start school, their graduation year, and full school journey — instantly. Covers <strong>USA, UK, Australia & Canada</strong>.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              {["✅ All 50 US States", "✅ UK Year Groups", "✅ Australian States", "✅ Canadian Provinces"].map(f => (
                <span key={f} className="bg-white border border-amber-200 rounded-full px-4 py-1.5 font-medium shadow-sm">{f}</span>
              ))}
            </div>
            {/* Features list */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: "📅", label: "Exact age in years, months & days" },
                { icon: "🎓", label: "Graduation year calculator" },
                { icon: "📊", label: "School journey progress bar" },
                { icon: "🗺️", label: "Key milestone timeline" },
                { icon: "📋", label: "Copy & share your result" },
                { icon: "🖨️", label: "Print-friendly result card" },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-slate-600 bg-white rounded-xl px-3 py-2 border border-amber-100 shadow-sm">
                  <span>{f.icon}</span><span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calculator */}
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-extrabold text-slate-800">Calculate Now</h2>
              {result && (
                <button onClick={handleReset} className="text-xs text-slate-400 hover:text-amber-500 font-semibold border border-slate-200 rounded-lg px-3 py-1.5 transition-colors">
                  ↺ Reset
                </button>
              )}
            </div>

            {/* Country selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              {COUNTRIES.map(c => (
                <button
                  key={c.value}
                  onClick={() => handleCountryChange(c.value)}
                  className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl border-2 text-sm font-semibold transition-all ${
                    country === c.value
                      ? "border-amber-400 bg-amber-50 text-amber-700 shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50/50"
                  }`}
                >
                  <span className="text-2xl">{c.flag}</span>
                  <span className="text-xs leading-tight text-center">{c.label}</span>
                </button>
              ))}
            </div>

            {/* Child name (optional) */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Child's Name <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={childName}
                onChange={e => setChildName(e.target.value)}
                placeholder="e.g. Emma"
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all text-base placeholder:text-slate-300"
              />
            </div>

            {/* Date of birth */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Date of Birth <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                value={dob}
                onChange={e => setDob(e.target.value)}
                min={minDate}
                max={maxDate}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all text-base"
              />
            </div>

            {/* Region selector */}
            {regionOptions().length > 0 && (
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  {country === "USA" ? "State" : country === "Australia" ? "State / Territory" : "Province / Territory"}
                  <span className="text-red-400"> *</span>
                </label>
                <select
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all text-base bg-white"
                >
                  {regionOptions().map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {error && (
              <p className="text-red-500 text-sm mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
                <span>⚠️</span>{error}
              </p>
            )}

            <button
              onClick={handleCalculate}
              className="w-full bg-amber-400 hover:bg-amber-500 active:scale-95 text-white font-extrabold py-4 rounded-2xl text-lg transition-all shadow-md hover:shadow-lg"
            >
              Calculate School Grade →
            </button>

            {/* Result */}
            <div id="calc-result">
              {result && <ResultCard result={result} name={childName} />}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes resultIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .animate-result { animation: resultIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both; }


      `}</style>
    </section>
  );
}
