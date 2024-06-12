/* eslint-disable react/prop-types */
import '../../styles/CartItemDetails.css'; 

const CartItemDetails = ({ prod }) => {
  console.log(prod);
  return (
    <article className="cart-item">
      <header className="cart-item-header">
        <img className="cart-item-image" src={prod.product.images[0].url} alt={prod.product.title} />
      </header>
      <section className="cart-item-details">
        <h3 className="cart-item-title">{prod.product.title}</h3>
        <p className="cart-item-quantity-price">
          <span className="cart-item-quantity">{prod.quantity}</span> x <span className="cart-item-price">{prod.product.price}</span>
        </p>
        <span className="cart-item-remove">
          <i className='bx bx-trash'></i>
        </span>
      </section>
      <footer className="cart-item-footer">
        <span className="cart-item-subtotal-label">Subtotal</span> <span className="cart-item-subtotal">{prod.quantity * prod.product.price}</span>
      </footer>
    </article>
  );
};

export default CartItemDetails;
