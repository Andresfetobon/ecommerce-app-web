/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from 'react';
import '../../styles/SliderImages.css'

const SliderImgs = ({ product }) => {
  const [currenIndex, setCurrenIndex] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrenIndex(prevIndex =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrenIndex(prevIndex =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currenIndex * 100}%)`;
  }, [currenIndex]);

  
  return (
    <div className="slider-container">
      <div className="slider-wrapper" ref={slideRef}>
        {product?.images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.url} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev-button">Prev</button>
      <button onClick={nextSlide} className="next-button">Next</button>
    </div>
  );
};

export default SliderImgs;
