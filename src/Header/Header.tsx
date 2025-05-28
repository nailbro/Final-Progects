import './Header.scss';
import { FaUser } from 'react-icons/fa';
import flag from './flag-usa.svg';
import logo from './logo.png';
import search from './search.svg';
import heart from './outline.svg';
import cart from './Cart.svg';
import { Link } from 'react-router-dom';
import downline from '../assets/Image/downline.svg';
import React, { useState } from 'react';
import Megamenu from '../components/Megamenu/Megamenu';
import SingIn from '../components/SingIn/Singin';
import SingUp from '../components/SingUp/SingUp';

const Header = () => {
const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSingIn, setShowSingIn] = useState(false);
  const [showSingUp, setShowSingUp] = useState(false);

  const openSingIn = () => {
    setShowSingIn(true);
    setShowSingUp(false);
  };

  const openSingUp = () => {
    setShowSingUp(true);
    setShowSingIn(false);
  };

  const closeModals = () => {
    setShowSingIn(false);
    setShowSingUp(false);
  };


  return (
    <header className='header'>
      <div className="header__top">
        <div className="asa container">
          <div className="ava">
            <a href="tel:4055550128"><p>Available 24/7 at<span>(405) 555-0128</span></p></a>
          </div>
          <div className="header__lis">
            <ul>
              <li>Delivery & returns</li>
              <li>Track order</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
            <div className="flag">
              <img src={flag} alt="flag"/>
            </div>
            <div className="header-bar">
              <div className="lang-select">
                <details>
                  <summary> <img src={downline} alt="downline" />Eng / $</summary>
                  <div className="lang-p">
                    <p>Eng</p>
                    <p>Rus</p>
                  </div>
                </details>
              </div>  
            </div>
            <div className="login">
              <Link to={'/profile'} className="no-under">
                <i><FaUser className="icons" /></i>
              </Link>
              <a href="#" className='no-under' onClick={openSingIn}>
                <span>Log in / Register</span>
              </a>       
            </div>
          </div>
        </div>
      </div>
      <div className="createx">
        <div className="createx__btn container">
          <div className="logocreatex">
            <Link to={'/'}>
              <img src={logo} alt="createx" />
            </Link>
          </div>
          
          <div className="boys">
            <ul>
              <Link to={'/women/clother'} className="no-underline-link">
                <li id='text'>Women</li>
              </Link>
              <Link to={'/women/clother'} className="no-underline-link">
                <li>Men</li>
              </Link>
              <Link to={'/women/clother'} className="no-underline-link">
                <li>Girls</li>
              </Link>
              <Link to={'/women/clother'} className="no-underline-link">
                <li>Boys</li>
              </Link>
            </ul>
          </div>
          <div 
            className="sale" 
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <ul>
              <li>Sale</li>
            </ul>
          </div>
          <div className="search">
            <form className='form' action="">  
              <label htmlFor="">
                <input type="text" placeholder='Search for products...' required/>
              </label>
              <button className="search-form_btn"><img className='search-form_image' src={search} alt="search"/></button>
            </form>
          </div>
          <div className="toobar">
            <img src={heart} alt="heart" />
            <h3 className='hearttext'>2</h3>
            <div className="divider"></div>
            <div className="cart">
              <img src={cart} alt="cart" />
              <h3>4</h3>
            </div>
          </div>
        </div>
      </div>
      {showMegaMenu && (
        <div 
          className="mega-menu-wrapper"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <Megamenu />
        </div>
      )}
 {showSingIn && (
        <div className="modal-overlay">
          <SingIn 
            onClose={closeModals} 
            onSwitchToSignUp={openSingUp}
          />
        </div>
      )}
 {showSingUp && (
        <div className="modal-overlay">
          <SingUp 
            onClose={closeModals} 
            onSwitchToSignIn={openSingIn}
          />
        </div>
      )}



    </header>
  );
};

export default Header;