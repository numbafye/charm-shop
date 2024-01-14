import Navbar from "../components/Common/Navbar";
import ProductCard from "../components/Product/ProductCard";

function ProductList() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">SHOP ALL</h1>
      <div className="m-10">
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;
