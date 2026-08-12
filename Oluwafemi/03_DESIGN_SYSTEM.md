# Oluwafemi — Design System

## Design Philosophy

The design should feel:

**Dark. Editorial. Technical. Premium. Human.**

Avoid turning the entire website into a "developer aesthetic."

The technical elements are supporting details.

The actual design quality should come from:

- typography
- spacing
- imagery
- composition
- contrast
- hierarchy

---

# Tailwind Color System

Use Tailwind's native colors.

Do not create unnecessary custom hex variables.

---

## Backgrounds

Page:

`bg-slate-950`

Primary surface:

`bg-slate-900`

Secondary surface:

`bg-slate-800`

Subtle surface:

`bg-slate-900/60`

---

## Text

Primary:

`text-slate-100`

Secondary:

`text-slate-300`

Muted:

`text-slate-400`

Quiet:

`text-slate-500`

---

## Borders

Default:

`border-slate-800`

Strong:

`border-slate-700`

Subtle:

`border-slate-800/60`

---

# Accent

Primary accent:

`cyan`

Use:

`text-cyan-400`

`bg-cyan-400`

`border-cyan-400/30`

Hover:

`hover:bg-cyan-300`

The cyan accent should be used selectively.

It should feel like a signal, not the entire brand color.

---

# Secondary Accent

Use Tailwind amber for occasional editorial warmth:

`text-amber-300`

`bg-amber-300`

`border-amber-300/30`

Do not use cyan and amber heavily inside the same component.

---

# Typography

## Display

Use:

**Space Grotesk**

For:

- hero
- major headings
- project titles
- large statements

---

## Body

Use:

**Inter**

For:

- paragraphs
- navigation
- buttons
- forms
- UI

---

## Technical

Use:

**JetBrains Mono**

For:

- build numbers
- project metadata
- technical labels
- stack indicators

Use sparingly.

---

# Typography Scale

Hero:

`text-5xl sm:text-6xl lg:text-8xl`

Section heading:

`text-3xl sm:text-4xl lg:text-6xl`

Project title:

`text-3xl sm:text-4xl lg:text-5xl`

Body:

`text-base sm:text-lg`

Metadata:

`text-xs uppercase tracking-[0.18em]`

---

# Layout

Main container:

`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10`

Large section:

`py-24 sm:py-32 lg:py-40`

Normal section:

`py-20 sm:py-24`

---

# Grid

Two columns:

`grid grid-cols-1 gap-6 md:grid-cols-2`

Three columns:

`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`

---

# Cards

Standard:

`rounded-2xl border border-slate-800 bg-slate-900/70`

Featured:

`rounded-3xl border border-slate-800 bg-slate-900`

Cards should not dominate every section.

Use open layouts where possible.

---

# Buttons

Primary:

`inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300`

Secondary:

`inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-slate-100 transition hover:border-slate-500 hover:bg-slate-900`

---

# Navbar

Fixed:

`fixed inset-x-0 top-4 z-50`
Navbar(“floating navbar” or “pill navbar” style.)
A modern glassmorphism-style navbar: a translucent, blurred pill-shaped bar with soft shadowing and a polished floating effect

Inner:

`mx-auto flex max-w-5xl items-center justify-between rounded-full border border-slate-800 bg-slate-950/80 px-4 py-3 backdrop-blur-xl`

Keep it compact.

---

# Images

Project image wrapper:

`overflow-hidden rounded-2xl`

Image:

`h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]`

Use real screenshots and project imagery.

---

# Borders

Borders should be subtle.

Avoid bright outlines around everything.

---

# Background Texture

Use subtle radial gradients only where necessary.

Example:

`bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%)]`

Do not create a page full of glowing gradients.

---

# Responsive Philosophy

Mobile is not simply a smaller desktop.

On mobile prioritize:

1. Hero message
2. CTA
3. Project visuals
4. readability
5. contact

Prevent horizontal overflow.

---

# Accessibility

Ensure:

- semantic HTML
- visible focus states
- good contrast
- alt text
- keyboard navigation
- reduced motion
- comfortable touch targets