import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { toggleCart, isCartVisible } = useCart();

  return (
    <div className="mr-3 mt-2">
      <box-icon
        onClick={toggleCart}
        className="cart"
        type="solid"
        name="shopping-bag"
      ></box-icon>
      <span id="cart-counter"></span>
      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartIcon;
