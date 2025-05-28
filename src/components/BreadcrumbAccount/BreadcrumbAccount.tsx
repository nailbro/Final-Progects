import React from 'react'
import './BreadcrumbAccount.scss'
import { Link } from 'react-router-dom'
import rightclocher from '../../assets/Image/Right-chevron.svg'
import { GoHome } from 'react-icons/go'
const BreadcrumbAccount = () => {
  return (
    <div className='Breadcrumbaccount'>
        <div className="Breadacc container">
            <Link to={'/'}>
      <GoHome className='gohomeacc'/>
      </Link>
<img src={rightclocher} alt="right" />
<p className='accauntclot'>Account</p>
<img src={rightclocher} alt="right" />
<p className='accauntclocher'>My profile </p>
        </div>
    </div>
  )
}

export default BreadcrumbAccount
