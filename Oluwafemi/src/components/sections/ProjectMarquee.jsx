import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects.js";

function ProjectGroup({ duplicate = false }) {
  return (
    <div className="project-marquee-group" aria-hidden={duplicate || undefined}>
      {projects.map((project, index) => (
        <a
          className="project-marquee-item"
          href={`#project/${project.slug}`}
          key={project.slug}
          tabIndex={duplicate ? -1 : undefined}
        >
          <img src={project.image} alt="" className="project-marquee-image" />
          <span className="project-marquee-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-marquee-copy">
            <span className="project-marquee-category">{project.category}</span>
            <span className="project-marquee-title">{project.title}</span>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function ProjectMarquee() {
  return (
    <section className="project-marquee-section" aria-label="Featured projects">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 pb-4 sm:px-8 lg:px-10">
        <p className="project-marquee-kicker">A FEW THINGS I’VE BUILT</p>
        <span className="project-marquee-hint">Selected projects</span>
      </div>
      <div className="project-marquee-viewport">
        <div className="project-marquee-track">
          <ProjectGroup />
          <ProjectGroup duplicate />
        </div>
      </div>
    </section>
  );
}
