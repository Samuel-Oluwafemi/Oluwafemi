import { motion } from "framer-motion";

const services = [
  {
    title: "Websites built around the customer journey.",
    summary:
      "Modern websites that help businesses explain what they offer, build trust and turn visitors into enquiries.",
  },
  {
    title: "Make booking easier.",
    summary:
      "Service discovery, scheduling, customer details and confirmation flows designed to remove friction between interest and appointment.",
  },
  {
    title: "One offer. One audience. One clear action.",
    summary:
      "Focused landing pages designed to communicate value quickly and guide visitors toward the next step.",
  },
  {
    title: "From product discovery to checkout.",
    summary:
      "Modern shopping experiences covering product discovery, product details, carts, customer accounts and checkout flows.",
  },
  {
    title: "Turn your work into an experience.",
    summary:
      "Personal portfolio websites designed to present creative work with strong visual storytelling and clear positioning.",
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" id="services">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label">
            <span>WHAT I BUILD</span>
          </div>
          <h2
            className="mt-4 max-w-4xl font-['Space_Grotesk'] text-4xl font-medium leading-tight 
          tracking-[-0.055em] text-slate-100 sm:text-5xl lg:text-6xl"
          >
            Websites should do more than look good.
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-400 sm:text-base">
            I build digital experiences around what the business actually needs
            its customers to do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              className="premium-card group rounded-[28px] p-8"
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                0{index + 1}
              </span>
              <h3
                className="mt-8 font-['Space_Grotesk'] text-3xl font-medium leading-tight tracking-[-0.035em] 
              text-slate-100"
              >
                {service.title}
              </h3>
              <p className="mt-5 text-sm leading-8 text-slate-400">
                {service.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
