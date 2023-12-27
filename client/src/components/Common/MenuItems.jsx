import { Link as RouterLink } from "react-router-dom"; // Alias for react-router-dom Link

function MenuItems({ closeMenu }) {
  return (
    <ul className="hamburger-items show-menu" id="menu">
      <li className="sm:w-32 md:w-40 w-48">
        <RouterLink onClick={closeMenu} to="/">
          Home
        </RouterLink>
      </li>
      <li className="sm:w-32 md:w-40 w-48">
        <RouterLink onClick={closeMenu} to="/products">
          Shop
        </RouterLink>
      </li>
      <li className="sm:w-32 md:w-40 w-48">
        <RouterLink onClick={closeMenu} to="/?scrollTo=contact">
          Contact
        </RouterLink>
      </li>
    </ul>
  );
}

export default MenuItems;
