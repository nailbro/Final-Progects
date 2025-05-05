import './Header.scss'
import { FaUser, FaCaretDown, FaSearch } from 'react-icons/fa';
import flag from './flag-usa.svg'
import logo from './logo.png'
import search from './search.svg'
import heart from './outline.svg'
import cart from './Cart.svg'
const Header = () => {

  return (
    <header className='header'>
           <div className="header__top">
            <div className="asa container">
            <div className="ava">
            <p>Available 24/7 at<span>(405) 555-0128</span></p> 
            </div>
           <div className="header__lis">
 <ul>
    <li>Delivery & returns</li>
    <li>Track order</li>
    <li>Blog</li>
    <li>Contacts</li>
 </ul>
<div className="header-bar">
<img src= {flag} alt="flag" />
      <div className="lang-select">
        <span>Eng / $</span>
        <FaCaretDown className="icon" />
      </div>

      <div className="login">
        <FaUser className="icon" />
        <span>Log in / Register</span>
      </div>
    </div>
 </div>
        </div>
        </div>
        <div className="createx">
          <div className="createx__btn container">
          <img src={logo} alt="createx" />
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Girls</li>
          <li>Boys</li>
          <li>Sale</li>
        </ul>
        <div className="search">
<form className='form' action="">  
  <label htmlFor="">
    <input type="text" placeholder='Search for products...'  />
    </label>
    <button class="search-form_btn"><img className='search-form_image' src={search} alt="search"/></button>
   </form>
          </div>
  <div className="toobar">
    <img src={heart} alt="heart" />
    <h3>2</h3>
    <div className="divider"></div>
    <div className="cart">
      <img src={cart} alt="cart" />
      <h3>4</h3>
    </div>
  </div>
          </div>
        </div>
    </header>
  )
}

export default Header