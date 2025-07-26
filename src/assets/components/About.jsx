import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  { icon: <FaFigma className="text-pink-400" />, name: "Figma" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 flex flex-col items-center text-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-cyan-400"
      >
        About Me
      </motion.h2>

      {/* Profile Image with glow effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white-400 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src="/BABLII.jpeg" 
            alt="Babli"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-gray-300 text-sm md:text-base mb-10"
      >
        I’m Babli, a creative web developer passionate about building clean, animated, and responsive UIs. 
        I love turning ideas into real, modern websites using tools like React, Tailwind CSS, and Framer Motion.  
        Let's work together and build something amazing — MadebyBabli style! 🚀
      </motion.p>

      {/* Skills */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-xs text-gray-400">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
