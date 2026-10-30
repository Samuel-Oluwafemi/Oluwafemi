import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import SelectedWork from "./components/sections/SelectedWork.jsx";
import ProjectMarquee from "./components/sections/ProjectMarquee.jsx";
import ProjectDetails from "./components/sections/ProjectDetails.jsx";
import Services from "./components/sections/Services.jsx";
import Process from "./components/sections/Process.jsx";
import About from "./components/sections/About.jsx";
import AboutPage from "./components/sections/AboutPage.jsx";
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

const introSessionKey = "oluwafemi-intro-seen";

function shouldShowIntro() {
  try {
    return window.sessionStorage.getItem(introSessionKey) !== "true";
  } catch {
    return false;
  }
}

function HomepageIntro({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      window.sessionStorage.setItem(introSessionKey, "true");
    } catch {
      // The intro still runs when session storage is unavailable.
    }
  }, []);

  return (
    <motion.div
      className="homepage-intro"
      initial={{ y: "0%" }}
      animate={{ y: isLeaving ? "-100%" : "0%" }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.72,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isLeaving) onComplete();
      }}
      role="status"
      aria-label="Welcome to Oluwafemi's portfolio"
    >
      <div className="homepage-intro-content">
        <p className="homepage-intro-kicker">
          INDEPENDENT DESIGN & DEVELOPMENT
        </p>

        <p className="homepage-intro-brand ">
          Oluwafemi<span>.</span>
        </p>
        <div className="homepage-intro-progress" aria-hidden="true">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.35,
              ease: [0.65, 0, 0.35, 1],
              delay: prefersReducedMotion ? 0 : 0.45,
            }}
            onAnimationComplete={() => {
              window.setTimeout(
                () => setIsLeaving(true),
                prefersReducedMotion ? 0 : 220,
              );
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [isIntroVisible, setIsIntroVisible] = useState(shouldShowIntro);
  const [currentPath, setCurrentPath] = useState(() =>
    window.location.pathname.replace(/\/+$/, "") || "/",
  );
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
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.replace(/\/+$/, "") || "/");
      handleHashChange();
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
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
      {isIntroVisible && (
        <HomepageIntro onComplete={() => setIsIntroVisible(false)} />
      )}

      <div inert={isIntroVisible}>
        <Navbar theme={theme} setTheme={setTheme} />

        <motion.main initial="hidden" animate="visible" variants={fadeUp}>
          {selectedProject ? (
            <ProjectDetails project={selectedProject} onBack={showHomepage} />
          ) : currentPath === "/about" ? (
            <AboutPage />
          ) : (
            <>
              <Hero />
              <About />
              <ProjectMarquee />
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
    </div>
  );
}
