import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Success() {
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get("session_id");
    if (sessionId) {
      fetchSessionDetails(sessionId);
    }
  }, []);

  const fetchSessionDetails = async (sessionId) => {
    try {
      // In your React component
      const response = await axios.get(
        `http://localhost:4242/stripe/session/${sessionId}`
      );

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
      <Link to={"/"}>
        <div className="flex sticky bg-text top-0">
          <span className="">
            <box-icon name="chevron-left"></box-icon>{" "}
          </span>
          <h2 className="w-full">GO HOME</h2>
        </div>
      </Link>
      <h2>Payment Success</h2>
      {/* Display session details */}
      <p>Payment ID: {sessionDetails.payment_intent}</p>
      {/* Add more details as needed */}
    </>
  );
}

export default Success;
