import { Link } from "react-router-dom";
import Navbar from "../components/Common/Navbar";

function Products() {
  return (
    <div>
      <Navbar/>
      <h1>Products</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Products;
