import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { cartCounter, toggleCart, isCartVisible } = useCart();

  const handleCartIconClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the body
    toggleCart();
    console.log("I WORK??")
  };

  return (
    <div className="mr-3">
      <box-icon onClick={handleCartIconClick} className="cart" type="solid" name="shopping-bag"></box-icon>
      <span id="cart-counter">{cartCounter}</span>
      {isCartVisible && <Cart/>}
    </div>
  );
}

export default CartIcon;