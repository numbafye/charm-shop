import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/LandingPageLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <ProductList />
              </Layout>
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/products/:id"
            element={
              <Layout>
                <ProductDetail />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
