import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center border-b border-white/10">
      <h1 className="text-cyan-400 text-xl font-bold">?BuiltbyBabli</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-cyan-300 font-medium text-sm md:text-base">
        <li>
          <NavLink to="/" onClick={() => scrollToSection("home")} className="hover:text-cyan-200 transition">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => scrollToSection("about")} className="hover:text-cyan-200 transition">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/service" onClick={() => scrollToSection("service")} className="hover:text-cyan-200 transition">SERVICES</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => scrollToSection("home")}className="hover:text-cyan-200 transition">CONTACT</NavLink>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-cyan-300" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-6 bg-gray-900 border border-gray-700 rounded-xl px-6 py-4 flex flex-col gap-4 text-sm text-cyan-200 w-40 shadow-xl md:hidden animate-slide-down z-50">
          <li><NavLink to="/" onClick={() => scrollToSection("home")}>HOME</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink to="/service" onClick={() => setIsOpen(false)}>SERVICES</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
