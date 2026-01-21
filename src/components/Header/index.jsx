import React from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-[#1E1E1E]/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center py-6 px-4 relative">


        <button
          onClick={toggleSidebar}
          className="absolute left-4 md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <FaBars />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight hover:text-gray-100 transition-colors cursor-default">
            Caio Andrade
          </h1>

          <h2 className="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-[0.3em] mt-2 drop-shadow-sm">
            Full Stack + Heavy Frontend
          </h2>
        </motion.div>
      </div>
    </header>
  )
}

export default Header;