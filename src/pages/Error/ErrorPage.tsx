import cat from '../../assets/Image/cat-okak.jpg'
import './ErrorPage.scss'
const ErrorPage = () => {
  return (
    <div className='app'>
                <div className="cat-img">
<img src={cat} alt="cat" />
<h1 className='okak'>ОКАК</h1>
        </div>
        <div className="error">
            404
            </div>
    </div>
  )
}

export default ErrorPage
