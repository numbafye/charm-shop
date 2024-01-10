import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated imports
import "./App.css";
// Importing pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import { CartProvider } from "./CartContext";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/success" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
