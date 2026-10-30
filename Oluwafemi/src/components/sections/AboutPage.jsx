import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import samPortrait from "../../assets/Sam1.jpg";
import samSpeaking from "../../assets/Sam2.jpg";
import samCandid from "../../assets/SAM.jpg";

const journey = [
  {
    number: "01",
    title: "I started with the interface.",
    copy: "I began as a frontend developer, building websites and web applications for a range of clients. I loved the craft of turning designs into working experiences, and that work gave me a practical foundation in how digital products are made.",
  },
  {
    number: "02",
    title: "Then I started asking what makes it work.",
    copy: "The code was only part of the story. I became interested in why one website makes a business feel trustworthy while another creates friction, and how thoughtful structure can make the next step obvious instead of leaving people guessing.",
  },
  {
    number: "03",
    title: "Now I bring the pieces together.",
    copy: "Today, I combine frontend development with UI/UX thinking and conversion-aware strategy. I like understanding the problem, shaping a clear experience, and building it into something useful that people can actually use.",
  },
];

const photos = [
  {
    src: samPortrait,
    alt: "Samuel Oluwafemi standing outdoors",
    caption: "A little perspective",
    className: "about-photo-primary",
  },
  {
    src: samSpeaking,
    alt: "Samuel Oluwafemi speaking to camera",
    caption: "Sharing what I learn",
    className: "about-photo-secondary",
  },
  {
    src: samCandid,
    alt: "A candid portrait of Samuel Oluwafemi",
    caption: "The person behind the pixels",
    className: "about-photo-tertiary",
  },
];

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="about-page-topline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="about-back-link" href="/#home">
            <ArrowLeft size={16} />
            Back to home
          </a>
          <span className="about-page-index">A LITTLE ABOUT ME · 2026</span>
        </motion.div>

        <div className="about-page-hero">
          <motion.div
            className="about-page-intro"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label"><span>THE PERSON BEHIND THE WORK</span></div>
            <h1 className="about-page-title">
              Good work starts with asking better questions<span>.</span>
            </h1>
            <p className="about-page-lede">
              I’m Samuel Oluwafemi, a frontend developer interested in the full
              journey: from understanding a business problem to building a
              digital experience that makes the next step feel clear.
            </p>
            <a className="about-contact-link" href="/#contact">
              Have a project in mind?
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <div className="about-photo-grid" aria-label="Photos of Samuel Oluwafemi">
            {photos.map((photo, index) => (
              <motion.figure
                className={`about-photo-card ${photo.className}`}
                key={photo.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img src={photo.src} alt={photo.alt} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {photo.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="about-journey">
          <div className="about-journey-heading">
            <div className="section-label"><span>HOW I GOT HERE</span></div>
            <h2>From writing code to shaping the whole experience.</h2>
          </div>
          <div className="about-journey-steps">
            {journey.map((step, index) => (
              <motion.article
                className="about-journey-step"
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="about-journey-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
