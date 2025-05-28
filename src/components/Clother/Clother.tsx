import './Clother.scss'
import filter from '../../assets/Image/filter-1.svg'
import downline from '../../assets/Image/Down-chevron.svg'
import productn1 from '../../assets/Image/product-11.png'
import cofta from '../../assets/Image/cofta3.png'
import cap from '../../assets/Image/cap.png'
import footbol from '../../assets/Image/fotbol.png'
import product1 from '../../assets/Image/product-n1.png'
import boll from '../../assets/Image/boll.png'
import timechas from '../../assets/Image/timechas.png'
import bots from '../../assets/Image/bots.png'
import tolstovka from '../../assets/Image/tolstovka.png'
import deft from '../../assets/Image/deft2.png'
import sumka from '../../assets/Image/sumka2.png'
import productn2 from '../../assets/Image/product-n2.png'
import vectordown from '../../assets/Image/Vectordown.svg'
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import plus from '../../assets/Image/plus (1).svg'
const Clother = () => {
  return (
    <div className="toolls">
<div className="toolbar">
  <button className='toolbarbtn'>
    <div className="filter">
      <img src={filter} alt=""/>
    </div>
  Hide filters</button>
  <div className="sidebar1">
    <div className="sidebar2">
 <h4>Clothes</h4>
    <form action="">
    <input type="search" name="search" id="search" placeholder='Search the clothes type' required/>
    <button><i><CiSearch /></i></button>
    </form>
    </div>
    <div className="categories4">
      <div className="checkbox-item">
        <input type="checkbox" name="cek" id="cek" />
<p>Coats</p>
<span>(16)</span>
      </div>
      <div className="checkbox-item2">
        <input type="checkbox" name="cek" id="cek" />
<p>Jackets</p>
<span>(12)</span>
      </div>
      <div className="checkbox-item2">
        <input type="checkbox" name="cek" id="cek" />
<p>Suits</p>
<span>(5)</span>
      </div>
      <div className="checkbox-item2">
        <input type="checkbox" name="cek" id="cek" />
<p>Dresses</p>
<span>(11)</span>
      </div>
      <div className="checkbox-item2">
        <input type="checkbox" name="cek" id="cek" />
<p>Cardigans & sweaters</p>
<span>(18)</span>
      </div>
      <div className="checkbox-item2">
        <input type="checkbox" name="cek" id="cek" />
<p>Sweatshirts & hoodies</p>
<span>(21)</span>
      </div>
    </div>
    <div className="diviler5"></div>
    <div className="filter-categories">
      <h4>Size</h4>
      <button><img src={plus} alt="" /></button>
    </div>
        <div className="diviler5"></div>
            <div className="filter-categories">
      <h4>Color</h4>
      <button><img src={plus} alt="" /></button>
    </div>
      <div className="diviler5"></div>
                  <div className="filter-categories">
      <h4>Material</h4>
      <button><img src={plus} alt="" /></button>
    </div>
     <div className="diviler5"></div>
                      <div className="filter-categories">
      <h4>Brand</h4>
      <button><img src={plus} alt="" /></button>
    </div>
       <div className="diviler5"></div>
                          <div className="filter-categories">
      <h4>Price</h4>
      <button><img src={plus} alt="" /></button>
    </div>
  </div>
  <div className="sorting">
  <p>Sort by</p>
  <input type="button" value="popularity" />
  <img src={downline} alt="downline" />
</div>
<div className="pakeger">
  <h4>Show</h4>
  <input type="button" value="12" />
<img src={vectordown} alt="" />
  <p>products per page</p>
  <div className="pagination4">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>10</li>
      <li><FaArrowRightLong /></li>
    </ul>
  </div>
</div>
</div>
 <div className="clother-trend">
        <div className="prodactshen">
          <div className="clother-product">
            <div className="clother_set">
              <img src={cofta} alt="" />
            </div>
            <p>Shirt with insertion lace trims</p>
            <h4>$49.95</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={productn1} alt="" />
            </div>
            <p>Mid-rise slim cropped fit jeans</p>
            <h4>$40.00</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={cap} alt="" />
            </div>
            <p>Check coat with colour contrast</p>
            <h4>$183.45</h4>
          </div>
        </div>
        <div className="prodactshen2">
          <div className="clother-product">
            <div className="clother_set">
              <img src={footbol} alt="" />
            </div>
            <p>Green baby romper</p>
            <h4>$20.40</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={product1} alt="" />
            </div>
            <p>Check coat with colour contrast</p>
            <h4>$183.45</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={boll} alt="" />
            </div>
            <p>Red dangle earrings</p>
            <h4>$29.95</h4>
          </div>
        </div>
        <div className="prodactshen2">
          <div className="clother-product">
            <div className="clother_set">
              <img src={timechas} alt="" />
            </div>
            <p>Chrono watch with blue...</p>
            <h4>$120.60</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={bots} alt="" />
            </div>
            <p>Baby shoes with laces</p>
            <h4>$30.60</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={tolstovka} alt="" />
            </div>
            <p>Basic hooded sweatshirt in pink</p>
            <h4>$15.50</h4>
          </div>
        </div>
        <div className="prodactshen2">
          <div className="clother-product">
            <div className="clother_set">
              <img src={deft} alt="" />
            </div>
            <p>Skinny push-up jeans</p>
            <h4>$40.00</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={sumka} alt="" />
            </div>
            <p>Leather crossbody bag with...</p>
            <h4>$89.50</h4>
          </div>
          <div className="clother-product">
            <div className="clother_set">
              <img src={productn2} alt="" />
            </div>
            <p>Men fashion gray shoes</p>
            <h4>$85.50</h4>
          </div>
        </div>
      </div>
      <div className="toolbar2">
  <div className="sorting">
  <p>Sort by</p>
  <input type="button" value="popularity" />
  <img src={downline} alt="downline" />
</div>
<div className="pakeger">
  <h4>Show</h4>
  <input type="button" value="12" />
<img src={vectordown} alt="" />
  <p>products per page</p>
    <div className="pagination4">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>10</li>
      <li><FaArrowRightLong /></li>
    </ul>
  </div>
</div>
</div>
    </div>
  )
}

export default Clother