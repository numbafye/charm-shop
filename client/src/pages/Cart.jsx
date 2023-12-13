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
          <Link to="/Checkout">Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
