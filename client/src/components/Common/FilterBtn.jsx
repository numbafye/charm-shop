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
    { title: "Grey", value: "grey" },
    { title: "Brown", value: "brown" },
    { title: "Transparent", value: "transparent" },
    { title: "Multi-Color", value: "multiColor" },
  ];

  const metalOptions = [
    { title: "Gold", value: "gold" },
    { title: "Silver", value: "silver" },
    { title: "Rose Gold", value: "roseGold" },
    { title: "Gunmetal", value: "gunmetal" },
    { title: "Other", value: "other" },
  ];

  const gemOptions = [
    { title: "Clear", value: "clear" },
    { title: "AB", value: "ab" },
    { title: "Colored", value: "colored" },
    { title: "Opal", value: "opal" },
    { title: "Pearl", value: "pearl" },
    { title: "Swavorski", value: "swavorski" },
    { title: "Zircon", value: "zircon" },
  ];

  const sizeOptions = [
    { title: "Pixie", value: "pixie" },
    { title: "Small", value: "small" },
    { title: "Medium", value: "medium" },
    { title: "Large", value: "large" },
    { title: "XL", value: "xl" },
  ];

  const themeOptions = [
    { title: "Nature", value: "nature" },
    { title: "Celestial", value: "celestial" },
    { title: "Barbie", value: "barbie" },
    { title: "Kawaii", value: "kawaii" },
    { title: "Holiday", value: "holiday" },
    { title: "Animals", value: "animals" },
    { title: "Hello Kitty", value: "helloKitty" },
    { title: "Dangle", value: "dangle" },
    { title: "Alphabet", value: "alphabet" },
    { title: "Miscellaneous", value: "miscellaneous" },
  ];

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
                ))}
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
