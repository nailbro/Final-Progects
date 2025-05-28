import './NewArivals.scss';
import dot from '../../../assets/Image/dot.png';
import dot2 from '../../../assets/Image/dot (1).png';
import { useEffect, useState } from 'react';
import { FaStar, FaRegHeart, FaHeart, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


interface Product {
  id: number;
  name: string;
  price: string;
  imageClass: string;
  rating?: number;
  liked: boolean;
}

const NewArivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productsPerSlide = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/newArrivals');

        if (!response.ok) {
          throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        console.error('Не удалось получить данные для New Arrivals:', err);
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          setError("Не удалось подключиться к серверу. Убедитесь, что сервер запущен (npm run server).");
        } else {
          setError(err.message || 'Не удалось загрузить продукты "Новых поступлений".');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

const renderStars = (rating: number | undefined) => {
  if (typeof rating !== 'number' || rating < 0 || rating > 5) {
    return null;
  }

  const stars = [];
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 !== 0; 


  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color="#FFD700" size={18} />);
  }


  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" color="#FFD700" size={18} />);
  }

 
  const emptyStarsCount = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<FaStar key={`empty-${i}`} color="#d3d3d3" size={18} />);
  }

  return <div className="product-rating">{stars}</div>;
};

  const toggleLike = (id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const totalDots = Math.ceil(products.length / productsPerSlide);
  const startIndex = currentSlide * productsPerSlide;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerSlide);

  if (loading) {
    return (
      <section className='new_arivals '>
        <div className="new_arivals_container">
          <div>Loading new arrivals...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className='new_arivals'>
        <div className="new_arivals_container">
          <div>Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className='new_arivals' id="new-arrivals-section">
      <div className="new_arivals_container">
        <h1>New arrivals</h1>
        <div className="new_arivals_check">
          <p>Check out our latest arrivals for the upcoming season</p>
          <a href="">See the collection here</a>
        </div>
        <div className="div">
          {visibleProducts.map((product, index) => (
            <div key={product.id} className="product-item">
                    <Link to={'/clother/detail'}className='product-link'>
              <div className="product-image-wrapper">
                <div className={product.imageClass}>
                  <div className="rating">
    {renderStars(product.rating)}
                  </div>
                </div>
              
              </div>
              <p>{product.name}</p>  
            </Link>
              <h5>${product.price}</h5>
                       <div className="product-like-icon" onClick={() => toggleLike(product.id)}>
                  {product.liked ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                </div>
            </div>
            
          ))}
          {visibleProducts.length < productsPerSlide && Array.from({ length: productsPerSlide - visibleProducts.length }).map((_, i) => (
              <div key={`placeholder-${i}`} className="product-item placeholder-item"></div>
          ))}
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={index * productsPerSlide >= products.length}
            className={index === currentSlide ? 'active-dot' : ''}
          >
            <img src={index === currentSlide ? dot : dot2} alt={`Slide ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default NewArivals;