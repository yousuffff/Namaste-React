import { LOGO_CDN } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const  [btnLog, setbtnLog] = useState('Login')
  return (
    <div className='header'>
      <div className="logo-container">
        <img className='logo' src={LOGO_CDN} alt="" />
      </div>

      <div className="navigation-link">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"#"}>Menu</Link></li>
          <li><Link to={"/"}>Review</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <button className="login-btn" onClick={
            ()=>{
              btnLog === "Login" ?
              setbtnLog("Logout"):
              setbtnLog("Login")
            
          }}
          >{btnLog}</button>
        </ul>
        {/* <i class="fa-regular fa-user"></i> */}
      </div>
    </div>
  )
}
export default Header;
  // const  suhail =  "pagal";
  // const [] = useState();
