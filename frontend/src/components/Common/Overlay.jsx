//EMAIL GRABBER! STAY UPDATED ON OUR LATEST CHARMS!
function Overlay() {
  return (
    <>
      <div id="subscribe-overlay" className="overlay">
        <div className="overlay-content">
          <span className="close" id="close-overlay">
            &times;
          </span>{" "}
          <br />
          <img
            className="sub-img"
            src="..\assets\newsletter cover.webp"
            alt="subscribe-img"
          />
          <h2>Subscribe to Our Newsletter</h2>
          <form id="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Overlay;
