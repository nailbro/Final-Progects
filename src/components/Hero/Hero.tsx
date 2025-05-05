import './Hero.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import line from '../../assets/Image/line.png'
import line2 from '../../assets/Image/line (1).png'
const Hero = () => {
  return (
    <main>
    <section className='hero'>
    <div className="Menswer container">
      <h3>New collection</h3>
      <h1>Menswear 2020</h1>
      <div className="btn">
        <div className="btnna">
      <button className='btn__shop'>Shop sale</button>
      <button className='shop_btn'>Shop the menswear</button>
      </div>
      </div>
      </div>
      <div className="slider_control">
        <div className="btn_prev">
        <button className='Left_btn'><FaArrowLeft/></button>
        <button className='Right_btn'><FaArrowRight/></button>
        </div>
        <div>
    </div>
      </div>
      <div className="pages container">
      <div className="pager">
      <h3>01</h3>
<button><img src={line} alt="" /></button>
</div>
<div className="pager2">
<h3>02</h3>
<button><img src={line2} alt="" /></button>
      </div>
      <div className="pager2">
<h3>03</h3>
<button><img src={line2} alt="" /></button>
      </div>
      <div className="pager2">
<h3>04</h3>
<button><img src={line2} alt="" /></button>
      </div>
      </div>
    </section>
    </main>
  )
}

export default Hero