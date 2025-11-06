import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute w-[370px] md:w-[590px] h-[370px] md:h-[590px] bg-cyan-400/25 blur-[120px] rounded-full top-[-120px] left-[-120px] animate-pulse z-0" />

      <div className="z-10 w-full max-w-2xl mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Name & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent leading-tight"
        >
          Building for the Web.<br className="hidden sm:inline" /> Driven by Code & Creativity.
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="inline-block text-lg md:text-2xl font-semibold text-cyan-300 mb-7 tracking-wide"
        >
          Full-Stack Developer &mdash; MERN | AI Integration | Modern UX
        </motion.span>

        {/* Brief Professional About */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
        >
          I engineer clean, scalable solutions using the MERN stack and modern JS. 
          My passion is shipping production-ready products with robust code, smart features, and a seamless user experience.
          <br /><br />
          Let’s turn great ideas into real, impactful web apps—together.
        </motion.p>

        {/* CTA Button */}
        <NavLink to="/project" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px #22d3ee88" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340 }}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-7 py-3 rounded-full font-bold text-lg shadow-lg outline-none focus:ring-2 focus:ring-green-400"
            aria-label="View Projects"
          >
            <Rocket size={22} /> View Projects
          </motion.button>
        </NavLink>
      </div>

      {/* Floating Glow Accent */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-green-300/14 rounded-full blur-2xl z-0"
      />
    </section>
  );
};

export default Home;
