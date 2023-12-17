//ADD AND SUBTRACT ITEM FROM CART
import { useCart } from "../../CartContext";

function AddBtn({ product }) {

  
  return (
    <>
      <div className="Btn-container">
        <button id="ATC" className="CartBtn rounded-2xl border-2 border-solid">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default AddBtn;
