import Payment from "../components/Checkout/Payment";
import { useCart } from "../CartContext"

function Checkout() {
const { totalPrice } = useCart();

  return (
    <>
      <h1>Checkout</h1>
      <p>{totalPrice}</p>
      <Payment />
    </>
  );
}

export default Checkout;
