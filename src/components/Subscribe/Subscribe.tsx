import React from 'react'
import './Subscribe.scss'
import messages from '../../assets/Image/messages.png'
const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="message">
    <img src={messages} alt="message" />
    </div>
      <div className="subscribe_top container">
<h1>Subscribe for updates</h1>
<h3>Subscribe for exclusive early sale access and new arrivals.</h3>
<div className="checkbox">
<input type="button" value="Women" />
<input type="button" value="Men" />
<input type="button" value="Girls" />
<input type="button" value="Boys" />
</div>
<div className="input_group">
    <form action="">
    <label htmlFor="Email">Email</label>    
    <input type="text" name="" id=""  placeholder='Your working email'/>
    <button>Subscribe</button>
        </form>
</div>
<div className="checkbox2">
    <input type="checkbox" name="" id="" />
   <p>I agree to receive communications from Createx Store.</p>
</div>
      </div>
    </div>
  )
}

export default Subscribe
