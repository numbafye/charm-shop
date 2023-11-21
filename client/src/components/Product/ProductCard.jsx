import ProductPage from "./ProductPage";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";

function ProductCard() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    sanityClient
      //GROQ QUERY
      // FIX IMAGE QUERY
      .fetch(
        `*[_type == "product"]{
          "image": image.asset-> {
            _id,
            url
          },
          name,
          price,
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }),
    [];

  console.log(products);

  return (
    <>
      <div className="justify-center items-center">
        {products &&
          products.map((products, index) => (
            <div
              key={index}
              className="border-black border-solid border-2 rounded-lg m-1 p-1"
            >
              <div className="flex justify-center">
                {products.image && (
                  <img
                    className="p-2 w-60 h-40"
                    src={products.image.url}
                    alt={products.name}
                  />
                )}
              </div>
              <div className="text-center">
                <p className="text-">{products.name}</p>
                <p className="text-xs">{products.price}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductCard;
