import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useRef } from "react";

function Cart() {
  const cartRef = useRef();

  const { toggleCart, totalPrice, cartItems } = useCart();
  console.log(cartItems);

  return (
    <>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <span onClick={toggleCart} className="close">
            &times;
          </span>
          <div className="cart-content">
            <h2>Cart Items</h2>
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <h3>Your shopping bag is empty</h3>
              </div>
            )}
            <div className="product-container">
              {
                cartItems.map((item) => (
                  <div className="product" key={item._id}>
                    <img src={item.image.url} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                    </div>
                    <div className="qtyBtns flex justify-evenly border-2 w-32">
                      <button onClick="">-</button>
                      <span>{item.quantity}</span>
                      <button onClick="">+</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Link to="/Checkout">Checkout {totalPrice}</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
