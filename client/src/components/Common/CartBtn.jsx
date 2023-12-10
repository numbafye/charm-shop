import PropTypes from "prop-types";
import { useCart } from "../../CartContext";

function CartBtns({ selectedProduct }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const itemInCart = cart.find((item) => item.id === selectedProduct?.id);
  const itemCount = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="rounded-md w-">
      <button
        className="CartBtn w-1/3 font-bold"
        onClick={() => removeFromCart(selectedProduct?.id)}
      >
        -
      </button>
      <span className="w-1/3">{itemCount}</span>
      <button
        className="CartBtn w-1/3 font-bold"
        onClick={() => addToCart(selectedProduct)}
      >
        +
      </button>
    </div>
  );
}

CartBtns.propTypes = {
  selectedProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default CartBtns;
