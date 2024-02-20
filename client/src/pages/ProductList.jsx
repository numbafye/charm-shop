import { useState, useEffect } from "react";
import sanityClient from "../../charmecom/Client"; // Adjust the import path as necessary
import Navbar from "../components/Common/Navbar";
import ProductCard from "../components/Product/ProductCard";
import Footer from "../components/Footer/Footer";
import FilterBtn from "../components/Common/FilterBtn";

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

  //FUNCTION FOR FILTER BTN TO OPEN FILTER COMPONENT (SLIDE OUT LIKE CART MENU)

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 fw-bold">BROWSE CATALOG</h1>
      <div className="w-full text-center">
        <button className="w-1/2 mt-4 border">Filter & Sort</button>
      </div>
      <FilterBtn />
      <div className="m-10 ">
        <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
