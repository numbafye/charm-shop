import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useRef } from "react";
import useOutsideClick from "../components/hook/useOutsideClick";

function Cart() {
  const cartRef = useRef();
  const {
    toggleCart,
    totalPrice,
    cartItems,
    isCartVisible,
    toggleCartItemQuantity,
    onRemove,
  } = useCart();

  useOutsideClick(cartRef, () => {
    if (isCartVisible) toggleCart();
  });

  return (
    <>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <div className="flex sticky bg-text top-0">
            <span className="absolute" onClick={toggleCart}>
              <box-icon name="chevron-left"></box-icon>{" "}
            </span>
            <h2 className="w-full text-center">CART</h2>
          </div>
          <div className="cart-content">
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <h3>Your shopping bag is empty</h3>
              </div>
            )}

            <div className="product-container">
              {cartItems.map((item) => (
                <div
                  className="product border p-3 rounded-md shadow-md pb-2"
                  key={item._id}
                >
                  <img className="mt-3" src={item.image.url} alt={item.name} />
                  <div className=" text-center mb-5">
                    <b className="flex justify-between">
                      <h3 className="text-left">{item.name}</h3>
                      <p className="text-right">${item.price}</p>
                    </b>
                  </div>
                  <div className="flex flex-row justify-between text-center mt-2">
                    <div className="qtyBtns flex justify-evenly border-2 w-full text-lg">
                      <button
                        className=" w-full"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        -
                      </button>
                      <span className=" w-full">{item.quantity}</span>
                      <button
                        className=" w-full"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        +
                      </button>
                    </div>
                    <div className=""></div>
                  </div>
                  <button
                    className="w-full remove-item text-xs mt-5 "
                    onClick={() => onRemove(item._id, "remove")}
                  >
                    <b className="border-b">REMOVE </b>
                  </button>
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
                  <button className="btn border-2 px-6 rounded-3xl text-text bg-btn">
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
