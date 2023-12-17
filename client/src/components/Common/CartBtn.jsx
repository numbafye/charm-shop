import AddBtn from "./AddBtn";
import { useCart } from "../../CartContext";

function CartBtns() {
  const { incQty, decQty, qty } = useCart();

  return (
    <>
      <div className=" rounded-md w-">
        <button onClick={decQty} className="CartBtn w-1/3  font-bold">
          -
        </button>
        <span className="w-1/3">{qty}</span>
        <button onClick={incQty} className="CartBtn  w-1/3 font-bold">
          +
        </button>
        <AddBtn />
      </div>
    </>
  );
}

export default CartBtns;
