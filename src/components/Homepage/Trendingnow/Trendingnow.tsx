import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";
import 'swiper/css';
import 'swiper/css/navigation';
import '../Trendingnow/Trendingnow.scss';
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';


interface Product {
  id: number;
  image: string; 
  alt: string;
  name: string;
  description: string;
  price: string;
      liked: boolean;
  rating: number;
}

const Trendingnow = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [swiperReady, setSwiperReady] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
      const toggleLike = (id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
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

  return <div className="product-rating2">{stars}</div>;
};
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {

        const response = await fetch('http://localhost:5000/api/trendingProducts');

        if (!response.ok) {
          throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Не удалось получить продукты:", err);
       
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          setError("Не удалось подключиться к серверу. Убедитесь, что сервер запущен (npm run server).");
        } else {
          setError(err.message || "Не удалось загрузить продукты. Пожалуйста, попробуйте позже.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 
  useEffect(() => {
    if (prevRef.current && nextRef.current && products.length > 0) {
      setSwiperReady(true);
    }
  }, [products]); 

  if (loading) {
    return (
      <section className="trendingnow">
        <div className="trenda container">
          <div className="loading-message">Загрузка популярных товаров...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="trendingnow">
        <div className="trenda container">
          <div className="error-message">Ошибка: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="trendingnow" id='trending-now-section'>
      <div className="trenda container">
        <div className="trend">
          <div className="trend-header">
            <h1>Trending now</h1>
            <div className="swiper-navigation-controls">
              <div className="custom-prev" ref={prevRef}><i><LuMoveLeft/></i></div>
              <div className="custom-next" ref={nextRef}><i><LuMoveRight/></i></div>
            </div>
          </div>

          <div className="swiper-container">
            {swiperReady && products.length > 0 ? (
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                allowTouchMove={true}
                breakpoints={{
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                onInit={(swiper: SwiperCore) => {
                  if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                    if (swiper.params.navigation.prevEl && swiper.params.navigation.nextEl) {
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="product">
                      <img src={product.image} alt={product.alt} className="product-image" />
                                      <div className="product-rating2">
                  {renderStars(product.rating)}
                </div>
                      <p>{product.name}</p>
                      <h4>${product.price}</h4>
                                                             <div className="product-like-icon3" onClick={() => toggleLike(product.id)}>
                                                        {product.liked ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                                                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              !loading && <div className="no-products-message">Нет популярных товаров для отображения.</div>
            )}
          </div>
        </div>
        <button className="btn_exp">Explore top sales</button>
      </div>
    </section>
  );
};

export default Trendingnow;