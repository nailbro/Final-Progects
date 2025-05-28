import './Hero.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import line from '../../assets/Image/line.png'; 
import line2 from '../../assets/Image/line (1).png'; 


import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const totalSlides = 4; 

  const [currentSlide, setCurrentSlide] = useState(0);


  const heroRef = useRef<HTMLElement>(null);
  const hero2Ref = useRef<HTMLElement>(null);
  const hero3Ref = useRef<HTMLElement>(null); 
  const hero4Ref = useRef<HTMLElement>(null); 


  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const slides = [heroRef.current, hero2Ref.current, hero3Ref.current, hero4Ref.current];

    slides.forEach((slide, index) => {
      if (slide) {
        slide.style.display = index === currentSlide ? 'block' : 'none';
      }
    });

    return () => {
      slides.forEach(slide => {
        if (slide) {
          slide.style.display = ''; 
        }
      });
    };

  }, [currentSlide]); 

  const handlePageClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className='main'>
      <section className='hero' ref={heroRef}>
        <div className='Menswer container'>
          <h3 className='typewrip'>New collection</h3>
          <h1 className='typewriper'>Menswear_2020</h1>
          <div className='btn'>
            <div className='btnna'>
              <div className='btn__shop'>
                <Link to={'/megamenu'}>
                  <button>Shop sale</button>
                </Link>
              </div>
              <Link to={'/women/clother'}>
                <button className='shop_btn'>Shop the menswear</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='hero2' ref={hero2Ref}>
        
        <div className='menswer2 container'>
          <h3 className='typewrip'>New collection</h3>
          <h1>Fall-Winter 2021</h1>
          <div className='btn-2'>
            <div className='btn-22'>
              <button>Shop the collection</button>
            </div>
          </div>
        </div>
      </section>

      <section className='hero3' ref={hero3Ref}>
        <div className='menswer2 container'>
          <h3 className='typewrip'>LIMITED EDITION</h3>
          <h1>Leather Issue</h1> 
          <div className='btn-2'>
            <div className='btn-22'> 
              <button>Shop the collection</button>
            </div>
          </div>
        </div>
      </section>


      <section className='hero4' ref={hero4Ref}>   
        <div className='menswer2 container'>
          <h3 className='typewrip'>HOTTEST PRICES</h3>
          <h1>Kidswear Sales</h1> 
          <div className='btn-2'>
            <div className='btn-22'>
              <button>Shop sale now</button>
            </div>
          </div>
        </div>
      </section>

      <div className='slider_control'>
        <div className='btn_prev'>
          <button className='Left_btn' onClick={goToPrevSlide}>
            <FaArrowLeft />
          </button>
          <button className='Right_btn' onClick={goToNextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>

 
<div className='pages container'>
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}

            className={currentSlide === index ? 'pager' : 'pager2'}
          >
            <h3 onClick={() => handlePageClick(index)}>{String(index + 1).padStart(2, '0')}</h3> 
            <button onClick={() => handlePageClick(index)}> 
              <img src={currentSlide === index ? line : line2} alt={`Slide ${index + 1}`} />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;