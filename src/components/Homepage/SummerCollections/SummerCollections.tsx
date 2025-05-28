import './SummerCollections.scss'
import line from '../../../assets/Image/Right.svg'
import cruzchik from '../../../assets/Image/cruzchik.png'
const SummerCollections = () => {
  return (
    <section className="banners">
        <div className="banner">
      <div className="womenbanner">
        <div className="Side_up">
           <h3>Summer Collections</h3>
           <h2>Sale Up to 70%</h2> 
           <button>Explore new prices</button>
        </div>
      </div>
      <div className="the_week">
        <div className="Deal_of">
            <h3>Deal of the week</h3>
            <h2>Stay Warm With Our New Sweaters</h2>
            <button>Shop now</button>
            <p>Limited time offer</p>
            <div className="countdown">
                <div className="inner">
                <h3>06</h3>
                <small>Days</small>
                </div>
                <div className="inner">
                <h3>18</h3>
                <small>Hours</small>
                </div>
                <div className="inner">
                <h3>24</h3>
                <small>Mins</small>
                </div>
                <div className="inner">
                <h3>12</h3>
                <small>Sec</small>
                </div>
            </div>
        </div>
      </div>
      </div>
      <div className="new_colect">
<div className="new_collection">
    <div className="shoes">
    <h3>New collection</h3>
<h2>Shoes & Bags
<br />autumn / winter 2020 </h2>
<button>See offers <img src={line} alt="see" /></button>
    </div>
</div>
<div className="Getoff">
    <div className="forall">
        <h3>For All new Email Subscribers</h3>
        <h2>Get 5% Off & Free Delivery</h2>
<div className="btn_addon">
<label htmlFor="emal">Email</label>
    <form action="action">
        <input type="email" name="email" id="" placeholder='Your working email' required/>
    <button>Subscribe</button>
    </form>
</div>
<p>*Sign up to be the first to hear about exclusive deals, special 
<br />offers and upcoming collections.</p>
    </div>
    <div className="cruzchik"></div>
</div>
      </div>
    </section>
  )
}

export default SummerCollections