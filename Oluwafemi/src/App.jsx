import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import SelectedWork from "./components/sections/SelectedWork.jsx";
import ProjectDetails from "./components/sections/ProjectDetails.jsx";
import Services from "./components/sections/Services.jsx";
import Process from "./components/sections/Process.jsx";
import About from "./components/sections/About.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import ClientCTA from "./components/sections/ClientCTA.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import { projects } from "./data/projects.js";

// Animation variants for fade-up effect
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
  const [projectSlug, setProjectSlug] = useState(() =>
    window.location.hash.replace("#project/", ""),
  );

  // Effect to handle URL hash changes and update the selected project slug
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setProjectSlug(
        hash.startsWith("#project/") ? hash.replace("#project/", "") : "",
      );
    };

    // Add event listener for hash changes and clean up on unmount
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Find the selected project based on the current slug
  const selectedProject = projects.find(
    (project) => project.slug === projectSlug,
  );

  // Function to show the homepage by clearing the URL hash and scrolling to the top
  const showHomepage = () => {
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`app-shell ${theme} min-h-screen antialiased selection:bg-cyan-400/40`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="floating-orb absolute left-1/2 top-[-8rem] h-[30rem] w-[30rem] -translate-x-1/2 
        rounded-full bg-cyan-500/10 blur-3xl"
        />
        <div
          className="floating-orb absolute bottom-[-12rem] right-[-4rem] h-[26rem] w-[26rem] 
        rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />

      <motion.main initial="hidden" animate="visible" variants={fadeUp}>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={showHomepage} />
        ) : (
          <>
            <Hero />
            <About />
            <SelectedWork />
            <Services />
            <Process />
            <TechStack />
            <ClientCTA />
            <Contact />
          </>
        )}
      </motion.main>

      <Footer />
    </div>
  );
}
