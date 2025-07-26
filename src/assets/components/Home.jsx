import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-400/20 blur-[150px] rounded-full top-[-120px] left-[-120px] animate-pulse z-0" />

      {/* Hero Content */}
      <div className="z-10 w-full max-w-4xl mx-auto px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent leading-tight"
        >
          Hi, I’m Babli.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
        >
          I design and build fast, animated, and responsive websites that leave a lasting impact. Let’s make something awesome together.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          <Rocket size={18} />
          <NavLink to="/project">View Projects</NavLink>
        </motion.div>
      </div>

      {/* Floating Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-10 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-green-300/10 rounded-full blur-2xl z-0"
      />
    </section>
  );
};

export default Home;
