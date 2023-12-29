import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    //FOR ADDING EXISTING PRODUCTS
    if (checkProductInCart) {
      //UPDATE QUANITITY OF EXISTING PRODUCT IN CART
      const updatedCartItems = cartItems.map((cartProduct) => {
        //if its the same product, update
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (id, value) => {
    const newCartItems = cartItems
      .map((item) => {
        if (item._id === id) {
          if (value === "remove") {
            return { ...item, quantity: 0 };
          }
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCartItems(newCartItems);

    const newTotalQuantities = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantities(newTotalQuantities);

    // Update total price
    const newTotalPrice = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  //CART QUANTITY BTNS
  const toggleCartItemQuantity = (id, value) => {
    const newCartItems = cartItems
      .map((item) => {
        if (item._id === id) {
          if (value === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (value === "dec") {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0

    setCartItems(newCartItems); // Update cart items

    const newTotalQuantities = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantities(newTotalQuantities);

    const newTotalPrice = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const resetQty = () => {
    setQty(1);
  };

  const toggleCart = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

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
        resetQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
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
