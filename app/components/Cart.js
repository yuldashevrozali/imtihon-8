// components/Cart.js
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
