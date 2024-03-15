import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function FilterBtn({ onApply }) {
  const [sortOrder, setSortOrder] = useState("");

  const [filters, setFilters] = useState({
    selectedColor: "",
    selectedTheme: "",
    selectedGem: "",
    selectedMetalFinish: "",
    selectedSize: "",
  });

  const colorOptions = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "white",
    "grey",
    "brown",
    "beige",
    "teal",
    "navy",
    "maroon",
    "gold",
    "silver",
    "bronze",
    "copper",
    "transparent",
  ];

  const metalOptions = ["gold", "silver", "roseGold", "gunmetal", "other"];

  const applyFilters = () => {
    onApply({ ...filters, sortOrder });
  };

  // UNIVERSAL FILTER SELECT FUNCTION
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: prevFilters[name] === value ? "" : value,
    }));
  };

  return (
    <>
      <div className="filter-sort-menu">
        <div className="filter-container">
          {/* ADD ACCORDION */}
          <p>Select Color:</p>
          {colorOptions.map((color) => (
            <label key={color}>
              <input
                type="radio"
                name="selectedColor"
                value={color}
                checked={filters.selectedColor === color}
                onChange={handleFilterChange}
              />
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </label>
          ))}
          <hr />
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>

        <div className="text-center">
          <button className="p-1 border" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterBtn;

// ACCORDION FILTER OPTIONS and CLEAR ALL
