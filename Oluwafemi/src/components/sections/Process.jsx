const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    copy: "Understand the business, audience, problem and desired outcome.",
  },
  {
    number: "02",
    title: "STRUCTURE",
    copy: "Turn the information into a clear user journey and website structure.",
  },
  {
    number: "03",
    title: "DESIGN",
    copy: "Create the visual direction, hierarchy and interface.",
  },
  {
    number: "04",
    title: "BUILD",
    copy: "Translate the experience into a responsive working product.",
  },
  {
    number: "05",
    title: "TEST",
    copy: "Check responsiveness, usability, forms, interactions and edge cases.",
  },
  {
    number: "06",
    title: "SHIP",
    copy: "Deploy, refine and hand over a product that can actually be used.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="process">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase 
          tracking-[0.24em] text-cyan-300"
          >
            <span>THE PROCESS</span>
          </div>
          <h2
            className="mt-4 max-w-4xl font-['Space_Grotesk'] text-4xl font-medium leading-tight 
          tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
          >
            From idea to shipped experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article
              className="flex gap-5 rounded-3xl border border-slate-800 bg-slate-900/40 p-7"
              key={step.number}
            >
              <span
                className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.2em] 
              text-cyan-300"
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="font-['Space_Grotesk'] text-lg font-bold uppercase leading-7 
                tracking-[0.12em] text-slate-100"
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
