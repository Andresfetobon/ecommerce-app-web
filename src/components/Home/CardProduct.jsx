import '../../styles/CardProduct.css';

const CardProduct = ({ prod }) => {
  return (
    <article className='product'>
      <header className='product__header'>
        <div className='product__img-container'>
          <img className='product__img' src={prod.images[0].url} alt='images' />
        </div>
        <div className='product__img-container'>
          <img className='product__img' src={prod.images[1].url} alt='images1' />
        </div>
      </header>

      <section className='product__body'>
        <header className='product__titles'>
          <h3 className='product__brand'>{prod.brand}</h3>
          <h2 className='product__name'>{prod.title}</h2>
        </header>
        <article className='product__price'>
          <span className='product__price-label'>Price</span>
          <h2 className='product__price-value'>{prod.price}</h2>
        </article>
        <button className='product__btn'>
          <i className='bx bx-cart-alt bx-flashing'></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
