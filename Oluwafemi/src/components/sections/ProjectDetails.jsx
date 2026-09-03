import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetails({ project, onBack }) {
  return (
    <section className="min-h-screen py-28 sm:py-32 lg:py-36" id="project-details">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={onBack}
            className="secondary-button inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200 hover:border-cyan-300 hover:text-cyan-300"
          >
            <ArrowLeft size={14} />
            Back to projects
          </button>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-16">
            <div>
              <div className="section-label"><span>{project.label}</span></div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
              <h1 className="mt-4 max-w-4xl font-['Space_Grotesk'] text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-slate-100 sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{project.summary}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950"
              >
                Visit live project
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="premium-card overflow-hidden rounded-[28px] p-3">
              <img src={project.image} className="h-auto min-h-[280px] w-full rounded-[20px] object-cover" alt={`${project.title} project preview`} />
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-slate-800 pt-10 md:grid-cols-3">
            <div>
              <span className="section-label">THE CHALLENGE</span>
              <p className="mt-5 text-sm leading-8 text-slate-400">{project.challenge}</p>
            </div>
            <div>
              <span className="section-label">THE APPROACH</span>
              <p className="mt-5 text-sm leading-8 text-slate-400">{project.approach}</p>
            </div>
            <div>
              <span className="section-label">THE OUTCOME</span>
              <p className="mt-5 text-sm leading-8 text-slate-400">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <span className="section-label">FEATURES</span>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <li className="border-b border-slate-800 pb-3 text-sm font-medium text-slate-300" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <span className="section-label">TECHNOLOGY</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span className="rounded-full border border-slate-700 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-300" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <span className="section-label">PROJECT GALLERY</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div className="premium-card overflow-hidden rounded-[24px] p-2" key={image}>
                  <img className="h-64 w-full rounded-[18px] object-cover" src={image} alt={`${project.title} screen ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
