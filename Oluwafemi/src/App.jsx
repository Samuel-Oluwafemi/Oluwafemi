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

function App() {
  return (
    <div className="app-shell min-h-screen font-poppins bg-slate-950 text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <Process />
        <TechStack />
        <ClientCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
