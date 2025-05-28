import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

import './Details.scss';

import productimage from '../../assets/Image/product-pic1.png'
import productimage2 from '../../assets/Image/product-pic2.png'
import productimage3 from '../../assets/Image/product-pic3.png'
import productimage4 from '../../assets/Image/product-pic4.png'
import productimage5 from '../../assets/Image/product-pic5.png'



const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const mainContent = [
    { type: 'image', src: productimage },
    { type: 'image', src: productimage2 },
    { type: 'image', src: productimage3 },
    { type: 'image', src: productimage4 },
    { 
      type: 'video', 
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
      preview: productimage5 
    },
  ];

  const handleMediaClick = (index: number) => {
    if(mainContent[index].type === 'video') {
      setShowVideo(true);
    } else {
      setLightboxIndex(index);
    }
  };

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if(lightboxIndex === null) return;
    
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % mainContent.length 
      : (lightboxIndex - 1 + mainContent.length) % mainContent.length;
    
    setLightboxIndex(newIndex);
  };

  return (
    <section className='detail'>
      <div className="detailtols container">
        <h1>Basic hooded sweatshirt in pink</h1>
<div className="simlebar">
    <ul>
        <li className='tab7'>General info</li>
        <li className='tab8'>Product details</li>
    <li className='tab9'>Reviews </li>
</ul>
</div>
<div className="divilerdetail"></div>
        <div className="product-gallery">
          <Swiper
            modules={[Thumbs, Navigation]}
            navigation={{
              nextEl: '.gallery-button-next',
              prevEl: '.gallery-button-prev',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {mainContent.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="media-container">
                  <img
                    src={item.type === 'video' ? item.preview : item.src}
                    alt={`Media ${index + 1}`}
                    onClick={() => handleMediaClick(index)}
                    className={item.type === 'video' ? 'video-preview' : ''}
                  />
                  {item.type === 'video' && (
                    <div className="play-icon">▶</div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <div className="gallery-button-prev"></div>
            <div className="gallery-button-next"></div>
          </Swiper>

          <div className="thumbnails">
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={5}
              watchSlidesProgress
            >
              {mainContent.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.type === 'video' ? item.preview : item.src}
                    alt={`Thumb ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Лайтбокс для изображений */}
        {lightboxIndex !== null && (
          <div className="lightbox">
            <div className="lightbox-content">
              <button className="close" onClick={() => setLightboxIndex(null)}>
                &times;
              </button>
              
              {mainContent[lightboxIndex].type === 'image' ? (
                <img 
                  src={mainContent[lightboxIndex].src} 
                  alt="Full size" 
                />
              ) : (
                <iframe
                  src={mainContent[lightboxIndex].src}
                  title="Video player"
                  allowFullScreen
                />
              )}

              <div className="lightbox-nav">
                <button 
                  className="nav-prev"
                  onClick={() => handleLightboxNavigate('prev')}
                >
                  ←
                </button>
                <button
                  className="nav-next"
                  onClick={() => handleLightboxNavigate('next')}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}


        {showVideo && (
          <div className="video-popup">
            <div className="video-content">
              <button className="close" onClick={() => setShowVideo(false)}>
                &times;
              </button>
              <iframe
                src={mainContent[4].src}
                title="Video player"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;