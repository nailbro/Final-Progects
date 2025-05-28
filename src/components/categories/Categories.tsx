import womens from '../../assets/Image/image.png'
import mens from '../../assets/Image/image (1).png'
import kids from '../../assets/Image/image (3).png'
import './Categories.scss'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className="categories">
        <div className="categorie">
          <Link to={'/women/clother'} className='catertext'>
        <img src={womens} alt="women" />
        <p>Women’s</p>
        </Link>
        </div>
        <div className="cater">
                 <Link to={'/women/clother'} className='catertext'>
      <img src={mens} alt="men" />
      <p>Men’s</p>
      </Link>
      </div>
      <div className="cater2">
           <Link to={'/women/clother'} className='catertext'>
      <img src={kids} alt="kids" />
      <p>Kids’</p>
      </Link>
      </div>
    </div>
  )
}

export default Categories