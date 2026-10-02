import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/hero.png";
import { projects } from "../../data/projects.js";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-40">
        <motion.div
          className="hero-copy order-first max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            INDEPENDENT WEB DESIGNER & DEVELOPER
          </div>

          <h1 className="hero-title text-3xl mt-7 max-w-4xl text-slate-100">
            Samuel
            <br />
            Oluwafemi<span className="hero-period">.</span>
          </h1>

          <p className="hero-position mt-6 max-w-2xl text-slate-100">
            I turn business ideas into clear, thoughtful digital experiences.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I design and build websites and digital products that help people
            understand what a business offers and what to do next.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-1">
            <a
              href="#work"
              className="premium-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-2 md:px-6 py-3 text-sm font-semibold"
            >
              Explore my work
              <ArrowDownRight size={17} />
            </a>
            <a
              href="#contact"
              className="secondary-button inline-flex min-h-12 items-center justify-center rounded-full border px-2 md:px-6 py-3 text-sm font-semibold"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="hero-status-dot" />
            Available for select projects and collaborations
          </div>
        </motion.div>

        <motion.aside
          className="hero-art order-last"
          aria-label="Portrait of Samuel Oluwafemi and selected work"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="hero-portrait-field">
            <img
              className="hero-portrait"
              src={heroImg}
              alt="Samuel Oluwafemi"
            />
            <div className="hero-image-note">
              <span>Design thinking</span>
              <span className="hero-note-divider" />
              <span>Frontend craft</span>
            </div>
          </div>
          <a
            className="hero-featured-project"
            href={`#project/${projects[0].slug}`}
          >
            <img
              src={projects[0].image}
              alt="Velora e-commerce project preview"
            />
            <span className="hero-feature-copy">
              <span className="hero-feature-label">SELECTED PROJECT</span>
              <strong>{projects[0].title}</strong>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
