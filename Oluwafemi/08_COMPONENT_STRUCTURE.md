# OluwafemiX — Component Structure

## Recommended Architecture

```text
src/
│
├── app/
│   ├── App.tsx
│   └── routes.tsx
│
├── assets/
│   ├── projects/
│   ├── images/
│   └── icons/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageContainer.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── ProjectTag.tsx
│   │   ├── Reveal.tsx
│   │   └── MagneticButton.tsx
│   │
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── StudioVisual.tsx
│   │
│   ├── projects/
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectArchive.tsx
│   │   └── CaseStudy.tsx
│   │
│   ├── services/
│   │   ├── Services.tsx
│   │   └── ServiceCard.tsx
│   │
│   ├── process/
│   │   ├── Process.tsx
│   │   └── ProcessStep.tsx
│   │
│   ├── about/
│   │   ├── About.tsx
│   │   └── TechStack.tsx
│   │
│   └── contact/
│       ├── ContactCTA.tsx
│       └── ContactForm.tsx
│
├── data/
│   ├── projects.ts
│   ├── services.ts
│   ├── skills.ts
│   └── process.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── CaseStudy.tsx
│   ├── About.tsx
│   └── Contact.tsx
│
├── main.tsx
└── index.css