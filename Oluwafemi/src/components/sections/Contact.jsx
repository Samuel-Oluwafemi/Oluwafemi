export default function Contact() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="contact">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(420px,0.88fr)_minmax(480px,1fr)]">
          <div>
            <h2 className="font-['Space_Grotesk'] text-4xl font-medium leading-tight tracking-[-0.055em] 
            text-slate-100 sm:text-5xl lg:text-6xl">
              Let’s build something useful.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base">
              No complicated brief required. Tell me what you're building, what
              you need fixed or where you want to go next.
            </p>
          </div>

          <form className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7">
            <div className="mb-4 flex flex-col">
              <label
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 
                text-slate-100 outline-none focus:border-cyan-300"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 
                text-slate-100 outline-none focus:border-cyan-300"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                htmlFor="project-type"
              >
                Project type
              </label>
              <select
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 
                text-slate-100 outline-none focus:border-cyan-300"
                id="project-type"
                name="project-type"
              >
                <option>Website redesign</option>
                <option>Landing page</option>
                <option>Booking experience</option>
                <option>Portfolio</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-5 flex flex-col">
              <label
                className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full resize-y rounded-xl border border-slate-700 bg-slate-800 px-4 
                py-3 text-slate-100 outline-none focus:border-cyan-300"
                id="message"
                name="message"
                rows="5"
              />
            </div>
            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 
              px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300"
              type="button"
            >
              Start a project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
