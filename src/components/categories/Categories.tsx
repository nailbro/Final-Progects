import womens from '../../assets/Image/image.png'
import mens from '../../assets/Image/image (1).png'
import kids from '../../assets/Image/image (3).png'
import './Categories.scss'
const Categories = () => {
  return (
    <div className="categories">
        <div className="categorie">
        <img src={womens} alt="women" />
        <p>Women’s</p>
        </div>
        <div className="cater">
      <img src={mens} alt="men" />
      <p>Men’s</p>
      </div>
      <div className="cater2">
      <img src={kids} alt="kids" />
      <p>Kids’</p>
      </div>
    </div>
  )
}

export default Categories