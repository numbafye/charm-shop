import Navbar from "../components/Common/Navbar";
import ProductCard from "../components/Product/ProductCard";

function ProductList() {
  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <section className="product-container">

      <ProductCard/>
      </section>
    </div>
  );
}

export default ProductList;
