import { motion } from "framer-motion";

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
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">
            <span>THE PROCESS</span>
          </div>
          <h2
            className="mt-4 max-w-4xl font-['Space_Grotesk'] text-4xl font-medium leading-tight 
          tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
          >
            From idea to shipped experience.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.article
              className="premium-card flex gap-5 rounded-[28px] p-7"
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
