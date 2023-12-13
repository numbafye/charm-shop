import { useState, useEffect } from "react";
import MenuItems from "./MenuItems"; // Import your MenuItems component
import { Link as RouterLink } from "react-router-dom"; // Alias for react-router-dom Link
import CartIcon from "./CartIcon";

function Navbar() {
  //HAMBURGER OPEN FUNCTION
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  //NAVBAR TRANSITION
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
    <CartIcon/>
      </div>
    </>
  );
}

export default Navbar;
