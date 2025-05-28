import './Footer.scss'
import { FaFacebook, FaFacebookF, FaHeart, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import apple from '../assets/Image/apple.png';
import google from '../assets/Image/google.png'
import vector2 from '../assets/Image/Vector (1).png'
import vector3 from '../assets/Image/Vector3.svg'
import vector4 from '../assets/Image/Vector (2).png'


interface AppStoreButtonProps {
    appStoreUrl: string;
    className?: string;
}

interface GooglePlayButtonProps {
    googlePlayUrl: string;
    className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ appStoreUrl, className }) => {
    const handleClick = () => {
        window.open(appStoreUrl, '_blank');
    };


    return (
        <div className="btss">
        <button 
        
            onClick={handleClick}>
                 <img className='apple' src={apple} alt="apple" />
<img className='vector2' src={vector2} alt="" />
        </button>
        </div>
    );
};

const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({ googlePlayUrl, className }) => {
    const handleClick = () => {
        window.open(googlePlayUrl, '_blank');
    };

    return (
        <div className="btndowload">
        <button
            onClick={handleClick}
      >
        <img className='google' src={google} alt="google" />
        <div className="vectus">
        <img src={vector3} alt="" />
        </div>
        <div className="vectus2">
        <img src={vector4} alt="" />
        </div>
        </button>
        </div>
    );
};

interface DownloadButtonsProps {
    appStoreUrl?: string;
    googlePlayUrl?: string;
    appStoreClassName?: string;
    googlePlayClassName?: string;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({
    appStoreUrl,
    googlePlayUrl,
    appStoreClassName,
    googlePlayClassName
}) => {
    return (
        <div className="flex gap-4">
            {appStoreUrl && (
                <AppStoreButton
                    appStoreUrl={appStoreUrl}
                    className={appStoreClassName}
                />
            )}
            {googlePlayUrl && (
                <GooglePlayButton
                    googlePlayUrl={googlePlayUrl}
                    className={googlePlayClassName}
                />
            )}
        </div>
    );
};

const Footer = () => {
    const appStoreLink = 'https://apps.apple.com/';  
    const googlePlayLink = 'https://play.google.com/'; 

   const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        console.warn(`Элемент с ID "${id}" не найден.`);
    }
};


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
<li><a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('new-arrivals-section'); // Прокрутка к New Arrivals
                                }}>New arrivals</a>
                                </li>

<li><a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('trending-now-section'); // Прокрутка к New Arrivals
                                }}>Trending now</a>
                                </li>
<li><a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('saleup-scroll'); 
                                }}>Sales</a></li>
<li><a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('brands-scroll'); 
                                }}>Brands</a></li>
</ul>
</div>
<div className="contacts">
    <h3>Get in touch</h3>
    <div className="call">
        <p>Call:</p>
        <a href="tel:(405) 555-0128">
  <span>(405) 555-0128</span>
        </a>
    </div>
    <div className="email">
        <p>Email:</p>
        <a href="mailto:hello@createx.com">
    <span>hello@createx.com</span>
        </a>
    </div>
    <div className="socials">
        <i className="shape">
        <FaFacebookF />  
        </i>
        <i className="shape">
    <FaInstagram />
    </i>
    <i className="shape">
    <FaTwitter/>
    </i>
    <i className="shape">
    <FaYoutube/>
    </i>
    <i className="shape">
<FaPinterest/>
</i>
    </div>

</div>
<div className="download_app">
    <h2>Download our app</h2>
      <div className="btnStore">
                        <DownloadButtons
                            appStoreUrl={appStoreLink}
                            googlePlayUrl={googlePlayLink}
                        />
                    </div>
</div>
</div>
    </div>
    <div className="dividerw"></div>
    <div className="copyright">
        <div className="copyright_flex">
        <p>© All rights reserved. Made with</p>
        <FaHeart className='Heard'/>
        <p>by Createx Studio </p>
        <h3>Go to top</h3>
        </div>
</div>
   </footer>
  )
}

export default Footer
