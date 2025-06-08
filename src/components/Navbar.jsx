import logo from "../assets/SanjayKumarMandruLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img  className = "mx-2 w-11" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sanjay-mandru-8507821b4/?trk=opento_sprofile_topcard" target="blank">
            <FaLinkedin/></a>
            <a href="https://github.com/mandrusanjay123" target="blank">
            <FaGithub/></a>
            <a href="https://www.instagram.com/_sanjay.10m/" target="blank">
            <FaInstagram/></a>
            <a href="https://x.com/MandruKuma34172" target="blank">
            <FaSquareXTwitter/></a> 
    </div>
  </nav>
};

export default Navbar
