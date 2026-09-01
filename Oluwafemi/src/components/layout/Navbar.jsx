import { useState } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";

const navItems = ["Work", "Services", "About", "Contact"];

export default function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-2 sm:px-3">
      <nav
        className="glass-panel mx-auto max-w-5xl rounded-full border border-slate-700/80 
        px-3 py-2.5 shadow-[0_18px_60px_rgba(2,6,23,0.55)] sm:px-4 sm:py-3"
        aria-label="Primary navigation"
      >
        <div className="flex w-full items-center gap-2 sm:gap-3">
          <a
            href="#home"
            aria-label="Oluwafemi home"
            onClick={() => setIsOpen(false)}
            className="shrink-0 text-[18px] font-bold tracking-[-.04em] text-slate-100 sm:text-[20px] md:text-[23px]"
          >
            Oluwafemi
          </a>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:text-cyan-300 md:text-[11px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300 sm:h-10 sm:w-10"
            >
              {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
            </button>

            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300 md:inline-flex md:px-6 md:py-3 md:text-[11px]"
            >
              Let's build
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="mx-auto mt-3 max-w-5xl rounded-3xl border border-slate-800 bg-slate-950/95 p-4 backdrop-blur-xl shadow-2xl shadow-slate-950/60 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-300 transition hover:bg-slate-900 hover:text-cyan-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300"
            >
              Let's build
            </a>
          </div>
      )}
    </header>
  );
}
