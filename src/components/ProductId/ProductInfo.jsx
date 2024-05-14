/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <article className='product__page'>
      <h3 className='product__brand'>{product?.brand}</h3>
      <h3 className='product__title'>{product?.title}</h3>
      <p className='product__description'>{product?.description}</p>
      <footer className='product__footer-info'>
        <ul>
          <li>
            <span>Price</span>
            <span>{product?.price}</span>
          </li>
          <li>
            <span>Quantity</span>
            <div>
              <div onClick={handleQuantity}>-</div>
              <div>{quantity}</div>
              <div onClick={() => setQuantity(quantity + 1)}>+</div>
            </div>
          </li>
        </ul>
        <button>
          Add to cart <i className='bx bx-cart-alt bx-flashing'></i>
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
