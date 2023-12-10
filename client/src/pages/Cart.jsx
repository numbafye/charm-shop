import { useCart } from "../CartContext";

function Cart() {
  const { cart, clearCart } = useCart();

  return (
    <>
      <div className="cart-container">
        <div className="cart-content">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price} x {item.quantity}</p>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
