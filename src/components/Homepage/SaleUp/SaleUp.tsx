import React from 'react'
import './SaleUp.scss'
import sumka from '../../../assets/Image/sumka.png'
import shon from '../../../assets/Image/deft.png'
import cabluk from '../../../assets/Image/cab.png'
const SaleUp = () => {
  return (
<div className="saleup">
<div className="saleup_top">
<h1>Sale up to 70%</h1>
</div>
<div className="salein">
  <div className="saleind">
  <img src={sumka} alt="" />
  <p>Leather crossbody bag with gold hardware</p>
  <h4>$89.50</h4>
  </div>
  <div className="saleind">
  <img src={shon} alt="" />
  <p>Skinny push-up jeans</p>
  <h4>$40.00</h4>
  </div>
  <div className="saleind">
  <img src={cabluk} alt="" />
  <p>Wide heel suede ankle boots</p>
  <h4>$$119.16</h4>
  </div>

</div>
<div className="btn_sale">
  <button>See all sale products</button>
</div>
</div>
  )
}

export default SaleUp
