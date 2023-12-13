import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { cartCounter, toggleCart, isCartVisible } = useCart();

  return (
    <div className="mr-3">
      <box-icon
        onClick={toggleCart}
        className="cart"
        type="solid"
        name="shopping-bag"
      ></box-icon>
      <span id="cart-counter">{cartCounter}</span>
      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartIcon;
