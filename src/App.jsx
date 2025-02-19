import { Navbar } from "./components/Navbar.jsx";
import { Intro } from "./components/Intro.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Project } from "./components/Project.jsx";
import { TechStack } from "./components/TechStack.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { motion } from "motion/react";

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-40">
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={ fadeInUp }
      >
        <Intro />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <Project />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <TechStack />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <Gallery />
      </motion.div>
    </div>
  );
}

export default App
