import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h2>Payment Success</h2>
      {/* Display session details */}
      <p>Payment ID: {sessionDetails.payment_intent}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Success;
