import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();
  const [isCartVisible, setIsCartVisible] = useState(false); // New state for show cart
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const toggleCart = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  // useEffect(() => {
  //    Load cart from local storage on component mount
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCart(storedCart);
  //   setCartCounter(storedCart.reduce((total, item) => total + item.quantity, 0));
  // }, []);

  // useEffect(() => {
  //    Save cart to local storage whenever it changes
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartVisible,
        toggleCart,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
