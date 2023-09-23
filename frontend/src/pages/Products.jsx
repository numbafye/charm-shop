import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Products;
