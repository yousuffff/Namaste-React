import { LOGO_CDN } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const  [btnLog, setbtnLog] = useState('Login')
  const online = useOnlineStatus();
  return (
    <div className='header'>
      <div className="logo-container">
        <Link to={'/'}><img className='logo' src={LOGO_CDN} alt="" /></Link>
      </div>

      <div className="navigation-link">
        <ul>
        
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"#"}>Menu</Link></li>
          <li><Link to={"/"}>Review</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Online status: {online ? "🟢" :"🔴"}</li>
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
