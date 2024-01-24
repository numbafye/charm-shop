import { useState, useEffect } from "react";
import sanityClient from "../../charmecom/Client"; // Adjust the import path as necessary
import Navbar from "../components/Common/Navbar";
import ProductCard from "../components/Product/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          _id,
          "image": image.asset-> {
            _id,
            url
          },
          name,
          price,
          details
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">BROWSE CATALOG</h1>
      <div className="m-10 ">
        <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
          ))}
          </div>
      </div>
    </div>
  );
}

export default ProductList;
