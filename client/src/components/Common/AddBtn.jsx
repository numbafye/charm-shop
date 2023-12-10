//ADD ITEM AND OPEN CART MENU
import { useCart } from '../../CartContext';

function AddBtn({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="Btn-container">
        <button
          id="ATC"
          className="CartBtn rounded-2xl border-2 border-solid"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default AddBtn;

