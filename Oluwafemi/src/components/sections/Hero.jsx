import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";

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
    <section
      className="container mx-auto px-5 sm:px-8 lg:px-10 pt-27 pb-2 sm:pt-24 lg:pt-35 lg:pb-15"
      id="home"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(640px,1fr)_minmax(420px,510px)]">
        <motion.div
          className="max-w-4xl order-last lg:order-first"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="section-label">
            <span>WEBSITE DEVELOPER • UI/UX • DIGITAL PRODUCTS</span>
          </div>

          <h1
            className="mt-7 max-w-4xl font-['Space_Grotesk'] text-3xl font-medium 
          leading-[0.93] tracking-[-0.075em] text-slate-100 sm:text-6xl lg:text-6xl"
          >
            I build conversion focused websites and products for businesses to{" "}
            <span className="hero-highlight">generate revenue.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm Samuel Oluwafemi, a web developer focused on modern interfaces,
            conversion-focused websites and practical digital products.
          </p>

          <div className="mt-9 flex md:flex-wrap items-center gap-2 md:gap-6">
            <a
              href="#work"
              className="premium-button inline-flex items-center justify-center rounded-full 
              bg-gradient-to-r from-cyan-300 to-sky-400 px-3 py-3 text-[9px] md:text-[11px] 
              font-bold uppercase tracking-[0.16em] text-slate-950"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="secondary-button inline-flex items-center justify-center rounded-full 
              border border-slate-700 bg-slate-950/60 px-7 py-3 text-[9px] md:text-[11px] font-bold uppercase 
              tracking-[0.16em] text-slate-100 hover:border-cyan-300 hover:bg-slate-900/80"
            >
              Let’s work together
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] 
          text-slate-400"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />{" "}
            OPEN TO CLIENT WORK • COLLABORATIONS • NEW BUILDS
          </div>
        </motion.div>

        <motion.aside
          className="floating-orb min-w-0 order-first lg:order-last"
          aria-label="Studio preview"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div
            className="relative min-h-[200px] md:min-h-[500px] overflow-hidden rounded-[30px] border border-slate-700/80 
          bg-gradient-to-b from-slate-800/90 to-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.8)]"
          >
            <div className="absolute inset-[-80px] rounded-full bg-cyan-900/15 blur-2xl" />
            <div className="relative flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                oluwafemi.studio
              </span>
            </div>
            {/*  */}
            <div className="p-4">
              <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900">
                <img
                  className="h-[310px] md:h-[378px] w-full object-cover opacity-95"
                  src={heroImg}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between pt-5">
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                    BUILD 001
                  </span>
                  <span className="mt-2 block text-[8px] md:text-[10px] text-base text-slate-100">
                    Digital Systems
                  </span>
                </div>
                <div className="flex gap-2">
                  <span
                    className="rounded-full border border-slate-700 px-2 py-1 text-[10px] 
                  font-bold uppercase tracking-[0.2em] text-slate-300"
                  >
                    REACT
                  </span>
                  <span
                    className="rounded-full border border-slate-700 px-2 py-1 text-[10px] font-bold 
                  uppercase tracking-[0.2em] text-slate-300"
                  >
                    UX
                  </span>
                  <span
                    className="rounded-full border border-slate-700 px-2 py-1 text-[10px] font-bold 
                  uppercase tracking-[0.2em] text-slate-300"
                  >
                    CRO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
