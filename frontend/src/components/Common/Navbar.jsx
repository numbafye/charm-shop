import { useState } from "react";
import MenuItems from './MenuItems'; // Import your MenuItems component
import Cart from '../../pages/Cart';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar-container flex z-50">
        <div className="hamburger-container">
          <div
            className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
            id="hamburger"
            onClick={handleHamburgerClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {menuOpen && <MenuItems closeMenu={() => setMenuOpen(false)} />}
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
        <div className=" mr-3">
          <box-icon
            className="cart"
            type="solid"
            name="shopping-bag"
            onClick={toggleCart}
          ></box-icon>
          <span id="cart-counter">100</span>
          {isCartVisible && <Cart />}
        </div>
      </div>
    </>
  );
}

export default Navbar;