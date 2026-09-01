import { motion } from "framer-motion";

const stack = {
  Build: [
    "React",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
  ],
  Connect: [
    "Firebase",
    "Supabase",
    "REST APIs",
    "Authentication",
    "Forms",
    "Email workflows",
  ],
  Ship: ["Git", "GitHub", "Vercel", "Netlify"],
  "Design / Experience": [
    "Responsive UI",
    "UX structure",
    "Visual hierarchy",
    "Conversion-focused layouts",
    "Figma",
    "Framer Motion",
  ],
};

export default function TechStack() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="tech">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-cyan-300">
            <span>THE TOOLBOX</span>
          </div>
          <h2 className="mt-4 max-w-4xl font-['Space_Grotesk'] text-4xl font-medium leading-tight tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl">
            Tools I use to turn ideas into interfaces.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([group, items], index) => (
            <motion.article
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-7"
              key={group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                {group}
              </span>
              <ul className="mt-7 space-y-3">
                {items.map((item) => (
                  <li
                    className="border-b border-white/10 pb-3 text-sm font-medium text-slate-300 last:border-0"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
