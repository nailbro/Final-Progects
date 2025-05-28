import './Services.scss'
import delivery from '../../../assets/Image/ic-delivery.png'
import callcenter from '../../../assets/Image/ic-call-center.png'
import shield from '../../../assets/Image/ic-shield.png'
import creditcard from '../../../assets/Image/ic-credit-card.png'
const Services = () => {
  return (
    <div className='services'>
      <div className="servis container">
        <div className="servises">
<img src={delivery} alt="" />
<h3>Fast Worldwide Shipping</h3>
<p>Get free shipping over $250</p>
</div>
<div className="diviler-gra"></div>
<div className="servises">
<img src={callcenter} alt="" />
<h3>24/7 Customer Support</h3>
<p>Friendly 24/7 customer support</p>
</div>
<div className="diviler-gra"></div>
<div className="servises">
<img src={shield} alt="" />
<h3>Money Back Guarantee</h3>
<p>We return money within 30 days</p>
</div>
<div className="diviler-gra"></div>
<div className="servises">
<img src={creditcard} alt="" />
<h3>Secure Online Payment</h3>
<p>Accept all major credit cards</p>
</div>
      </div>
    </div>
  )
}

export default Services
