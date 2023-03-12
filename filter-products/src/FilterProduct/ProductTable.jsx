import React, { Fragment } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  console.log(props.productList);
  const { productList, searchText, inStock } = props;

  let lastCategory = null;
  // const rows = [];
  // productList.forEach((productItem) => {
  //   if (productItem.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow
  //         key={productItem.category}
  //         category={productItem.category}
  //       />
  //     );
  //   }
  //   rows.push(<ProductRow key={productItem.name} productItem={productItem} />);

  //   lastCategory = productItem.category;
  // });
  const rows = productList.map((productItem) => {
    if (inStock && productItem.stocked === false) {
      return;
    }
    if (productItem.name.toLowerCase().indexOf(searchText) === -1) {
      // -1 la ko co
      return;
    }
    if (productItem.category !== lastCategory) {
      lastCategory = productItem.category;
      return (
        <Fragment key={productItem.name}>
          <ProductCategoryRow category={productItem.category} />
          <ProductRow productItem={productItem} />
        </Fragment>
      );
    }
    return <ProductRow productItem={productItem} key={productItem.name} />;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
