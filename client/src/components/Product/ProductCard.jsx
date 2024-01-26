import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    < >
      {product && (
        <Link to={`/products/${product._id}`} className="rounded-sm hover:ring-1 ring-accent" onClick={handleClick}>
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
        </Link>
      )}
    </>
  );
}

export default ProductCard;
