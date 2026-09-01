import { motion } from "framer-motion";
import heroImg from "../../assets/Velora.png";
import heroImg1 from "../../assets/Salonflow.png";
import heroImg2 from "../../assets/Elless.png";
import heroImg3 from "../../assets/Berry.png";
import heroImg4 from "../../assets/Liz.png";

const Images = [
  {
    src: heroImg,
  },
  {
    src: heroImg1,
  },
  {
    src: heroImg2,
  },
  {
    src: heroImg3,
  },
  {
    src: heroImg4,
  },
];
const projects = [
  {
    label: "CLIENT PROJECT",
    title: "Velora",
    category: "E-commerce Experience",
    image: Images[0].src,
    link: "https://velora0.netlify.app/",
    summary:
      "A conversion-focused e-commerce website for a minimalist fashion brand to showcase products, build trust and generate sales.",
    tech: [
      "REACT",
      "TYPESCRIPT",
      "FIGMA",
      "FIREBASE",
      "EMAILJS",
      "PAYSTACK PAYMENT INTEGRATION",
    ],
  },
  {
    label: "CLIENT PROJECT",
    title: "VirtualByLiz",
    category: "Administrative Virtual Assistant",
    image: Images[4].src,
    link: "https://virtualbyliz.netlify.app/",
    summary:
      "A professional portfolio website for an administrative virtual assistant to showcase services, build trust and generate enquiries.",
    tech: ["REACT", "TYPESCRIPT", "TAILWINDCSS", "EMAILJS"],
  },
  {
    label: "PERSONAL PROJECT",
    title: "SalonFlow",
    category: "Booking Experience",
    image: Images[1].src,
    link: "https://bookify-salonflow.netlify.app/",
    summary:
      "A booking system built for salon businesses to enable a cleaner service journey from discovery through appointment confirmation.",
    tech: ["REACT", "TAILWINDCSS", "FIREBASE", "EMAILJS"],
  },
  {
    label: "CLIENT PROJECT",
    title: "ELLESS HAIR & BEAUTY",
    category: "Beauty Brand",
    image: Images[2].src,
    link: "https://elless-hair-and-beauty.netlify.app/",
    summary:
      "A conversion-focused website for a beauty brand to showcase services, build trust and generate enquiries.",
    tech: ["REACT", "TAILWINDCSS", "EMAILJS"],
  },
  {
    label: "CLIENT PROJECT",
    title: "BerryLyon",
    category: "Editorial Brand",
    image: Images[3].src,
    link: "https://berrylyon.netlify.app/",
    summary:
      "A content-led editorial website for a lifestyle brand with a focus on visual storytelling.",
    tech: ["REACT", "TAILWINDCSS", "EMAILJS"],
  },
];

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              className="premium-card overflow-hidden rounded-[24px]"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="min-h-[200px] md:min-h-[200px] bg-slate-900">
                <div
                  className="relative flex min-h-[200px] md:min-h-[220px] items-center justify-center 
                bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10"
                >
                  {/* Project Number */}
                  <span
                    className="absolute left-5 top-4 text-[10px] font-extrabold uppercase 
                  tracking-[0.24em] text-cyan-300"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Project Image */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      className="project-image h-[200px] w-full object-cover md:h-[220px] md:w-[1000px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-6 md:gap-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                    {project.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-7 font-['Space_Grotesk'] text-2xl md:text-3xl font-medium tracking-[-0.03em] text-slate-100">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>
                <div className="mt-4 flex items-center justify-between gap-6 md:gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-button inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
                  >
                    View Project
                  </a>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      className="rounded-full border border-slate-700 px-3 py-1 text-[9px] font-extrabold 
                      uppercase tracking-[0.2em] text-slate-300"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
