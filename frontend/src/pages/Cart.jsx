import { Link } from "react-router-dom";
import CartSummary from "../components/Cart/CartSummary";
import CartItem from "../components/Cart/CartItem";

function Cart() {
  return (
    <>
      <div className="cart-container ">
        <div className="cart-content">
          {<CartSummary />}
          {<CartItem />}
          <Link to="/Checkout">Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
