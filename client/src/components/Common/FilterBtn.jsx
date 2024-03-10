// FILTER & SORT FOR THEMES
// N/A FOR NOW
//MAKE SURE SANITY CAN MAKE DIFFERENT THEMES TO FILTER THRU ADD AS TYPE IN SCHEMA (START WITH FLORAL, KAWAII)

import { useState } from "react";

function FilterBtn({ onApply }) {
  const [sortOrder, setSortOrder] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedGem, setSelectedGem] = useState("");
  const [selectedMetalFinish, setSelectedMetalFinish] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const applyFilters = () => {
    onApply({
      color: selectedColor,
      theme: selectedTheme,
      gemstones: selectedGem,
      metal: selectedMetalFinish,
      size: selectedSize,
      sortOrder,
    });
  };

  return (
    <>
      <div className="filter-sort-menu">
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">Select Color</option>
          {/* Add remaining options for colors */}
        </select>

        {/* Sort Order */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select Sort Order</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>

        <button className="p-1 border" onClick={applyFilters}>
          {/* put applyFilters function in productlist*/}
          Apply Filters
        </button>
      </div>
    </>
  );
}

export default FilterBtn;
