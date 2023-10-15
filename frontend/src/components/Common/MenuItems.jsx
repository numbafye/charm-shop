import { Link as RouterLink } from "react-router-dom"; // Alias for react-router-dom Link
import PropTypes from "prop-types";

function MenuItems({ closeMenu }) {
  return (
    <ul className="hamburger-items show-menu" id="menu">
      <li>
        <RouterLink onClick={closeMenu} to="/">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink onClick={closeMenu} to="/products">
          Shop
        </RouterLink>
      </li>
      <li>
        <RouterLink onClick={closeMenu} to="/?scrollTo=about">
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink onClick={closeMenu} to="/?scrollTo=contact">
          Contact
        </RouterLink>
      </li>
    </ul>
  );
}

MenuItems.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MenuItems;
