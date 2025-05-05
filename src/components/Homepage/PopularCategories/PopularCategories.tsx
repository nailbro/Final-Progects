import './PopularCategories.scss'
import categ from '../../../assets/Image/categ.png'
import fotbolka from '../../../assets/Image/categ2.png'
import kep from '../../../assets/Image/categ3.png'
import botts from '../../../assets/Image/gateg4.png'
import ruba from '../../../assets/Image/categ5.png'
import gatec from '../../../assets/Image/categ6.png'
const PopularCategories = () => {
  return (
    <div className='popula_categories'>
      <h1>Popular categories</h1>
      <div className="categoria">
    <div className="categoria__img">
        <img src={categ} alt="categ" />
        <p>Tops</p>
        </div>
        <div className="categoria__img">
        <img src={fotbolka} alt="fotbolka" />
        <p>T-shirts</p>
        </div>
        <div className="categoria__img">
        <img src={kep} alt="kep" />
        <p>Caps</p>
        </div>
        <div className="categoria__img">
        <img src={botts} alt="botts" />
        <p>Sandals</p>
      </div>
      <div className="categoria__img">
            <img src={ruba} alt="ruba" />
        <p>Jackets</p>
        </div>
        <div className="categoria__img">
            <img src={gatec} alt="gatec" />
        <p>Coats</p>
    </div>
      </div>
    </div>
  )
}

export default PopularCategories