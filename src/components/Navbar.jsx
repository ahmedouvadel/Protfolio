import { useState } from "react";
import logo from "../img/vdel.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-300 dark:bg-neutral-950 shadow-md z-50 flex items-center justify-between px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-16" src={logo} alt="logo" />
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden lg:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-lg font-medium hover:text-cyan-500 transition">
          About
        </a>
        <a href="#technologies" className="text-lg font-medium hover:text-cyan-500 transition">
          Technologies
        </a>
        <a href="#projects" className="text-lg font-medium hover:text-cyan-500 transition">
          Projects
        </a>
        <a href="#experience" className="text-lg font-medium hover:text-cyan-500 transition">
          Experience
        </a>
        <a href="#contact" className="text-lg font-medium hover:text-cyan-500 transition">
          Contact
        </a>
      </div>

      {/* Social Links */}
      <div className="hidden lg:flex gap-4 items-center text-2xl">
        <a
          href="https://www.linkedin.com/in/ahmedou-vadel-346bb6231/"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/ahmedouvadel" aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/ahmed.vadel.79/"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_te_mo___/" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>

      {/* Theme Toggle and Drawer Toggle Button for Small Screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleTheme}
          className="px-2 rounded-lg text-lg bg-slate-300 font-['Poppins'] dark:bg-neutral-950 text-gray-800 dark:text-gray-300 flex items-center justify-center mr-4"
        >
          <span>{isDarkMode ? "🌞" : "🌙"}</span>
        </button>
        <button onClick={toggleDrawer} className="text-2xl">
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Drawer for Small Screens */}
      {drawerOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-neutral-800 text-white z-50 p-6 shadow-lg">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-2xl"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-6 mt-10">
            <li>
              <a
                href="#about"
                className="text-lg font-medium hover:text-cyan-500 transition"
                onClick={toggleDrawer} // Close drawer on click
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="text-lg font-medium hover:text-cyan-500 transition"
                onClick={toggleDrawer}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-medium hover:text-cyan-500 transition"
                onClick={toggleDrawer}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-lg font-medium hover:text-cyan-500 transition"
                onClick={toggleDrawer}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-cyan-500 transition"
                onClick={toggleDrawer}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Social Links */}
          <div className="mt-10 flex justify-around text-2xl">
            <a
              href="https://www.linkedin.com/in/ahmedou-vadel-346bb6231/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/ahmedouvadel" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/ahmed.vadel.79/"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/_te_mo___/" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
