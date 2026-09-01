import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import SelectedWork from "./components/sections/SelectedWork.jsx";
import Services from "./components/sections/Services.jsx";
import Process from "./components/sections/Process.jsx";
import About from "./components/sections/About.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import ClientCTA from "./components/sections/ClientCTA.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`app-shell ${theme} min-h-screen antialiased selection:bg-cyan-400/40`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="floating-orb absolute left-1/2 top-[-8rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="floating-orb absolute bottom-[-12rem] right-[-4rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />

      <motion.main initial="hidden" animate="visible" variants={fadeUp}>
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <Process />
        <TechStack />
        <ClientCTA />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
