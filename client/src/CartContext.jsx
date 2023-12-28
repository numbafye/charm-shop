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
  //CART QUANTITY BTNS
  const toggleCartItemQuantity = (id, value) => {
    const index = cartItems.findIndex((item) => item._id === id);
    const newCartItems = [...cartItems]; // Cloning the cart items array

    if (index >= 0) {
      const foundProduct = newCartItems[index];

      if (value === "inc") {
        newCartItems[index] = {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        };
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === "dec") {
        if (foundProduct.quantity > 1) {
          newCartItems[index] = {
            ...foundProduct,
            quantity: foundProduct.quantity - 1,
          };
          setTotalPrice(
            (prevTotalPrice) => prevTotalPrice - foundProduct.price
          );
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        } else {
          //  remove  item from the cart if the quantity is 0
          newCartItems.splice(index, 1);
        }
      }

      setCartItems(newCartItems); // Update the state with the new cart items array
    }
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
        onAdd,
        toggleCartItemQuantity,
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
