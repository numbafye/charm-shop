import { Link as RouterLink } from "react-router-dom"; // Alias for react-router-dom Link

// eslint-disable-next-line react/prop-types
function MenuItems() {
  return (
    <ul className="hamburger-items show-menu sm:gap-10 gap-32" id="menu">
      <RouterLink to="/">
        <li className="h-40 w-full pt-14">Home</li>
      </RouterLink>
      <RouterLink to="/products">
        <li className="h-40 w-full pt-14">Shop</li>
      </RouterLink>
      <RouterLink to="/?scrollTo=contact">
        <li className="h-40 w-full pt-14">Contact</li>
      </RouterLink>
    </ul>
  );
}

export default MenuItems;
