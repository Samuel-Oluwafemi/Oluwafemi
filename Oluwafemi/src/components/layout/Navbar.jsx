import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Work", "Services", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3">
      
      {/* =========================
          MAIN PILL NAVBAR
      ========================== */}
      <nav
        className="mx-auto max-w-5xl rounded-full border border-slate-800 
        bg-slate-950/80 px-4 py-3 backdrop-blur-xl 
        shadow-2xl shadow-slate-950/60"
        aria-label="Primary navigation"
      >
        <div className="flex w-full items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            aria-label="OluwafemiX home"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold tracking-[-.04em] text-slate-100"
          >
            Oluwafemi<span className="text-cyan-400">✦</span>
          </a>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] font-semibold uppercase 
                  tracking-[0.2em] text-slate-300 
                  transition hover:text-cyan-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* =========================
              DESKTOP CTA
          ========================== */}
          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full 
            bg-cyan-400 px-6 py-3 text-[11px] font-bold uppercase 
            tracking-[0.18em] text-slate-950 
            transition hover:bg-cyan-300 md:inline-flex"
          >
            Let's build
          </a>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center 
            rounded-full border border-slate-700 
            text-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* =========================
          MOBILE DROPDOWN
          IMPORTANT:
          This is OUTSIDE the nav
      ========================== */}
      {isOpen && (
        <div
          className="mx-auto mt-3 max-w-5xl rounded-3xl border 
          border-slate-800 bg-slate-950/95 p-4 
          backdrop-blur-xl shadow-2xl shadow-slate-950/60 
          md:hidden"
        >

          {/* Mobile Links */}
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 
                  text-sm font-semibold uppercase 
                  tracking-[0.15em] text-slate-300 
                  transition hover:bg-slate-900 
                  hover:text-cyan-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center 
            rounded-full bg-cyan-400 px-6 py-3 
            text-[11px] font-bold uppercase 
            tracking-[0.18em] text-slate-950 
            transition hover:bg-cyan-300"
          >
            Let's build
          </a>
        </div>
      )}
    </header>
  );
}