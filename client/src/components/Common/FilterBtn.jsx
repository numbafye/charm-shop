import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function FilterBtn({ onApply }) {
  const [filters, setFilters] = useState({
    selectedColor: "",
    selectedTheme: "",
    selectedGem: "",
    selectedMetalFinish: "",
    selectedSize: "",
    sortOrder: "",
  });

  const [filterOpen, setFilterOpen] = useState(false);

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
    { title: "Swarovski", value: "swarovski" },
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
    onApply(filters);
    setFilterOpen(!filterOpen);
    setFilters({
      selectedColor: "",
      selectedTheme: "",
      selectedGem: "",
      selectedMetalFinish: "",
      selectedSize: "",
      sortOrder: "",
    });
  };

  const clearFilters = () => {
    setFilters({
      selectedColor: "",
      selectedTheme: "",
      selectedGem: "",
      selectedMetalFinish: "",
      selectedSize: "",
      sortOrder: "",
    });
    onApply({
      selectedColor: "",
      selectedTheme: "",
      selectedGem: "",
      selectedMetalFinish: "",
      selectedSize: "",
      sortOrder: "",
    });
    setFilterOpen(!filterOpen);
  };

  // UNIVERSAL FILTER SELECT FUNCTION
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: prevFilters[name] === value ? "" : value,
    }));
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="filter-sort-menu">
      <div className="w-full text-center">
        <button className="w-1/2 mt-4 border" onClick={toggleFilter}>
          Filter & Sort
        </button>
        {/* Make Button slide the menu out for filtering */}
        {/* make radio type hidden and then add small circle img before text */}
      </div>
      {filterOpen && (
        <div className={`filter-container ${filterOpen ? "" : "hidden"}`}>
          <Accordion alwaysOpen className="m-0">
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
              <Accordion.Body>
                {metalOptions.map(({ title, value }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="selectedMetalFinish"
                      value={value}
                      checked={filters.selectedMetalFinish === value}
                      onChange={handleFilterChange}
                    />
                    {title}
                  </label>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p>Theme</p>
              </Accordion.Header>
              <Accordion.Body>
                {themeOptions.map(({ title, value }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="selectedTheme"
                      value={value}
                      checked={filters.selectedTheme === value}
                      onChange={handleFilterChange}
                    />
                    {title}
                  </label>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p>Size</p>
              </Accordion.Header>
              <Accordion.Body>
                {sizeOptions.map(({ title, value }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="selectedSize"
                      value={value}
                      checked={filters.selectedSize === value}
                      onChange={handleFilterChange}
                    />
                    {title}
                  </label>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <p>Gemstones</p>
              </Accordion.Header>
              <Accordion.Body>
                {gemOptions.map(({ title, value }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="selectedGem"
                      value={value}
                      checked={filters.selectedGem === value}
                      onChange={handleFilterChange}
                    />
                    {title}
                  </label>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <p>Sort By</p>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sortOrder"
                      value="asc"
                      checked={filters.sortOrder === "asc"}
                      onChange={handleFilterChange}
                    />
                    Price Low to High
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sortOrder"
                      value="desc"
                      checked={filters.sortOrder === "asc"}
                      onChange={handleFilterChange}
                    />
                    Price High to Low
                  </label>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            <button className="relative top-8 left-12 text-left" onClick={clearFilters}>
              Clear All
            </button>
          <div className="text-center  bg-text">
            <button className="p-1 border h-10" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
          {/* END OF FILTER CONTAINER */}
        </div>
      )}
    </div>
  );
}

export default FilterBtn;

// ACCORDION FILTER OPTIONS and CLEAR ALL
