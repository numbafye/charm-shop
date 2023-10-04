import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuItems({ closeMenu }) {
  return (
    <ul className="hamburger-items show-menu bg-secondary" id="menu">
      <li onClick={closeMenu}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/products">Shop</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/">About</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/">Contact</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/">FAQs</Link>
      </li>
    </ul>
  );
}

MenuItems.propTypes = {
    closeMenu: PropTypes.func.isRequired,
  };

export default MenuItems;
