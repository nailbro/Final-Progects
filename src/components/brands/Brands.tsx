import React from 'react'
import './Brands.scss'
import inDepht from '../../assets/Image/InDepth-Consulting-Logo.png'
import Higher from '../../assets/Image/Higher-Fit-Logo.png'
import sentinal from '../../assets/Image/Sentinal-Consulting-Logo.png'
import National from '../../assets/Image/National-Health-Logo.png'
import OrSale from '../../assets/Image/For-SaleLogo.png'
import dermay from '../../assets/Image/Del-Mar-Strategy-Logo.png'
const Brands = () => {
  return (
    <div className='Brands'>
      <div className="BrandLogo">
<img src={inDepht} alt="indehpt" />
<img src={Higher} alt="higher" />
<img src={sentinal} alt="sentinal" />
<img src={National} alt="national" />
<img src={OrSale} alt="orsale" />
<img src={dermay} alt="dermay" />
      </div>
    </div>
  )
}

export default Brands
