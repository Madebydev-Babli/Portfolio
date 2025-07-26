import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} className="text-cyan-400" />,
    title: "Landing Page",
    desc: "High-converting animated page for products, creators, and businesses.",
    price: "$49",
  },
  {
    icon: <Smartphone size={32} className="text-cyan-400" />,
    title: "Full Responsive Website",
    desc: "Multi-page mobile-first website with smooth UX & fast performance.",
    price: "$99",
  },
  {
    icon: <LayoutDashboard size={32} className="text-cyan-400" />,
    title: "UI/UX Design + Build",
    desc: "Custom layout design + coded React build with animations.",
    price: "$149",
  }
];

const Services = () => {
  return (
    <section
      id="service"
      className="w-full px-6 py-20 bg-gradient-to-b from-gray-950 to-black text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        My Services
      </motion.h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all flex flex-col justify-between"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
            <p className="text-lg font-bold text-green-400 mb-4">{service.price}</p>
            <a
              href="#contact"
              className="mt-auto inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-full transition"
            >
              Book Now
            </a>
          </motion.div>
        ))}
      </div>

      {/* Call-to-action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16"
      >
        <a
          href="https://www.fiverr.com/babli-chauhan" //
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition"
        >
          🔥 Hire Me on Fiverr
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
