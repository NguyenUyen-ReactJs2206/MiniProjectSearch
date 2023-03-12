import React, { useEffect, useState } from "react";
import productListMock from "../api";
import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const fetchApi = () => Promise.resolve(productListMock);
console.log("aaaa", fetchApi());
export default function FilterableProductTable() {
  const [state, setState] = useState({
    productList: [],
    searchText: "",
    inStock: false,
  });
  useEffect(() => {
    fetchApi().then((res) => {
      console.log("bbb", res);
      setState({ ...state, productList: res });
    });
  }, []);

  const handleChange = (name) => (e) => {
    if (name === "searchText") {
      setState({ ...state, searchText: e.target.value });
    } else if (name === "inStock") {
      setState({ ...state, inStock: e.target.checked });
    }
  };
  //Alternatively without using currying, you can transmiss name
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   if (name === "product") {
  //     setState({ ...state, searchText: e.target.value });
  //   } else if (name === "in stock") {
  //     setState({ ...state, inStock: e.target.checked });
  //   }
  // };
  return (
    <div className="FilterableProductTable">
      <SearchBar
        searchText={state.searchText}
        inStock={state.inStock}
        handleChange={handleChange}
      />
      <ProductTable
        productList={productListMock}
        searchText={state.searchText}
        inStock={state.inStock}
      />
    </div>
  );
}
