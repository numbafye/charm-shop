import Cart from "../../pages/Cart";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <>
      <div className="navbar-container">
        <div className="hamburger-container">
          <div className="hamburger-icon" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div>
        <box-icon className="cart" type="solid" name="shopping-bag" onClick={toggleCart}></box-icon>
        <span id="cart-counter">100</span>
          {isCartVisible && <Cart />}{" "}
          {/* Render the Cart component if isCartVisible is true */}
        </div>

        <div className="navbar">
          <ul className="menu-items" id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hamburger">
        <Hamburger />
      </div>
    </>
  );
}

export default Navbar;
