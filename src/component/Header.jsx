import { LOGO_CDN } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const  [btnLog, setbtnLog] = useState('Login')
  return (
    <div className='header'>
      <div className="logo-container">
        <img className='logo' src={LOGO_CDN} alt="" />
      </div>

      <div className="navigation-link">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Reviews</li>
          <li>About</li>
          <li>Contact</li>
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
