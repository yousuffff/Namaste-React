import { LOGO_CDN } from "../utils/constant";

const Header = () => {
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
        </ul>
        {/* <i class="fa-regular fa-user"></i> */}
      </div>
    </div>
  )
}
export default Header;