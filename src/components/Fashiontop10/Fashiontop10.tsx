import React from 'react'
import './Fashiontop10.scss'
import { IoMdChatbubbles } from 'react-icons/io'
import braces from '../../assets/Image/braces.svg'
import { FaFacebookF, FaLinkedinIn, FaRegCheckCircle } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import clock from '../../assets/Image/Clock.svg';
import post1 from '../../assets/Image/post-1.png';
import post2 from '../../assets/Image/post-2.png';
const Fashiontop10 = () => {
  return (
    <div className='acticlenews'>
        <div className="acticlenews_top">
    <div className="postheader">
<h1>Top 10 of This Season’s Hottest <br />Sneakers</h1>
<div className="postmeta2">
    <ul>
        <li>Lifestyle</li>
        <div className="diviler6"></div>
        <li>July 16, 2020</li>
                <div className="diviler6"></div>
        <li className='postcomment'><i><IoMdChatbubbles className='comment4'/></i> 4 comments</li>
    </ul>
</div>
   </div>
   <div className="blognews"></div>
   <div className="pnews">
<p>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. <br /> Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam <br />diam quis est hendrerit ac euismod. </p>
<p>At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim.
    <br /> Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec
    <br /> rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel. </p>
    <p>Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, 
        <br />elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula <br />
         rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.</p>
   <p></p>
   </div>
   <div className="braces">
<img src={braces} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam 
    <br />viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id
     <br />turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam 
    <br />eros. Vel accumsan at elit neque, ipsum.  </p>
   </div>
   <div className="mauris">
    <p>Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non 
  <br />      brfringilla blandit:</p>
        <div className="buleted-list">
            <div className="buleted-line">
 <i><FaRegCheckCircle /></i>
            <span>A fermentum in morbi pretium aliquam adipiscing donec tempus.</span>
            </div>
                       <div className="buleted-line">
 <i><FaRegCheckCircle /></i>
<span>Vulputate placerat amet pulvinar lorem nisl.</span>
            </div>            <div className="buleted-line">
 <i><FaRegCheckCircle /></i>
<span>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</span>
            </div>            <div className="buleted-line">
 <i><FaRegCheckCircle /></i>
<span>Etiam duis lobortis in fames ultrices commodo nibh.</span>
            </div>
        </div>
        <p className='enim'>Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna,
            <br /> risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus
            <br /> enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor 
            <br />volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
   </div>
   <div className="tags-sharing">
    <div className="tags-shar">
        <span>Tags:</span>
        <div className="tagbtn">
            <button>#trends</button>
        </div>
         <div className="tagbtn2">
            <button>#inspiration</button>
        </div>
         <div className="tagbtn3">
            <button>#designers</button>
        </div>
    </div>
    <div className="share">
        <span>Share:</span>
        <i><FaFacebookF/></i>
        <i><FaInstagram/></i>
        <i><FaTwitter/></i>
        <i><FaLinkedinIn/></i>
    </div>
   </div>
   <div className="post-navigation">
    <div className="prev-post">
        <div className="prev1">
        <i><FaArrowLeftLong /></i>
        <h3>Prev Post</h3>
        </div>
        <div className="post4">
                      <Link to={'/fashionblock'} className='no-under'>
                    <img src={post1} alt="noshki" />
                    </Link>
                    <div className="title">
                      <div className="data">
                        <img src={clock} alt="clock" />
                        <span>April 9, 2020</span>
                      </div>
                      <Link to={'/fashionblock'} className='no-under'>
                      <p>Best Fashion Instagrams of the Week</p>
                      </Link>
                    </div>
        </div>
    </div>
    <div className="next-post">
        <div className="next">
            <h3>Next Post</h3>
                      <i><FaArrowRightLong /></i>
        </div>
                  <div className="post5">
                                          <Link to={'/Fashionnews'} className='no-under'>
                    </Link>
                    <div className="title">
                      <div className="data">
                        <img src={clock} alt="clock" />
                        <span>March 12, 2020</span>
                      </div>
                      <Link to={'/Fashionnews'} className='no-under'>
                       <p>Top 10 Looks from the Venice Film Festival</p>
                      </Link>   
                    </div>
                                 <img src={post2} alt="noshki" />
                  </div>
    </div>
   </div>
       </div>    
    </div>
  )
}

export default Fashiontop10
