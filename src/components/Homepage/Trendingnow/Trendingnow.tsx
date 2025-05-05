import './Trendingnow.scss';

const Trendingnow = () =>{

return (
<section className="trendingnow">
<div className="trenda container">
<div className="trend">
<h1>Trending now</h1>
<div className="swiper-container"></div>
</div>
<div className="proda">
<div className="product">
<div className="product_set"></div>
<p>Shirt with insertion lace trims</p>
<h4>$49.95</h4>
</div>
<div className="product">
<div className="product_set2"></div>
<p>Chrono watch with blue leather belt</p>
<h4>$120.60</h4>
</div>
<div className="product">
<div className="product_set3"></div>
<p>Check coat with colour contrast</p>
<h4>$183.45</h4>
</div>
</div>
<button className="btn_exp">Explore top sales</button>
</div>
</section>
);
};

export default Trendingnow;