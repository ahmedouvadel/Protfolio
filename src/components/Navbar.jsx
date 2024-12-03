import logo from "../img/vdel.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24" src={logo} alt="logo" />
      </div>

      {/* Theme Toggle Button */}

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button
          onClick={toggleTheme}
          className="px-1 rounded-lg text-lg bg-slate-300 font-['Poppins'] dark:bg-neutral-950 text-gray-800 dark:text-gray-300 flex items-center justify-center"
        >
          <span className="hidden md:inline">
            {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </span>
          <span className="md:hidden">{isDarkMode ? "🌞" : "🌙"}</span>
        </button>
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
    </nav>
  );
};

export default Navbar;
