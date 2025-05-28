import React, { useEffect, useRef, useState } from 'react';
import './SaleUp.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu';
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface SaleProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
    liked: boolean;
  rating: number;
}

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

const SaleUp = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<SaleProduct[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const toggleLike = (id: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sale-products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (swiperInstance && products.length > 0) {
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.update();
    }
  }, [products, swiperInstance]);

  return (
    <div className="saleup" id='saleup-scroll'>
      <div className="saleup_top">
        <div className="saleunp">
          <h1>Sale up to 70%</h1>
          <div className="swiper-navigation-control">
            <div className="custom-prev" ref={prevRef}><i><LuMoveLeft /></i></div>
            <div className="custom-next" ref={nextRef}><i><LuMoveRight /></i></div>
          </div>
        </div>

        <Swiper
          key={products.length}
          modules={[Navigation]}
          spaceBetween={30}
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
              <div className="saleind">
                <div className="discount-badge">
                  -{product.discountPercentage}%
                </div>
                <img src={product.image} alt={product.title} />
                <div className="product-rating2">
                  {renderStars(product.rating)}
                </div>
                <p>{product.title}</p>
                <div className="price-container">
                  <span className='original-price'>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <h4 className='discounted-price'>
                    ${product.price.toFixed(2)}
                  </h4>
                </div>
                                       <div className="product-like-icon2" onClick={() => toggleLike(product.id)}>
                                  {product.liked ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="btn_sale">
          <button>See all sale products</button>
        </div>
      </div>
    </div>
  );
};

export default SaleUp;