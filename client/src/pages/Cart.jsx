import { useCart } from "../CartContext";
import { useRef, useState, useEffect } from "react";
import useOutsideClick from "../components/hook/useOutsideClick";
import axios from "axios";

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

  //Payment message integration
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleCheckout = async () => {
    try {
      // Create a list of items for checkout
      const items = cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }));

      // Call your backend to create the Checkout Session
      const response = await axios.post("/stripe/create-checkout-session", {
        items,
      });

      // Redirect the user to Stripe Checkout
      const checkoutSessionUrl = response.data.url;
      window.location = checkoutSessionUrl;
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setMessage(error.response.data.error.message);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <>
      {message ? (
        <section>
          <p>{message}</p>
        </section>
      ) : (
        <div ref={cartRef}>
          <div className="cart-container">
            <div className="flex sticky bg-text top-0">
              <span className="absolute" onClick={toggleCart}>
                <box-icon name="chevron-left"></box-icon>{" "}
              </span>
              <h2 className="w-full text-center">CART</h2>
            </div>
            <div className="cart-content">
              {cartItems.length < 1 && (
                <div className="empty-cart mt-10 text-center">
                  <h3>Your shopping bag is empty</h3>
                </div>
              )}

              <div className="px-2 md:mx-16 my-4">
                {cartItems.map((item) => (
                  <div
                    className="product px-3 rounded-md shadow-md pb-2 md:w-full md:mx-auto mt-3"
                    key={item._id}
                  >
                    <img
                      className="mt-3 mx-auto sm:object-contain md:object-scale-down  md:px-3 md:h-40"
                      src={item.image.url}
                      alt={item.name}
                    />
                    <div className=" text-center md:my-3">
                      <b>
                        <h1 className="text-lg text-center w-full md:text-2xl">
                          {item.name}
                        </h1>
                      </b>
                      <p className="text-lg md:text-2xl">${item.price}</p>
                    </div>
                    <div className="flex flex-row justify-between text-center mt-2">
                      <div className="flex justify-evenly border-2 w-40 mx-auto text-lg md:text-xl">
                        <button
                          className=" w-full"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          -
                        </button>
                        <span className=" w-full">{item.quantity}</span>
                        <button
                          className=" w-full"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="w-full text-xs sm:mt-3 md:mt-4"
                      onClick={() => onRemove(item._id, "remove")}
                    >
                      <b className="border-b md:text-base">REMOVE </b>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {cartItems.length >= 1 && (
              <div className="checkout font-semibold">
                <div className=" flex h-20 pt-2 mt-2 border-t-2 justify-between md:text-xl">
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className="sticky bottom-10 text-center">
                  <button
                    onClick={handleCheckout}
                    className="px-7 py-2 border-2 rounded-3xl text-text bg-btn"
                  >
                    Pay With Stripe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
