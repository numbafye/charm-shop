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
    { title: "Red", value: "red" },
    { title: "Blue", value: "blue" },
    { title: "Green", value: "green" },
    { title: "Yellow", value: "yellow" },
    { title: "Orange", value: "orange" },
    { title: "Purple", value: "purple" },
    { title: "Pink", value: "pink" },
    { title: "Black", value: "black" },
    { title: "White", value: "white" },
    { title: "Brown", value: "brown" },
    { title: "Multi-Color", value: "multiColor" },
    { title: "Transparent", value: "transparent" },
  ];

  const metalOptions = ["gold", "silver", "roseGold", "gunmetal", "other"];

  const applyFilters = () => {
    onApply({ ...filters, sortOrder });
  };

  const clearFilters = () => {
    setFilters({
      selectedColor: "",
      selectedTheme: "",
      selectedGem: "",
      selectedMetalFinish: "",
      selectedSize: "",
    });
    setSortOrder("");
    onApply({
      selectedColor: "",
      selectedTheme: "",
      selectedGem: "",
      selectedMetalFinish: "",
      selectedSize: "",
      sortOrder: "",
    });
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
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>Color</p>
              </Accordion.Header>
              <Accordion.Body>
                {colorOptions.map(({ title, value }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="selectedColor"
                      value={value}
                      checked={filters.selectedColor === value}
                      onChange={handleFilterChange}
                    />
                    {title}
                  </label>
                ))}{" "}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p>Metal Finish</p>
              </Accordion.Header>
              <Accordion.Body>Lorem ipsum</Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
          <button className="" onClick={clearFilters}>
            Clear All
          </button>
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
