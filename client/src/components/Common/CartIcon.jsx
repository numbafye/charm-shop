import { useCart } from "../../CartContext";
import Cart from "../../pages/Cart";

function CartIcon() {
  const { toggleCart, isCartVisible, totalQuantities } = useCart();

  return (
    <div className="mr-3 mt-1 -z-50 md:mr-10">
      <box-icon
        onClick={toggleCart}
        type="solid"
        name="shopping-bag"
      >
        
      </box-icon>

      {totalQuantities > 0 && (
        <span className="cart-counter bg-accent">{totalQuantities}</span>
      )}

      {isCartVisible && <Cart />}
    </div>
  );
}

export default CartIcon;
