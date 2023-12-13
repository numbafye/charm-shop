//ADD AND SUBTRACT ITEM FROM CART
import { useCart } from "../../CartContext";

function AddBtn({ product }) {
  const { addToCart} = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  }
  
  return (
    <>
      <div className="Btn-container">
        <button onClick={handleAddToCart} id="ATC" className="CartBtn rounded-2xl border-2 border-solid">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default AddBtn;
