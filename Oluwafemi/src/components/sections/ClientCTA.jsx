import { motion } from "framer-motion";

export default function ClientCTA() {
  return (
    <section className="py-20 sm:py-24" id="cta">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="rounded-[34px] border border-cyan-400/50 bg-gradient-to-r from-cyan-400/10 to-slate-900 
          p-12 md:p-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase 
          tracking-[0.24em] text-cyan-300"
          >
            <span>HAVE SOMETHING IN MIND?</span>
          </div>
          <h2
            className="mt-5 max-w-5xl font-['Space_Grotesk'] text-4xl font-medium leading-tight 
          tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
          >
            Have something worth building?
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
            Tell me what you're working on, what isn't working or what you want
            to launch.
          </p>
          <div className="flex md:flex-wrap gap-4 md:gap-6 flex-col md:flex-row mt-8">
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 
              px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300"
            >
              Start a conversation
            </a>
            <a href="wa.me/2348102409849" target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-400 
              bg-slate-900/60 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-300 
              transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Schedule a call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
