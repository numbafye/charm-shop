import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  console.log("Product ID:", id);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && _id == $productId]{
           _id,
           "image": image.asset-> {
             _id,
             url
           },
           name,
           price,
           details
         }`,
        { productId: id } // Use the id from useParams
      )
      .then((data) => setProduct(data[0]))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{product.name}</p>
      <p>
        <b>${product.price}</b>
      </p>
    </div>
  );
}

export default ProductDetail;
