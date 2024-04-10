import ProductCard from "./ProductCard";
import sanityClient from "../../../charmecom/Client";
import { useEffect, useState } from "react";

function ProductPreview() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"] | order(createdAt desc) [0...5] {
          _id,
          "image": image.asset-> {
            _id,
            url
          },
          name,
          price,
          details,
          createdAt
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="text-center mt-4 text-btn font-bold text-4xl">
        NEW ARRIVALS
      </div>
      <div className="m-7">
        <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPreview;
