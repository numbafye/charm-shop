import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext";
import Carousel from "../../components/Common/Carousel";
import Footer from "../Footer/Footer";
import Navbar from "../../components/Common/Navbar";

function ProductDetail() {
  const { decQty, incQty, qty, onAdd } = useCart();

  const { id } = useParams();

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
    <>
      <Navbar />
      <div className="border-2">
        <img
          src={product.image.url}
          alt={product.name}
          className="p-0 h-96 w-full object-contain"
        />
        <b>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
        </b>
      </div>
      <div className="qtyBtns flex justify-evenly border-2 w-32">
        <button onClick={decQty}>-</button>
        <span>{qty}</span>
        <button onClick={incQty}>+</button>
      </div>
      <button
        onClick={() => onAdd(product, qty)}
        className=" text-text bg-btn p-1 w-52 border-2"
      >
        ADD TO CART
      </button>
      <div className="description">
        <p>{product.details}</p>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}

export default ProductDetail;
