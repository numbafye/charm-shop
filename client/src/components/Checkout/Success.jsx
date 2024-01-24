import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

function Success() {
  const { setCartItems } = useCart();
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");
    if (sessionId) {
      fetchSessionDetails(sessionId);
      setCartItems([]); // Reset the cart items
      console.log("Cart reset in Success component");
      localStorage.removeItem("cartItems"); // Clear cart items from local storage
    }
  }, [setCartItems]);

  const fetchSessionDetails = async (sessionId) => {
    try {
      // In your React component
      const response = await axios.get(`/stripe/session/${sessionId}`);

      setSessionDetails(response.data);
    } catch (error) {
      console.error("Error fetching session details:", error);
    }
  };

  if (!sessionDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <img
        className="w-40 mx-auto"
        src="../assets/Green-Check-Mark-PNG-Image.png"
        alt="green-check"
      />
      {/* Display session details */}
      <div className="SuccessContainer p-5 text-center leading-7">
        <div className="order-details">
          <p>Thank you, {sessionDetails.customer_details.name}!</p>
          <p className="font-bold text-lg">Your Order is Confirmed</p>
          <p>Payment ID: {sessionDetails.payment_intent}</p>
          <p>We&apos;ll send you a shipping confirmation email shortly.</p>
        </div>
        <Link to={"/"}>
          <button className="mt-5 w-1/2 border">GO HOME</button>
        </Link>
      </div>
    </>
  );
}

export default Success;
