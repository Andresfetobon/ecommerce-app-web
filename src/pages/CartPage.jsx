import { useSelector } from 'react-redux';
import CartItemDetails from '../components/cart/CartItemDetails';

const CartPage = () => {
  const cart = useSelector(states => states.cart);

  return (
    <div>
      <h1>Car Page</h1>
      <div>
        {cart?.map(cart => (
          <CartItemDetails key={cart.id} prod={cart} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
