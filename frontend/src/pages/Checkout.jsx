//COMPONENTS FIRE AFTER EACH OTHER? SUMMARY ON TOP OF: 1

import Comfirmation from "../components/Checkout/Confirmation";
import Payment from "../components/Checkout/Payment";
import ShippingInfo from "../components/Checkout/ShippingInfo";
import Summary from "../components/Checkout/Summary";

function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <Summary />
      <ShippingInfo />
      <Payment />
      <Comfirmation />
    </>
  );
}

export default Checkout;
