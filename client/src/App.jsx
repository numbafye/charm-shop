import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Importing pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { CartProvider } from "./CartContext";
import ProductDetail from "./components/Product/ProductDetail";
import Success from "./components/Checkout/Success";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
