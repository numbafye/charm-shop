import { Link } from "react-router-dom";
import CartSummary from "../components/Cart/CartSummary";
import CartItem from "../components/Cart/CartItem";

function Cart() {
  return (
    <>
      <CartSummary />
      <CartItem/>
      <h1>Cart</h1>
      <Link to="/Checkout">Checkout</Link>
    </>
  );
}

export default Cart;
