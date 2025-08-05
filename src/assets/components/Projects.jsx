import React from "react";
import { motion } from "framer-motion";
import ecommerce from "../images/ecommerce.jpg"
import login from "../images/login.webp"
import book from "../images/book.webp"

const projects = [
  {
    title: "Animated Booking Site",
    description: "Modern and responsive booking interface with smooth animations, perfect for service-based businesses.",
    image: book,
    live: "https://madebybabli-booknow.netlify.app",
    code: "https://github.com/madebydev-babli/booknow",
  },
  {
    title: "E-commerce UI",
    description: "Responsive E-commerce interface with product cards, cart functionality, quantity control, and Animated UI built using React, Tailwind CSS and Framer Motion.",
    image: ecommerce,
    live: "https://madebybabli-ecommerce.netlify.app",
    code: "https://github.com/madebydev-babli/ecommerce-ui-madebybabli",
  },
  {
    title: "Signup/Login UI",
    description: "Modern Login and Signup interrface with protected routing and localStorage authentication. Created with React, Tailwind CSS and Framer Motion",
    image: login,
    live: "https://madebybabli-login-signup.netlify.app",
    code: "https://github.com/madebydev-babli/Login-Signup-ui-madebybabli",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 py-20 bg-gradient-to-b from-gray-950 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A collection of work that showcases my skills in modern web development and UI/UX design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />

            <div className="p-6 flex flex-col justify-between h-[230px]">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-full"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white text-sm px-4 py-2 rounded-full"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
