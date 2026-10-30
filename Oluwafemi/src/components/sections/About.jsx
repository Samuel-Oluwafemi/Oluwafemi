import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="about">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(260px,0.9fr)_minmax(420px,1fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">
              <span>A LITTLE ABOUT ME</span>
            </div>
            <h2
              className="mt-4 font-['Space_Grotesk'] text-4xl font-medium leading-tight 
            tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
            >
              I care about what happens after the page loads.
            </h2>
          </motion.div>
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              I’m Samuel Oluwafemi, a frontend developer who grew curious about
              the thinking behind an effective digital experience: what earns
              trust, removes friction, and helps someone take the next step.
            </p>
            <a
              href="/about"
              className="secondary-button mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold"
            >
              Read my story
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
