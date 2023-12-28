import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { toggleCart, isCartVisible, totalQuantities } = useCart();

  return (
    <div className="mr-3 mt-1">
      <box-icon
        onClick={toggleCart}
        type="solid"
        name="shopping-bag"
      ></box-icon>
      <span className="cart-counter" >{totalQuantities}</span>
      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartIcon;
