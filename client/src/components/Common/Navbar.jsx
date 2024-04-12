import { useState, useRef, useEffect } from "react";
import MenuItems from "./MenuItems";
import { Link as RouterLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import useOutsideClick from "../hook/useOutsideClick";
import sanityClient from "../../../charmecom/Client";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const [banner, setBanner] = useState([]);

  // Close the menu when clicking outside
  useOutsideClick(menuRef, () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  });

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => {
      return !prevMenuOpen;
    });
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "banner"] {
          "image": image.asset-> {
            _id,
            url
          },
        }[0]`
      )
      .then((data) => setBanner(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Updating the body style based on the menuOpen state
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div
        className={`navbar-container px-1.5 flex z-30 sticky top-0 h-20 pt-2 w-full md:px-7`}
      >
        {banner.image && (
          <img className="navbar-banner" src={banner.image.url} alt="Banner" />
        )}
        <div className="hamburger-container">
          <button
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div className="navbar" ref={menuRef}>
          <ul
            className={`menu-items pl-5 pt-1 text-center ${
              menuOpen ? "active" : ""
            }`}
            id="menu"
          >
            <RouterLink to="/" onClick={() => setMenuOpen(false)}>
              <li className=" h-7 w-20">Home</li>
            </RouterLink>
            <RouterLink to="/products" onClick={() => setMenuOpen(false)}>
              <li className=" h-7 w-20">Shop</li>
            </RouterLink>
            <RouterLink to="/contact" onClick={() => setMenuOpen(false)}>
              <li className=" h-7 w-20">Contact</li>
            </RouterLink>
          </ul>
        </div>
        <CartIcon />
      </div>
      <div className={`show-menu ${menuOpen ? "active" : ""}`}>
        <MenuItems closeMenu={() => setMenuOpen(false)} />{" "}
      </div>
    </>
  );
}

export default Navbar;
