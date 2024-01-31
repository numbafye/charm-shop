import { useNavigate } from 'react-router-dom';

function MenuItems() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ul className="show-menu sm:gap-10 gap-20 overflow-auto">
      <li className="h-40 w-full pt-14" onMouseDown={() => handleNavigation('/')}>Home</li>
      <li className="h-40 w-full pt-14" onMouseDown={() => handleNavigation('/products')}>Shop</li>
      <li className="h-40 w-full pt-14" onMouseDown={() => handleNavigation('/contact')}>Contact</li>
    </ul>
  );
}

export default MenuItems;

