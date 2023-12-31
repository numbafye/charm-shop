import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";
import { Link } from "react-router-dom";

function ProductCard() {
  const [product, setProduct] = useState(null);

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
      .then((data) => setProduct(data))
      .catch(console.error);
  }, []);

  return (
    <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {product &&
        product.map((product, index) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <div key={index} className="rounded-sm hover:ring-1 ring-accent">
              <div className="h-48 overflow-hidden">
                {product.image && (
                  <img
                    className="sm:object-contain md:object-scale-down w-full h-full cursor-pointer"
                    src={product.image.url}
                    alt={product.name}
                  />
                )}
              </div>
              <div className="text-center">
                <p className="text-lg">{product.name}</p>
                <p className="text-md">
                  <b>${product.price}</b>
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProductCard;
