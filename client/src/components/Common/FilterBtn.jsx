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
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="brown">Brown</option>
          <option value="beige">Beige</option>
          <option value="teal">Teal</option>
          <option value="navy">Navy</option>
          <option value="maroon">Maroon</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
          <option value="copper">Copper</option>
          <option value="transparent">Transparent</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select Sort Order</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>

        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="">Select Theme</option>
          <option value="celestial">Celestial</option>
          <option value="barbie">Barbie</option>
          <option value="kawaii">Kawaii</option>
          <option value="holiday">Holiday</option>
          <option value="animals">Animals</option>
          <option value="helloKitty">Hello Kitty</option>
          <option value="dangle">Dangle</option>
          <option value="alphabet">Alphabet</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <select
          value={selectedGem}
          onChange={(e) => setSelectedGem(e.target.value)}
        >
          <option value="">Select Gem</option>
          <option value="clear">Clear</option>
          <option value="ab">AB</option>
          <option value="colored">Colored</option>
          <option value="opal">Opal</option>
          <option value="pearl">Pearl</option>
          <option value="swarovski">Swarovski</option>
          <option value="zircon">Zircon</option>
        </select>
        <select
          value={selectedMetalFinish}
          onChange={(e) => setSelectedMetalFinish(e.target.value)}
        >
          <option value="">Select Metal Finish</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="roseGold">Rose Gold</option>
          <option value="gunmetal">Gunmetal</option>
          <option value="other">Other</option>
        </select>

        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Select Size</option>
          <option value="pixie">Pixie</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xl">XL</option>
        </select>
        <div className="text-center">
          <button className="p-1 border" onClick={applyFilters}>
            {/* put applyFilters function in productlist*/}
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterBtn;
