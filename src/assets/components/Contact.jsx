import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="w-full px-6 py-20 bg-gradient-to-t from-black via-gray-900 to-gray-950 text-white"
      >
        <ToastContainer position="top-center"/>``
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
             For job opportunities, freelance projects, or collaborations.
          </p>
        </motion.div>

        <motion.form
          action="https://formsubmit.co/madebybabli@gmail.com"
          method="POST"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-gray-900 p-10 rounded-2xl border border-gray-800 shadow-lg"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-cyan-400">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your"
                className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-cyan-400">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-6 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-cyan-400">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Let's discuss your idea!"
              className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />
          </div>

          {/* Message */}
          <div className="mt-6 flex flex-col">
            <label className="mb-2 text-sm font-semibold text-cyan-400">Message</label>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Describe your idea or ask a question..."
              className="bg-gray-800 px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 w-full text-white font-bold py-3 rounded-lg transition-all shadow-lg"
            >
              🚀 Send Message
            </button>
          </div>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-cyan-400">BuiltbyBabli</h3>
            <p className="text-gray-400 text-sm">Designs that speak, code that performs.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Madebydev-Babli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/babli-chauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:madebybabli@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <Mail size={22} />
            </a>
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} BuiltbyBabli. All rights reserved.
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Contact;
