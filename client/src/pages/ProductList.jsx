import { useState, useEffect } from "react";
import sanityClient from "../../charmecom/Client";
import Navbar from "../components/Common/Navbar";
import ProductCard from "../components/Product/ProductCard";
import Footer from "../components/Footer/Footer";
import FilterBtn from "../components/Common/FilterBtn";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  const handleApplyFilters = (filterSelections) => {
    setFilters(filterSelections);
  };

  useEffect(() => {
    let baseQuery = `*[_type == "product"]`;
    const conditions = [];

    if (filters.selectedColor) {
      conditions.push(`"${filters.selectedColor}" in color[]`);
    }
    if (filters.selectedMetalFinish) {
      conditions.push(`"${filters.selectedMetalFinish}" in metalFinish[]`);
    }
    if (filters.selectedGem) {
      conditions.push(`"${filters.selectedGem}" in gemStones[]`);
    }
    if (filters.selectedSize) {
      conditions.push(`"${filters.selectedSize}" in size[]`);
    }
    if (filters.selectedTheme) {
      conditions.push(`"${filters.selectedTheme}" in theme[]`);
    }

    let fullQuery = `${baseQuery}${
      conditions.length > 0 ? ` [${conditions.join(" && ")}]` : ""
    }{
    _id,
    "image": image.asset-> {
      _id,
      url
    },
    name,
    price,
    details,
    color,
    metalFinish,
    gemStones,
    theme,
    size
  }`;

    if (filters.sortOrder) {
      fullQuery += ` | order(price ${filters.sortOrder})`;
    }

    sanityClient
      .fetch(fullQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [filters]);

  //FUNCTION FOR FILTER BTN TO OPEN FILTER COMPONENT (SLIDE OUT LIKE CART MENU)

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 text-btn font-bold text-4xl">BROWSE CATALOG</h1>
     
      <FilterBtn onApply={handleApplyFilters} />

      <div className="m-10 ">
      {products.length > 0 ? (
        <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p>No products are available at this time.</p>
        </div>
      )}
    </div>
      <Footer />
    </div>
  );
}

export default ProductList;
