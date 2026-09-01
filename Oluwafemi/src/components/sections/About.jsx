import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="about">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(260px,0.9fr)_minmax(520px,1fr)]">
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
            className="premium-card rounded-[28px] p-7 sm:p-8 text-slate-300"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              I started by learning the web from the ground up — HTML, CSS and
              JavaScript — before moving into React and modern frontend
              development.
            </p>
            <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
              Over time, I became increasingly interested in what happens beyond
              the code. Why does one website immediately make a business feel
              trustworthy while another creates friction? Why does one landing
              page make the next step obvious while another leaves visitors
              wondering what to do?
            </p>
            <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
              Today, I combine frontend development with UI/UX thinking and
              conversion-focused website strategy. I like taking an idea, making
              the experience clear, building it and getting it into people's
              hands with the goal of solving problems for businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
