import React from 'react'
import './instagram.scss'
import niga from '../../../assets/Image/niga.png'
import insta2 from '../../../assets/Image/insta-2.png'
import insta3 from '../../../assets/Image/insta-3.png'
import { FaInstagram } from 'react-icons/fa'

const Instagram = () => {
  return (
    <div className='instagram'>
        <div className="instagram__top">
        <h4>Follow us on Instagram</h4>
        <h1>@createx_store</h1>
         <button><FaInstagram className='inst'/><a href="https://www.instagram.com/prosto_naili?igsh=cXVvZHNoZWMyeGR6"><p>Follow instagram</p></a></button>
        </div>
        <div className="instagram_img">
            <img src={niga} alt="niga" />
            <img src={insta2} alt="insta2" />
            <img src={insta3} alt="insta3" />
        </div>
    </div>
  )
}

export default Instagram


