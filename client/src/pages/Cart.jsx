import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

function Cart() {
  const { toggleCart } = useCart();

  return (
    <>
      <div className="cart-container ">
        <span onClick={toggleCart} className="close">
          &times;
        </span>
        <div className="cart-content">
          <h2>Cart Items</h2>
   
        </div>
        <Link to="/Checkout">Checkout</Link>
      </div>
    </>
  );
}

export default Cart;
