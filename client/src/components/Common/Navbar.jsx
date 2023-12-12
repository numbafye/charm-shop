import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import Cart from "../../pages/Cart";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../../CartContext"; // Import the useCart hook

function Navbar() {
  const { cart } = useCart(); // Get cart information from the context

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // State to hold cart count

  useEffect(() => {
    // Calculate the total quantity in the cart
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
  }, [cart]); // Update the count whenever the cart changes

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarOpaque(true);
      } else {
        setIsNavbarOpaque(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar-container ${
          isNavbarOpaque ? "opaque" : ""
        } flex z-50 sticky top-0 h-12 pt-2 w-full`}
      >
        <div className="hamburger-container">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
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
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/products">Shop</RouterLink>
            </li>
            <li>
              <RouterLink to="/?scrollTo=about">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/?scrollTo=contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
        <div className="mr-3">
          <box-icon
            className="cart"
            type="solid"
            name="shopping-bag"
            onClick={toggleCart}
          ></box-icon>
          <span id="cart-counter">{cartCount}</span>
          {isCartVisible && <Cart />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
