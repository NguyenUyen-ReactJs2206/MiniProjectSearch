import React from "react";

export default function SearchBar(props) {
  const { searchText, inStock, handleChange } = props;
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          // name="product"
          value={searchText}
          onChange={handleChange("searchText")}
        />
        <div>
          <input
            type="checkbox"
            value={inStock}
            // name="in stock"
            onChange={handleChange("inStock")}
          />
          Only Show Products
        </div>
      </form>
    </>
  );
}
