import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

// Component for displaying detailed information about a selected project
export default function ProjectDetails({ project, onBack }) {
  const [activeImage, setActiveImage] = useState(null);
  const galleryLength = project.gallery.length;

  //   Function to close the gallery modal
  const closeGallery = () => setActiveImage(null);

  //   Function to show the next image in the gallery
  const showNextImage = () => {
    setActiveImage((currentImage) => (currentImage + 1) % galleryLength);
  };

  //   Function to show the previous image in the gallery
  const showPreviousImage = () => {
    setActiveImage(
      (currentImage) => (currentImage - 1 + galleryLength) % galleryLength,
    );
  };

  //   Effect hook to handle keyboard navigation for the gallery modal
  useEffect(() => {
    if (activeImage === null) return undefined;

    // Function to handle keydown events for gallery navigation
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") {
        setActiveImage((currentImage) => (currentImage + 1) % galleryLength);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage(
          (currentImage) => (currentImage - 1 + galleryLength) % galleryLength,
        );
      }
    };

    // Lock the body scroll when the gallery modal is open and add event listener for keydown events
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener and unlock body scroll when the gallery modal is closed
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, galleryLength]);

  return (
    <>
      <section
        className="min-h-screen py-28 sm:py-32 lg:py-36"
        id="project-details"
      >
        {/* PROJECT DETAILS CONTENT */}
        <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* BACK BUTTON */}
            <button
              type="button"
              onClick={onBack}
              className="secondary-button inline-flex items-center gap-2 rounded-full border 
              border-slate-700 bg-slate-950/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] 
              text-slate-200 hover:border-cyan-300 hover:text-cyan-300"
            >
              <ArrowLeft size={14} />
              Back to projects
            </button>

            {/* PROJECT INFORMATION */}
            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-16">
              <div>
                <div className="section-label">
                  <span>{project.label}</span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {project.category}
                </p>
                <h1
                  className="mt-4 max-w-4xl font-['Space_Grotesk'] text-5xl font-medium leading-[0.95] 
                tracking-[-0.06em] text-slate-100 sm:text-7xl"
                >
                  {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                  {project.summary}
                </p>
                {/* PROJECT LINK */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button mt-8 inline-flex items-center gap-2 rounded-full 
                  bg-gradient-to-r from-cyan-300 to-sky-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] 
                  text-slate-950"
                >
                  Visit live project
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* PROJECT GALLERY */}
              <div className="premium-card overflow-hidden rounded-[28px] p-3">
                <img
                  src={project.image}
                  className="h-auto min-h-[280px] w-full rounded-[20px] object-cover"
                  alt={`${project.title} project preview`}
                />
              </div>
            </div>

            {/* CHALLENGE */}
            <div className="mt-16 grid gap-8 border-t border-slate-800 pt-10 md:grid-cols-3">
              <div>
                <span className="section-label">THE CHALLENGE</span>
                <p className="mt-5 text-sm leading-8 text-slate-400">
                  {project.challenge}
                </p>
              </div>
              <div>
                <span className="section-label">THE APPROACH</span>
                <p className="mt-5 text-sm leading-8 text-slate-400">
                  {project.approach}
                </p>
              </div>
              <div>
                <span className="section-label">THE OUTCOME</span>
                <p className="mt-5 text-sm leading-8 text-slate-400">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-12 border-t border-slate-800 pt-8">
              <span className="section-label">FEATURES</span>
              <ol className="mt-6 grid list-decimal gap-3 pl-5 marker:font-['JetBrains_Mono'] marker:text-xs marker:font-bold marker:text-cyan-300 sm:grid-cols-2 lg:grid-cols-3">
                {project.features.map((feature) => (
                  <li
                    className="border-b border-slate-800 pb-3 pl-2 text-sm font-medium text-slate-300"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ol>
            </div>

            {/* TECHNOLOGY */}
            <div className="mt-12 border-t border-slate-800 pt-8">
              <span className="section-label">TECHNOLOGY</span>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-[9px] font-extrabold 
                    uppercase tracking-[0.2em] text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT GALLERY */}
            <div className="mt-12 border-t border-slate-800 pt-8">
              <span className="section-label">PROJECT GALLERY</span>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <button
                    type="button"
                    className="premium-card group overflow-hidden rounded-[24px] p-2 text-left"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Expand ${project.title} screen ${index + 1}`}
                  >
                    <img
                      className="h-64 w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-[1.03]"
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 
          backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project gallery`}
          onClick={closeGallery}
        >
          <div
            className="relative flex h-full w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={project.gallery[activeImage]}
              className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
              alt={`${project.title} screen ${activeImage + 1} of ${galleryLength}`}
            />

            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full 
              border border-white/20 bg-slate-900/80 text-white transition hover:border-cyan-300 
              hover:text-cyan-300 sm:right-2 sm:top-2"
            >
              <X size={20} />
            </button>

            {galleryLength > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous image"
                  className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-white transition hover:border-cyan-300 hover:text-cyan-300 sm:left-2"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next image"
                  className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-white transition hover:border-cyan-300 hover:text-cyan-300 sm:right-2"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white">
              {activeImage + 1} / {galleryLength}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
