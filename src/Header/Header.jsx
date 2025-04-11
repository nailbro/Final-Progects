import './Header.scss'
import { FaUser, FaCaretDown, FaSearch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import flag from './flag-usa.svg'
import logo from './logo.png'
import { useSelector } from 'react-redux';
const Header = () => {
  const data = useSelector(state=>state.products.products)

  const [isLogged, setIsLogged] = useState(false)
  const [search,setSearch] = useState('')
  const [arrSearch,setArrSearch] = useState([])
  const [show,setShow] = useState(false)


  const handleSearch = (e)=>{
    if(e.target.value ===''){
        setShow(false)
    }else{
        setShow(true)
    }
    
    console.log(e.target.value)
   setArrSearch(data.filter((item)=>{
    return item.title.toUpperCase().includes(e.target.value.toUpperCase())
   }))
  
}

  return (
    <header className='header'>
           <div className="header__top">
            <div className="asa container">
            <div className="ava">
            <p>Available 24/7 at<span>(405) 555-0128</span></p> 
            </div>
           <div className="header__lis">
 <ul>
    <li>Delivery & returns</li>
    <li>Track order</li>
    <li>Blog</li>
    <li>Contacts</li>
 </ul>
<div className="header-bar">
<img src= {flag} alt="flag" />
      <div className="lang-select">
        <span>Eng / $</span>
        <FaCaretDown className="icon" />
      </div>
      <div className="login">
        <FaUser className="icon" />
        <span>Log in / Register</span>
      </div>
    </div>
 </div>
        </div>
        </div>
        <div className="createx">
          <div className="createx__btn container">
          <img src={logo} alt="createx" />
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Girls</li>
          <li>Boys</li>
          <li>Sale</li>
        </ul>
        <form action="">
                    <label className="header__menu__input__container">
                        <FontAwesomeIcon className='header__menu__input__container__search__icon' icon={FaSearch} />
                        <input onChange={(e)=>{handleSearch(e)}}  type="text" placeholder='Search for products...' />
                    </label>
                </form>
          </div>
        </div>
    </header>
  )
}

export default Header
