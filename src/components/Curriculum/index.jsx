import img from "../../assets/img1.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import ProjectsFavs from "../ProjectsFavs";
import AboutMe from "../Aboutme";

const Curriculum = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-[#2B2B2B] p-5 flex flex-col items-center">
        <img className="w-24 md:w-32 rounded-full transition-transform duration-300 hover:scale-105" src={img} alt="Foto de perfil" />
        <div className="mt-6 space-y-4 w-full">
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/caio-andrade-rocha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
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
              className="text-white hover:underline"
            >
              github.com/Caiocr8
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-red-400" />
            <a
              href="mailto:ccaiocr@gmail.com"
              className="text-white hover:underline"
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
      {/* Main Content */}
      <main className="w-full md:w-3/4 bg-[#1C1C1C] p-4 md:p-10 overflow-y-auto space-y-16">
        <AboutMe />
        <section data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <ProjectsFavs />
        </section>
      </main>
    </div>
  );
};

export default Curriculum;