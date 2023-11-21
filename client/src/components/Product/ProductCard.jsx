import ProductPage from "./ProductPage";
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
      <h1>ProductCard</h1>
      <div className="">
        {products &&
          products.map((products, index) => (
            <div key={index} className="border-black border-solid border-2">
              <div className="">
                {products.image && (
                  <img
                    className="h-40 p-2 w-60"
                    src={products.image.url}
                    alt={products.name}
                  />
                )}
              </div>
              <div className="text-center">
                <div className="">{products.name}</div>
                <div>{products.price}</div>
              </div>
            </div>
          ))}
      </div>
      <ProductPage />
    </>
  );
}

export default ProductCard;
