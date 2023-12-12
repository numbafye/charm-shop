import { Link } from "react-router-dom";


function Cart() {
  const { cart, clearCart } = useCart();

  return (
    <>
      <div className="cart-container">
        <div className="cart-content">

      <Link to="/Checkout">Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
