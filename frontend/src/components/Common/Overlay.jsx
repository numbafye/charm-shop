//EMAIL GRABBER! STAY UPDATED ON OUR LATEST CHARMS!
import { useState, useEffect } from "react";

function Overlay() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Function to show the overlay
  function openOverlay() {
    setIsOverlayVisible(true);
  }

  // Function to hide the overlay
  function closeOverlay() {
    setIsOverlayVisible(false);
  }

  // Show the overlay after a delay (e.g., 3 seconds)
  useEffect(() => {
    const timeoutId = setTimeout(openOverlay, 8000); // Adjust the delay as needed
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isOverlayVisible && (
        <div id="subscribe-overlay" className="overlay">
          <div className="overlay-content">
            <span className="close" onClick={closeOverlay}>
              &times;
            </span>
            <br />
            <img
              className="sub-img"
              src="https://placekitten.com/200/300"
              alt="subscribe-img"
            />
            <h2>Subscribe to Our Newsletter</h2>
            <form id="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
