import Hamburger from "./Hamburger";


function Navbar() {
  return (
    <>
        <div className="navbar-container">
    <div className="hamburger-container">
      <div className="hamburger-icon" id="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="cart-container">
        <box-icon className="cart" type="solid" name="shopping-bag"></box-icon>
        <span id="cart-counter">100</span>
      </div>
    </div>

    <navbar className="navbar">
      <ul className="menu-items" id="menu">
        <li><a href="#">HOME</a></li>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">FAQS</a></li>
        <li><a href="#">GALLERY</a></li>
      </ul>
    </navbar>
  </div>

      <div className="hamburger">
        <Hamburger />
      </div>
    </>
  );
}

export default Navbar;
