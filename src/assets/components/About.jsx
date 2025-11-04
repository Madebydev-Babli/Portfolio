import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaDatabase className="text-teal-300" />, name: "MongoDB" },
  { icon: <FaGithub className="text-gray-300" />, name: "GitHub" },
  { icon: <FaFigma className="text-pink-400" />, name: "Figma" },
];

const About = () => (
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

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-700 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
        <img
          src="/BABLII.jpeg"
          alt="Babli"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Developer Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-2xl text-gray-300 text-sm md:text-base mb-10"
    >
      Hi, I'm Babli! I build full-stack projects using the MERN stack—MongoDB, Express, React, and Node.js—plus animation and modern styling techniques.
      <br /><br />
      My passion is crafting interactive, responsive UIs and seamless e-commerce sites. I enjoy bringing real-world ideas to life, learning about APIs, cloud deployment, and all things modern JavaScript.
      <br /><br />
      Let’s make something modern, fast and beautiful — together!
    </motion.p>

    {/* Tech Skills */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-5">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.16, rotate: 8 }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-3xl md:text-4xl">{skill.icon}</span>
          <span className="text-xs text-gray-400">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default About;
