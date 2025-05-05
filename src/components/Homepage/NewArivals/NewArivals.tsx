import React, { useEffect, useState } from 'react';
import './NewArivals.scss';
import dot from '../../../assets/Image/dot.png';
import dot2 from '../../../assets/Image/dot (1).png';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string[];
  isNew: boolean;
  rate: number;
}

const NewArivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');

  useEffect(() => {
    const fetchProductsData = async () => {
      setStatus('loading');
      try {
        // Загрузка данных из db.json, находящегося в корне проекта
        const response = await fetch('./db.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Убедимся, что данные находятся в массиве 'products'
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error(
            'Error: структура данных не соответствует ожидаемой. Ожидается массив \'products\'.',
            data
          );
          setStatus('failed');
          return; // Важно выйти из функции, чтобы не вызвать ошибку при рендеринге
        }

        setStatus('succeeded');
      } catch (error: any) {
        console.error('Ошибка при загрузке данных:', error);
        setStatus('failed');
      }
    };

    fetchProductsData();
  }, []);

  const renderContent = () => {
    if (status === 'loading') {
      return <p>Loading...</p>;
    }
    if (status === 'failed') {
      return <p>Error loading products!</p>;
    }
    if (!products.length) {
      // Добавлена проверка на случай, если массив products пуст
      return <p>No products available.</p>;
    }
    return (
      <div className="new_arrivals_items">
        {products
          .filter((item) => item.isNew)
          .map((item) => (
            <div className="new_arrivals_item" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img className="new_arrivalsitem_img" src={item.image[0]} alt={item.title} />
              </Link>
              <div className="new_arrivalsitem_info">
                <h3 className="new_arrivalsitem_title">{item.title}</h3>
                <div className="new_arrivalsitem_rate">
                  <span
                    className="rate__star"
                    style={{ width: `${(item.rate / 5) * 100}%` }}
                  ></span>
                  <span className="rate__text">{item.rate}/5</span>
                </div>
                <p className="new_arrivalsitem_price">${item.price}</p>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <section className="new_arivals">
      <div className="new_arivals_container">
        <h1>New arrivals</h1>
        <div className="new_arivals_check">
          <p>Check out our latest arrivals for the upcoming season</p>
          <Link to="/collection">See the collection here</Link>
        </div>
        {renderContent()}
      </div>
      <div className="dots">
        <button><img src={dot} alt="" /></button>
        <button><img src={dot2} alt="" /></button>
        <button><img src={dot2} alt="" /></button>
        <button><img src={dot2} alt="" /></button>
        <button><img src={dot2} alt="" /></button>
        <button><img src={dot2} alt="" /></button>
      </div>
    </section>
  );
};

export default NewArivals;
