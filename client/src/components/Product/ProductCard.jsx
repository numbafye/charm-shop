import { useState, useEffect } from "react";
import sanityClient from "../../../charmecom/Client";
import AddBtn from "../Common/AddBtn";
import CartBtns from "../Common/CartBtn";

function ProductCard() {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
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

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 justify-items-center">
        {products &&
          products.map((product, index) => (
            <div key={index} className="grid-gap-4 rounded-md m-1 p-1">
              <div className="">
                {product.image && (
                  <img
                    className="p-2 max-w-full h-40 rounded-2xl cursor-pointer"
                    src={product.image.url}
                    alt={product.name}
                    onClick={() => openModal(product)}
                  />
                )}
              </div>
              <div className="text-center">
                <p className="text-sm">{product.name}</p>
                <p className="text-xs">{product.price}</p>
                <AddBtn/>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1>{selectedProduct.name}</h1>
            <img
              src={selectedProduct.image.url}
              alt={selectedProduct.name}
              className="modal-image"
            />
            <p>{selectedProduct.price}</p>
            <p>{selectedProduct.details}</p>
          <CartBtns/>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
