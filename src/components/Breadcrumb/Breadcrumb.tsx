import './Breadcrumb.scss'
import rightclocher from '../../assets/Image/Right-chevron.svg'
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
const Breadcrumb = () => {
  return (
    <div className='Breadcrumb'>
        <div className="Breadcru container">
            <Link to={'/'}>
            <i><GoHome className='gohomeacc'/></i>
      </Link>
<img src={rightclocher} alt="right" />
<p className='Womenclother'>Women</p>
<img src={rightclocher} alt="right" />
<p className='clother'>Clothes</p>
        </div>
    </div>
  )
}

export default Breadcrumb
