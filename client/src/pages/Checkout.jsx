import Payment from "../components/Checkout/Payment";
import { useCart } from "../CartContext"
import { useNavigate } from "react-router-dom";


function Checkout() {
const { totalPrice } = useCart();

const navigate = useNavigate();

const goBack = () => {
  navigate(-1);
}
  return (
    <>
    
    <p onClick={goBack}>GO BACK</p>
    
      <h1>Checkout</h1>
      <p>{totalPrice}</p>
      <Payment />
    </>
  );
}

export default Checkout;
