import { Suspense, lazy, useState } from "react";
import img from "/img1.jpeg"; // Verifique se o caminho da imagem está certo
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGraduationCap,
  FaTimes, // Ícone X para fechar
} from "react-icons/fa";
import { SiTypescript, SiFlutter, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

// Lazy loading dos componentes
const ProjectsFavs = lazy(() => import("../ProjectsFavs"));
const AboutMe = lazy(() => import("../Aboutme"));

// Componente de Loading simples
const LoadingSkeleton = () => (
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded"></div>
    </div>
  </div>
);

const Curriculum = ({ footer, isOpen, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lógica da barra de progresso
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(progress);
  };

  return (
    <div className="flex flex-col md:flex-row h-full text-white font-sans relative">

      {/* --- OVERLAY (FUNDO ESCURO) --- */}
      {/* Só aparece no Mobile quando isOpen for true */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] md:hidden backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}

      {/* --- BARRA DE PROGRESSO DO SCROLL --- */}
      <motion.div
        className="fixed top-[HEADER_HEIGHT] left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-30 rounded-r-full"
        style={{ width: `${scrollProgress}%`, top: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      />

      {/* --- SIDEBAR (MENU LATERAL) --- */}
      <aside
        className={`
            /* Comportamento Mobile (Fixo) */
            fixed top-0 left-0 z-[60] h-full w-80
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}

            /* Comportamento Desktop (Relativo/Normal) */
            md:relative md:translate-x-0 md:flex md:z-auto
            
            /* Estilos Visuais */
            bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-r border-gray-800 
            flex flex-col items-center shadow-2xl overflow-y-auto custom-scrollbar 
        `}
      >
        {/* Botão X para fechar (Só aparece no Mobile) */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-8 flex flex-col items-center w-full">
          {/* Foto de Perfil */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-30 group-hover:opacity-75 transition duration-500 blur"></div>
            <img
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#1E1E1E] shadow-xl transition-transform duration-300 group-hover:scale-105"
              src={img}
              alt="Caio Andrade"
              loading="lazy"
            />
          </div>

          {/* Nome e Cargo */}
          <div className="mt-6 text-center shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-wide">Caio Andrade</h1>
            <p className="text-cyan-400 text-sm font-medium mt-1 uppercase tracking-wider">Full Stack Developer</p>
          </div>

          <div className="w-1/2 h-px bg-gray-700 my-6 shrink-0"></div>

          {/* Links de Contato */}
          <div className="w-full space-y-3 text-sm mb-6 shrink-0">
            <a href="https://www.linkedin.com/in/caio-andrade-rocha" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all group">
              <FaLinkedin className="text-xl text-blue-500 group-hover:scale-110" /> <span className="truncate">LinkedIn</span>
            </a>
            <a href="https://github.com/Caiocr8" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all group">
              <FaGithub className="text-xl text-gray-300 group-hover:scale-110" /> <span className="truncate">GitHub</span>
            </a>
            <a href="mailto:ccaiocr@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-all group">
              <FaEnvelope className="text-xl text-red-400 group-hover:scale-110" /> <span className="truncate">Email</span>
            </a>
          </div>

          {/* Formação Acadêmica */}
          <div className="w-full mb-8 shrink-0">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-cyan-400 text-sm" /> Formação
            </h3>
            <div className="space-y-4">
              <div className="bg-[#252525] p-3 rounded border-l-2 border-cyan-400">
                <p className="text-white text-xs font-bold">Pós em Arq. de Software</p>
                <p className="text-gray-400 text-[10px]">GRAN • Em andamento</p>
              </div>
              <div className="bg-[#252525] p-3 rounded border-l-2 border-blue-500">
                <p className="text-white text-xs font-bold">Pós em Full Stack & Cloud</p>
                <p className="text-gray-400 text-[10px]">GRAN • Em andamento</p>
              </div>
              <div className="bg-[#252525] p-3 rounded border-l-2 border-green-500">
                <p className="text-white text-xs font-bold">Sistemas para Internet</p>
                <p className="text-gray-400 text-[10px]">UNIESP • Concluído 2023</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="w-full shrink-0 pb-10">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <FaReact className="text-cyan-400 text-3xl hover:-translate-y-1 transition-transform" />
              <SiTypescript className="text-blue-500 text-3xl hover:-translate-y-1 transition-transform" />
              <FaNodeJs className="text-green-500 text-3xl hover:-translate-y-1 transition-transform" />
              <SiFlutter className="text-cyan-400 text-3xl hover:-translate-y-1 transition-transform" />
              <SiFirebase className="text-yellow-500 text-3xl hover:-translate-y-1 transition-transform" />
              <FaJs className="text-yellow-400 text-3xl hover:-translate-y-1 transition-transform" />
              <FaHtml5 className="text-orange-500 text-3xl hover:-translate-y-1 transition-transform" />
              <FaCss3Alt className="text-blue-400 text-3xl hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL (AboutMe + Projetos) --- */}
      <main
        className="flex-1 h-full overflow-y-auto scroll-smooth p-6 md:p-16 relative"
        onScroll={handleScroll}
      >
        <div className="max-w-4xl mx-auto space-y-20 min-h-screen">
          <Suspense fallback={<LoadingSkeleton />}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <AboutMe />
            </motion.div>
          </Suspense>

          <Suspense fallback={<LoadingSkeleton />}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ProjectsFavs />
            </motion.div>
          </Suspense>
        </div>

        {/* Footer renderizado aqui dentro para rolar junto com o conteúdo */}
        <div className="mt-20">
          {footer}
        </div>
      </main>
    </div>
  );
};

export default Curriculum;