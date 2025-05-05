import './Footer.scss'
import { FaFacebook, FaFacebookF, FaHeart, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
   <footer className='footer'>
    <div className="footer_top container">
        <div className="footer_flex">
    <div className="help">
<h3>HELP</h3>
<ul>
<li>Delivery & returns</li>
<li>FAQ</li>
<li>Track order</li>
<li>Contacts</li>
<li>Blog</li>
</ul>
</div>
<div className="shop">
<h3>SHOP</h3>
<ul>
<li>New arrivals</li>
<li>Trending now</li>
<li>Sales</li>
<li>Brands</li>
</ul>
</div>
<div className="contacts">
    <h3>Get in touch</h3>
    <div className="call">
        <p>Call:</p>
        <span>(405) 555-0128</span>
    </div>
    <div className="email">
        <p>Email:</p>
        <span>hello@createx.com</span>
    </div>
    <div className="socials">
        <div className="shape">
        <FaFacebookF />  
        </div>
        <div className="shape">
    <FaInstagram />
    </div>
    <div className="shape">
    <FaTwitter/>
    </div>
    <div className="shape">
    <FaYoutube/>
    </div>
    <div className="shape">
<FaPinterest/>
</div>
    </div>

</div>
<div className="download_app">
    <h2>Download our app</h2>
</div>
</div>
    </div>
    <div className="dividerw">
    <div className="copyright container">
        <div className="copyright_flex">
        <p>© All rights reserved. Made with</p>
        <FaHeart className='Heard'/>
        <p>by Createx Studio </p>
        <h3>Go to top</h3>
        </div>
</div>
    </div>
   </footer>
  )
}

export default Footer
