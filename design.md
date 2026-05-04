# Design System — School Age Calculator

## Brand
- Site: schoolagecalculator.online
- Voice: Warm, trustworthy, approachable — a helpful parent friend, not a government form

## Colors (CSS variables in styles.css)
- Primary: `#F59E0B` (amber-400) — buttons, highlights, CTAs
- Primary Dark: `#D97706` (amber-600) — hover states
- Accent: `#FDE68A` (amber-200) — background tints, badges
- Accent Light: `#FFFBEB` (amber-50) — hero bg, section tints
- Text Primary: `#1E293B` (slate-800)
- Text Secondary: `#475569` (slate-600)
- Text Muted: `#94A3B8` (slate-400)
- Background: `#FFFFFF`
- Border: `#E2E8F0` (slate-200)
- Success: `#10B981` (emerald-500) — result display

## Typography
- Display: `Nunito` — headings, hero, calculator labels (Google Fonts)
- Body: `Source Sans 3` — paragraphs, FAQs, tables (Google Fonts)
- Monospace: system-mono — grade/year output badges

## Spacing
- Section padding: `py-20` (5rem top/bottom)
- Container max-width: `max-w-6xl mx-auto px-4`
- Card gap: `gap-6`

## Components
- Buttons: rounded-full, amber bg, white text, px-8 py-3, font-bold
- Cards: white bg, subtle border, rounded-2xl, shadow-sm
- Badges: amber-100 bg, amber-800 text, rounded-full, text-sm font-semibold
- Inputs: rounded-xl, border-slate-200, focus:ring-amber-400
- Tabs: underline style, amber active indicator

## Motion
- Page load: staggered fade-up on hero elements (0ms, 100ms, 200ms delays)
- Calculator result: scale-in + fade when result appears
- Accordion: smooth height transition
- Section entrance: fade-up on scroll (Intersection Observer)

## Hero
- Full-width, warm amber-50 to white gradient background
- Subtle SVG pattern overlay (dots/circles)
- Calculator card: white, rounded-3xl, shadow-lg, centered or right-aligned
- H1: 56px Nunito ExtraBold, slate-800
- Subhead: 20px Source Sans 3, slate-600

## Sections
- Alternating: white bg / amber-50 bg
- H2: 36px Nunito Bold, slate-800
- H3: 22px Nunito SemiBold, slate-700
