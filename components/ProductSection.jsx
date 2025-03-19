import React from "react";

import carBrakesImage from './components/images/car-brakes.jpg';
import carTyreImage from './components/images/car-tyre.jpg';
import carEnginesImage from './components/images/car-engine.jpg';

function ProductSection() {
    return (
      <section id="products" className="product-section">
        <h2>Our Best Selling Products</h2>
        <div className="product-list">
          <ProductCard 
            imgSrc={carEnginesImage} 
            name="Engine Parts"
          />
          <ProductCard 
            imgSrc={carBrakesImage}
            name="Brakes"
          />
         <ProductCard 
            imgSrc={carTyreImage}
            name="Tires"
          />
        
        </div>
      </section>
    );
  }
  
  function ProductCard({ imgSrc, name }) {
    return (
      <div className="product-card">
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  }


  export default ProductSection;