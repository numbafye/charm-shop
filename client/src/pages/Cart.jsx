import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function Cart() {
  const { cart, toggleCart } = useCart();

  return (
    <>
      <div className="cart-container ">
        <span onClick={toggleCart} className="close">
          &times;
        </span>
        <div className="cart-content">
          <h2>Cart Items</h2>
          {cart.map((item) => (
            <div key={item._id}>
              {item.image && <img src={item.image.url} alt={item.name} />}
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>x {item.quantity}</p>
            </div>
          ))}
        </div>
        <Link to="/Checkout">Checkout</Link>
      </div>
    </>
  );
}

export default Cart;
