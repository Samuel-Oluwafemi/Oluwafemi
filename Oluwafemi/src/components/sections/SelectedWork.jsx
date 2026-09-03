import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects.js";

// Function to open a project by updating the URL hash
const openProject = (slug) => {
  window.location.hash = `project/${slug}`;
};

export default function SelectedWork() {
  return (
    <section className="py-5 sm:py-24 lg:py-28" id="work">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-9 flex flex-col justify-between gap-10 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* SECTION HEADING */}
          <div>
            <div className="section-label">
              <span>SELECTED WORK</span>
            </div>
            <h2
              className="mt-4 max-w-4xl font-['Space_Grotesk'] text-4xl font-medium leading-tight 
            tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
            >
              Things I've built, shipped and explored.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of client work, personal products and concepts where
            design, code and business goals meet.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              className="premium-card cursor-pointer overflow-hidden rounded-[24px]"
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.slug)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(project.slug);
                }
              }}
            >
              {/* PROJECT IMAGE */}
              <div className="relative min-h-[200px] overflow-hidden bg-slate-900">
                <span className="absolute left-5 top-4 z-10 text-[10px] font-extrabold uppercase tracking-[0.24em] text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  src={project.image}
                  className="project-image h-[200px] w-full object-cover md:h-[220px]"
                  alt={`${project.title} preview`}
                />
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-6 md:gap-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                    {project.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-7 font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.03em] text-slate-100 md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>

                {/* READ CASE STUDY */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Read case study
                  </span>
                  <ArrowUpRight size={18} className="text-cyan-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
