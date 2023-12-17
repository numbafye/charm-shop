import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { toggleCart, isCartVisible } = useCart();

  return (
    <div className="mr-3">
      <box-icon
        onClick={toggleCart}
        className="cart"
        type="solid"
        name="shopping-bag"
      ></box-icon>
      <span id="cart-counter">0</span>
      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartIcon;
