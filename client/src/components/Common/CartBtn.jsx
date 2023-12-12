import { useState } from "react";
import AddBtn from "./AddBtn";

function CartBtns() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }

  
  return (
    <>
      <div className=" rounded-md w-">
        <button className="CartBtn w-1/3  font-bold" onClick={decrement}>
          -
        </button>
        <span className="w-1/3">{count}</span>
        <button className="CartBtn  w-1/3 font-bold" onClick={increment}>
          +
        </button>
      <AddBtn />
      </div>
    </>
  );
}

export default CartBtns;
