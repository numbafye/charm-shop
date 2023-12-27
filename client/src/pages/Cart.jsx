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
          <div className="flex sticky bg-text top-0">
            <span className="absolute" onClick={toggleCart}>
              <box-icon name="chevron-left"></box-icon>{" "}
            </span>
            <h2 className="w-full text-center ">CART</h2>
          </div>
          <div className="cart-content">
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <h3>Your shopping bag is empty</h3>
              </div>
            )}
            <div className="product-container">
              {cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <img className="mt-3" src={item.image.url} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex flex-nowrap justify-between">
                    <div className="qtyBtns flex justify-evenly border-2 w-32">
                      <button onClick="">-</button>
                      <span>{item.quantity}</span>
                      <button onClick="">+</button>
                    </div>
                    <div className="flex">
                      <button className="remove-item" onClick="">
                        <box-icon type="solid" name="x-circle"></box-icon>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {cartItems.length >= 1 && (
            <div className="checkout">
              <div> </div>
              <div className="flex h-20 pt-2 mt-2 border-t-2 justify-between">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container sticky bottom-10 text-center">
                <Link to={"/Checkout"}>
                  <button className="btn border-2 px-6 rounded-3xl text-text bg-btn" onClick="">
                    Pay With Stripe
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
