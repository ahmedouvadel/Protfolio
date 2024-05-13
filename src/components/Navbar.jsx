import logo from "../img/vdel.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-24 " src={logo} alt="logo"  />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ahmedou-vadel-346bb6231/"><FaLinkedin  /></a>
      <a href="https://github.com/ahmedouvadel"><FaGithub /></a>
      <a href="https://www.facebook.com/ahmed.vadel.79/"><FaFacebook /></a>
      <a href="https://www.instagram.com/_te_mo___/"><FaInstagram /></a>
      
    </div>
  </nav>
}

export default Navbar


