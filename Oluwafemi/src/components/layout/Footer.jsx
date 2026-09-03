export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div
        className="container mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row 
      lg:items-center lg:justify-between lg:px-10"
      >
        <div>
          <a
            className="text-2xl font-bold tracking-[-.04em] text-slate-100"
            href="#home"
          >
            Oluwafemi
          </a>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Built with React, Tailwind and unreasonable curiosity.
          </p>
        </div>
        <ul className="flex flex-wrap gap-8">
          <li>
            <a
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 
              transition hover:text-cyan-300"
              href="https://x.com/samuelfemi_dev"
            >
              Twitter↗
            </a>
          </li>
          <li>
            <a
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 
              transition hover:text-cyan-300"
              href="#services"
            >
              LinkedIn↗
            </a>
          </li>
          <li>
            <a
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 
              transition hover:text-cyan-300"
              href="#about"
            >
              Tiktok↗
            </a>
          </li>
          <li>
            <a
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 
              transition hover:text-cyan-300"
              href="#contact"
            >
              Instagram↗
            </a>
          </li>
        </ul>
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          © 2026 Samuel Oluwafemi
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
