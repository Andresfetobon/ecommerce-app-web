import { useSelector } from "react-redux";

const CartPage = () => {

  const cart = useSelector(states => states.cart);

  console.log(cart)
  return (
    <div>
      <h1>Car Page</h1>
      <div>
        {
            cart?.map(cart => (
                <div key={cart.id}>
                    <ul>
                        <li>{cart.id}</li>
                    </ul>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default CartPage;
