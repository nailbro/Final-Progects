import React from 'react'
import './Breadcrumdetail.scss'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'
import rightclocher from '../../assets/Image/Right-chevron.svg'
const Breadcrumbdetail = () => {
  return (
 <div className='Breadcrumbdetail'>
        <div className="Breaddetail container">
            <Link to={'/'}>
      <GoHome className='gohomeacc'/>
      </Link>
<img src={rightclocher} alt="right" />
<p className='detailclot'>Women</p>
<img src={rightclocher} alt="right" />
<p className='detailclocher'>Clothes</p>
<img src={rightclocher} alt="right" />
<p>Basic hooded sweatshirt in pink</p>
        </div>
    </div>
  )
}

export default Breadcrumbdetail
