import './Breadcrumbtwo.scss'
import { Link } from 'react-router-dom'
import rightclocher from '../../assets/Image/Right-chevron.svg'
import { GoHome } from 'react-icons/go'
const Breadcrumbtwo = () => {
  return (
    <div className='fashiondiv'>
        <div className="fashiona container">
            <Link to={'/'}>
      <GoHome className='gohome'/>
      </Link>
<img src={rightclocher} alt="right" />
<p className='fashionlock'>Fashion blog</p>
        </div>
    </div>
  )
}

export default Breadcrumbtwo
