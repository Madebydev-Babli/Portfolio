import React from "react";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home"
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Navbar from "./assets/components/Navbar";
import Services from "./assets/components/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-black text-white">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    ),
  },
  {
    path: "/service",
    element: (
      <div>
        <Navbar />
        <Services />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/project",
    element: (
      <div>
        <Navbar />
        <Projects />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;