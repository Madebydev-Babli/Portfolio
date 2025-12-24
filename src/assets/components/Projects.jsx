import React from "react";
import { motion } from "framer-motion";
import ecommerce from "../images/ecommerce.jpg";
import booking from "../images/book.webp";
import printing from "../images/login.webp";

const projects = [
  {
    title: "MERN E-commerce Platform (Admin Panel & Payments)",
    description:
      "A full-stack e-commerce application built using the MERN stack. Implements role-based authentication (admin/user), secure REST APIs, product and order management, cart functionality, and Razorpay payment integration. Includes a dedicated admin panel for managing products and orders. An AI API is used to assist admins by generating product descriptions during product creation.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Razorpay",
    ],
    image: ecommerce,
    liveAdmin: "https://ecommerce-website-mern-1-admin.onrender.com",
    liveUser: "https://ecommerce-website-mern-frontend-vc2w.onrender.com",
    code: "https://github.com/madebydev-babli/Ecommerce-Website-MERN",
    featured: true,
  },
  {
    title: "Animated Booking Website",
    description:
      "A responsive booking interface designed for service-based businesses. Focuses on clean UI, smooth animations, and mobile-friendly layout. Built to demonstrate component-based design and user interaction using modern frontend tools.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: booking,
    live: "https://madebybabli-booknow.netlify.app",
    code: "https://github.com/madebydev-babli/booknow",
  },
  {
    title: "Printing Business Website UI",
    description:
      "A modern business website UI with WhatsApp call-to-action buttons and a dynamic price calculator. Designed to improve customer engagement and provide quick quotation estimates.",
    tech: ["React", "Tailwind CSS"],
    image: printing,
    live: "https://madebybabli-login-signup.netlify.app",
    code: "https://github.com/madebydev-babli/printingbusiness-ui-madebybabli",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-20 bg-gradient-to-b from-gray-950 to-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Real-world projects demonstrating my skills in full-stack and frontend
          web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`relative bg-gray-900 border rounded-xl overflow-hidden shadow-lg flex flex-col ${
              project.featured
                ? "border-cyan-500 shadow-cyan-500/30"
                : "border-gray-800"
            }`}
          >
            {/* Featured Badge */}
            {project.featured && (
              <span className="absolute top-4 right-4 bg-cyan-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                Featured Project
              </span>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-semibold text-cyan-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 border border-gray-700 px-2 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap mt-auto">
                {project.liveAdmin && project.liveUser ? (
                  <>
                    <a
                      href={project.liveAdmin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-full"
                    >
                      Admin Demo
                    </a>
                    <a
                      href={project.liveUser}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full"
                    >
                      User Demo
                    </a>
                  </>
                ) : (
                  project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-full"
                    >
                      Live Demo
                    </a>
                  )
                )}

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
