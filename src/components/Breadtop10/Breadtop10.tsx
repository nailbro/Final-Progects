import React from 'react'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'
import rightclocher from '../../assets/Image/Right-chevron.svg'
import './Breadtop10.scss'
const Breadtop10 = () => {
  return (
    <div className='breadtop10'>
              <div className="Breadtop container">
            <Link to={'/'}>
            <i><GoHome className='gohome'/></i>
      </Link>
<img src={rightclocher} alt="right" />
<Link to={'/fashionblock'} className='no-under'>
<p className='Fashionnews'>Fashion blog</p>
</Link>
<img src={rightclocher} alt="right" />
<p className='Top10news'>Top 10 of This Season’s Hottest Sneakers</p>
        </div>
    </div>
  )
}

export default Breadtop10
