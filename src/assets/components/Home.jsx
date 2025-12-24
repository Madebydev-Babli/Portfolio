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
      <div className="absolute w-[320px] md:w-[480px] h-[320px] md:h-[480px] bg-cyan-400/25 blur-[100px] rounded-full top-[-100px] left-[-100px] animate-pulse z-0" />

      <div className="z-10 w-full max-w-lg mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Name & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent leading-snug"
        >
          Hi, I'm Babli.<br /> Full-Stack Web Developer
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-block text-sm md:text-base font-medium text-cyan-300 mb-5 tracking-wide"
        >
          MERN | API Integration | Usable Web Interfaces
        </motion.span>

        {/* Brief Professional About */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-xs sm:text-sm md:text-base text-gray-300 mb-8 leading-normal max-w-md"
        >
          I build robust, scalable apps with clean code and a focus on modern UX.<br />
          Let’s ship real products that make a difference.
        </motion.p>

        {/* CTA Button */}
        <div className="flex gap-4 flex-wrap justify-center">
   <NavLink to="/project" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22d3ee88" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340 }}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2.5 rounded-full font-semibold text-base shadow-lg outline-none focus:ring-2 focus:ring-green-400"
            aria-label="View Projects"
          >
            <Rocket size={18} /> View Projects
          </motion.button>
        </NavLink>

  <NavLink to="/service">
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="border border-cyan-400 text-cyan-300 px-5 py-2.5 rounded-full font-semibold"
    >
      💼 For Businesses
    </motion.button>
  </NavLink>
</div>
      </div>

      {/* Floating Glow Accent */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-green-300/14 rounded-full blur-2xl z-0"
      />
    </section>
  );
};

export default Home;
