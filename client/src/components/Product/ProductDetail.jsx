import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";
import Carousel from "../../components/Common/Carousel";
import AlwaysOpenExample from "./ProductAccordion";

function ProductDetail() {
  const { decQty, incQty, qty, onAdd, resetQty } = useCart();

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    resetQty();

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
    <>
      <div className="text-center">
        <img
          src={product.image.url}
          alt={product.name}
          className="p-0 h-96 w-full object-contain"
        />
        <b>
          <h1 className="text-3xl px-2">{product.name}</h1>
          <p className="text-lg">${product.price}</p>
        </b>
      </div>
      <div className="qtyBtns flex flex-row mx-auto text-center my-3 border-2 w-64">
        <button className="w-1/3" onClick={decQty}>
          -
        </button>
        <p className="w-1/3">{qty}</p>
        <button className="w-1/3" onClick={incQty}>
          +
        </button>
      </div>
      <div className="mx-auto text-center">
        <button
          onClick={() => onAdd(product, qty)}
          className=" text-text bg-btn p-1 w-64 border-2 m-2"
        >
          ADD TO CART
        </button>
      </div>
      <div className="description mt-2">
        <AlwaysOpenExample product={product} />
      </div>
      <Carousel />
    </>
  );
}

export default ProductDetail;
