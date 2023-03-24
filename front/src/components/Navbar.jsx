import React,{useState} from "react";
import {FaBars, FaTimes,FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import SCG from "../assets/img/SCG.png"
import {Link} from "react-scroll"


const Navbar = () =>{
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)


return(
<div className=" mt-0 w-full h-[80px] flex justify-between items-center px-4 bg-white text-green-600">
 <div>
    <img src={SCG} alt="logo ab" style={{width:'50px'}}/>
 </div>

 {/*menu*/}
 <div>
    <ul className="hidden md:flex ">
        <li>
        <Link  to="home"  smooth={true}  duration={500}>
        ACCUEIL
        </Link>
        </li>
        <li>
        <Link  to="apropos"  smooth={true}  duration={500}>
        Qui sommes-nous ?
        </Link>
        </li>
        <li>
        <Link  to="competence"  smooth={true}  duration={500}>
        Nos prestations  
        </Link>
        </li>
        <li>
        <Link  to="projets"  smooth={true}  duration={500}>
        Missions
        </Link>
        </li>
       <li>
        <Link  to="contact"  smooth={true}  duration={500}>
            CONTACT
        </Link>
        </li>
    </ul>
 </div>

 {/*conpress*/}
 <div onClick={handleClick} className="md:hidden z-10">
    {!nav ? <FaBars/> : <FaTimes/>}
 </div>
    {/*mobile menu*/}
    <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
        ACCUEIL
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="apropos"  smooth={true}  duration={500}>
        Qui sommes-nous ?
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="competence"  smooth={true}  duration={500}>
    
         NOS PRESTATIONS

        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick}  to="projets"  smooth={true}  duration={500}>
          MISSIONS
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="contact"  smooth={true}  duration={500}>
        CONTACT
        </Link>
        </li>
    </ul>
  {/*Social icons*/}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        


    </div>

</div>
)}

export default Navbar