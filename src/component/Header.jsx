import { LOGO_CDN } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const  [btnLog, setbtnLog] = useState('Login')
  const online = useOnlineStatus();
  const {loggedInInfo} = useContext(UserContext)
  console.log(loggedInInfo)

 const cartItem = useSelector((store) => store.cart.items)
 console.log(cartItem)
  return (
    <div className='flex justify-between gap-10 bg-pink-300 shadow-lg h-20 w-full fixed z-50 px-24' >
      <div className="">
        <Link to={'/'}><img className='w-20  mix-blend-multiply' src={LOGO_CDN} alt="" /></Link>
      </div>

      <div className="flex items-center justify-between align-bottom ">
        <ul className="grid grid-flow-col place-items-center hover:cursor-pointer ">
        
          <li className="px-5"><Link to={"/"}>Home</Link></li>
          <li className="px-5"><Link to={"#"}>Menu</Link></li>
          <li className="px-5"><Link to={"/"}>Review</Link></li>
          <li className="px-5"><Link to={"/about"}>About</Link></li>
          <li className="px-5"> <Link to={"/cart"}>🛒<span  className="font-bold">{cartItem.length} items</span></Link></li>
          <li className="px-5"> <Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-5">Online status: {online ? "🟢" :"🔴"}</li>
          <div>
          <button className="ring-2 ring-pink-500 ring-inset px-10 rounded-md py-2 bg-slate-100 shadow-md hover:bg-slate-300 transition-all ease-in-out hover:shadow-xl " onClick={
            ()=>{
              btnLog === "Login" ?
              setbtnLog("Logout"):
              setbtnLog("Login")
            
          }}
          >{btnLog}</button>
          
          </div>
          <li className="p-2 underline font-bold">{loggedInInfo }</li>
        </ul>
        {/* <i class="fa-regular fa-user"></i> */}
      </div>
    </div>
  )
}
export default Header;
  // const  suhail =  "pagal";
  // const [] = useState();
