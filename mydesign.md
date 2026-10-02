# Oluwafemi Portfolio — Design System

> Digital work with a clear point of view. A light editorial portfolio where business intent, thoughtful interfaces, and shipped projects take center stage.

## Direction

Use the Bevel reference for its restraint, confident type scale, generous whitespace, calm surfaces, and product-led imagery. Translate those principles into an independent web designer/developer portfolio. Do not reproduce Bevel's wellness language, product story, device mockups, or exact palette.

The first screen should identify Samuel Oluwafemi immediately, state what he builds, and show a real portrait. Project screenshots are the primary evidence of craft. Avoid decorative gradients, generic dashboards, invented client metrics, and repeated card containers.

## Brand Principles

- **Editorial clarity:** strong hierarchy, concise labels, and comfortable reading widths.
- **Proof over claims:** use real portraits, project captures, project features, and case-study writing.
- **Quiet confidence:** prefer typography, composition, and whitespace over glow, blur, and ornamental effects.
- **Conversion awareness:** give every section a clear job and preserve obvious paths to work and contact.
- **Accessible by default:** readable contrast, visible focus, semantic controls, reduced-motion support, and responsive type/layout.

## Color Tokens

| Token | Value | Role |
|---|---|---|
| Paper | `#f7f8f5` | Main light canvas |
| White | `#ffffff` | Navigation, open surfaces, and image surrounds |
| Cloud | `#edf1ed` | Quiet feature and content surfaces |
| Ink | `#202622` | Headings and primary copy |
| Forest | `#285b49` | Primary brand action and key emphasis |
| Forest Deep | `#1c4236` | Hover and dark-mode accent |
| Body | `#626d66` | Supporting copy |
| Muted | `#87918a` | Metadata and secondary labels |
| Line | `rgba(32, 38, 34, .12)` | Fine dividers and quiet borders |
| Brass | `#b8803e` | Small editorial marker only |
| Night | `#111815` | Dark mode canvas |
| Night Surface | `#1a231e` | Dark mode surfaces |

Color is restrained in the shell. Forest green anchors actions and small details; brass is a rare warm counterpoint. The images may carry brighter hues. Never use a large gradient field or gradient text as the primary identity.

## Typography

Use **Space Grotesk** for display and section headings, with **DM Sans** for body, navigation, controls, and metadata. Keep display weights between 500 and 600. Do not use all-caps for paragraphs or long headings.

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Hero | 64–80px desktop, 42–56px mobile | 500–600 | 0.98–1.04 | `-0.045em` |
| Section title | 40–56px | 500–600 | 1.02–1.08 | `-0.04em` |
| Card title | 24–32px | 500–600 | 1.1 | `-0.03em` |
| Body | 16–18px | 400 | 1.65–1.8 | `0` |
| Navigation | 13–15px | 500 | 1.4 | `0` |
| Eyebrow | 10–11px | 600 | 1.3 | `0.14em` |

Prefer fluid layout and line wrapping over viewport-based font scaling. Use `clamp()` only with fixed bounds when it improves a real breakpoint transition.

## Spacing and Shape

- Base spacing unit: 8px.
- Desktop section rhythm: 88–112px vertical padding; mobile: 64–80px.
- Main content width: 1200px maximum, with 24–40px responsive side gutters.
- Text measure: 60–72 characters for paragraphs; 10–14 words per display line where possible.
- Cards: 20–28px radius, restrained border, little or no shadow.
- Controls: capsule buttons; icon controls remain square and stable at 40–48px.
- Images: 14–24px radius; preserve original image aspect ratio when showing project screens.

## Page Structure

1. **Floating capsule navigation:** brand left, centered section links on desktop, theme and primary contact action on the right. Mobile keeps the theme control beside the menu.
2. **Identity-led hero:** large Samuel Oluwafemi headline, concise positioning statement, work/contact actions, availability note, and the real portrait as the primary visual. A small project image may overlap the portrait only as real work proof, not as a fake product dashboard.
3. **Selected work:** generous image-led project tiles with clear project names, type, and case-study affordance. Keep the screenshots inspectable and allow their colors to create variety.
4. **About:** concise point of view and working philosophy, presented unframed or with one subtle cloud surface; do not nest cards.
5. **Services / capabilities:** editorial list or restrained cloud panels, each mapped to an outcome rather than generic skill labels.
6. **Process:** a clear numbered sequence with strong alignment and minimal borders.
7. **Toolbox:** grouped tools in a quiet horizontal/list treatment, not a row of colorful badges.
8. **Contact:** short invitation plus the functional WhatsApp-prefilled contact form.
9. **Footer:** compact identity and social links on a white or paper band.

Project case studies remain separate views and keep challenge, approach, outcome, ordered features, technology, gallery, and live project access.

## Component Styling

### Navigation

White/near-white translucent capsule with 12–20px blur, fine neutral border, modest shadow, 24–32px radius. Text uses Ink/Body, not widely tracked uppercase. Forest is reserved for the primary action and active/focus states.

### Hero

Use the portfolio portrait (`SAM.jpg` or the established hero portrait asset) as a first-viewport signal. The person and name must read before decorative UI. Use a soft sky-to-paper wash behind the actual portrait only if it helps separate the image; never create a synthetic device mockup. Keep the H1 original to Samuel's positioning rather than copying reference wording.

### Work Images

Treat project captures as product evidence. Avoid cropping away important interface regions; use `object-fit: contain` against a quiet neutral frame where screenshots have varying proportions. Hover motion is a subtle 1.02–1.03 image scale only.

### Surfaces and Actions

Prefer unframed section layouts. Use cloud surfaces only for repeated feature groups or genuinely framed interactions. Primary actions use solid Forest with white text; secondary actions are text/icon links or fine-outline capsules. Avoid universal glow, shine sweeps, and multi-color gradients.

## Motion

- Retain subtle Framer Motion entrance/reveal movement (12–20px, 450–700ms, once per viewport).
- Stagger repeated items lightly (40–80ms).
- Avoid motion that delays content visibility or moves the page shell as a whole.
- Respect `prefers-reduced-motion`; controls remain usable without animation.

## Light and Dark Themes

Light is the default: Paper canvas, White navigation, Ink headings, Body supporting copy, Cloud grouped surfaces, Forest actions.

Dark mode is an intentional adaptation rather than inverted light mode: Night canvas, Night Surface panels, warm-white headings, softened body text, and a lighter sage-green action accent. Keep image colors natural in both themes. Preserve theme toggle placement and contrast.

## Responsive Behavior

- At mobile widths, stack hero content with portrait first or immediately after the identity text; keep the main name/title in the first viewport.
- Collapse desktop navigation to the existing menu; retain theme toggle next to the menu button.
- Project cards become one column below tablet widths; feature grids collapse without cramped text.
- Keep buttons at least 44px tall and avoid fixed widths that cause text overflow.
- Check at 375px, 768px, and 1440px widths.

## Avoid

- Purple/blue SaaS gradients, neon cyan, glows, blur orbs, and glass panels everywhere.
- Generic laptop/browser-frame artwork when real project screenshots or portrait photography exist.
- Oversized copy that pushes all proof below the fold.
- Invented results, client metrics, awards, or testimonials.
- Text-filled pill controls, nested cards, and card grids for every section.
- Copying Bevel's product story, exact hero copy, device imagery, or wellness-specific colors.
