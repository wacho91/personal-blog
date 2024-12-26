
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
        <img src={Logo} className="w-[180px]" alt="" /> 
        <ul>
            <li onClick={() => navigate('/')} >Hpme</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <button>
            Subscribe <IoLogoYoutube />
        </button>
    </div>
  )
}

export default Header
