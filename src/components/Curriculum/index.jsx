import { Suspense, lazy, useEffect, useState } from "react";
import img from "../../../public/img1.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsFavs = lazy(() => import("../ProjectsFavs"));
const AboutMe = lazy(() => import("../Aboutme"));

const Curriculum = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1C1C1C] text-white overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-cyan-400 z-50 rounded-r-full"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      />

      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-[#2B2B2B] p-5 flex flex-col items-center overflow-y-auto">
        <img
          className="w-24 md:w-32 rounded-full transition-transform duration-300 hover:scale-105"
          src={img}
          alt="Foto de perfil"
          loading="lazy"
        />

        <div className="mt-6 space-y-4 w-full text-sm">
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/caio-andrade-rocha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline truncate"
            >
              linkedin.com/in/caio-andrade-rocha
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-300" />
            <a
              href="https://github.com/Caiocr8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline truncate"
            >
              github.com/Caiocr8
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-400" />
            <a
              href="mailto:ccaiocr@gmail.com"
              className="text-white hover:underline truncate"
            >
              ccaiocr@gmail.com
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 w-full">
          <h3 className="text-white text-lg font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-3">
            <FaReact className="text-cyan-400 text-2xl" title="React" />
            <FaNodeJs className="text-green-500 text-2xl" title="Node.js" />
            <FaJs className="text-yellow-400 text-2xl" title="JavaScript" />
            <FaHtml5 className="text-orange-500 text-2xl" title="HTML5" />
            <FaCss3Alt className="text-blue-400 text-2xl" title="CSS3" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto scroll-smooth p-6 md:p-10 pb-20 space-y-16">
        <section className="space-y-12">
          <Suspense fallback={<div className="text-white">Carregando...</div>}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutMe />
            </motion.div>
          </Suspense>
          
          <Suspense fallback={<div className="text-white">Carregando...</div>}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProjectsFavs />
            </motion.div>
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default Curriculum;