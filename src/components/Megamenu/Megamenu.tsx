import React from 'react'
import './Megamenu.scss'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Megamenu = () => {
  return (
    <section className='megamenu'>
        <div className="megamenu2">
      <div className="megamen">
        <ul>
          <li>New collection</li>
        </ul>
        <div className="bestsel">
        <ul>
            <li>Best Sellers</li>
            <li>Plus Size</li>
            <li>Sale up to 70%</li>
        </ul>
        </div>
      </div>
      <div className="clother">
        <h3>CLOTHES</h3>
        <ul>
            <li>Coats</li>
            <li>Jackets</li>
            <li>Suits</li>
            <li>Dresses </li>
            <li>Cardigans & sweaters</li>
            <li>Sweatshirts & hoodies</li>
            <li>T-shirts & tops</li>
            <li>Pants</li>
            <li>Jeans</li>
            <li>Shorts</li>
            <li>Skirts</li>
            <li>Lingerie & nightwear</li>
            <li>Sportswear</li>
            <li>Swimwear</li>
        </ul>
      </div>       
      <div className="newshoes">
        <h3>SHOES</h3>
        <ul>
          <li>Boots</li>
          <li>Flat shoes</li>
          <li>Heels</li>
          <li>Sandals</li>
          <li>Mules</li>
          <li>Sliders</li>
          <li>Slippers</li>
          <li>Sneakers</li>
          <li>Leather</li>
        </ul>
        </div>  
        <div className="acessor">
          <h3>ACCESSORIES</h3>
          <ul>
            <li>Bags & bagpacks</li>
            <li>Hats & scarves</li>
            <li>Hair accessories</li>
            <li>Belts</li>
            <li>Jewellery</li>
            <li>Watches</li>
            <li>Sunglasses</li>
            <li>Purses</li>
            <li>Gloves</li>
            <li>Socks & tights</li>
          </ul>
          </div> 
          <div className="megabanner">
         <div className="megamenubanner"></div>
         <h3>Back to school. Sale up to 50%</h3>
         <button>See offers          <HiOutlineArrowNarrowRight className='hiout'/></button>

          </div>
 
        </div>
    </section>
  )
}

export default Megamenu
