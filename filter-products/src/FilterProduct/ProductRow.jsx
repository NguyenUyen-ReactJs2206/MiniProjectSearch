import React from "react";

export default function ProductRow({ productItem }) {
  return (
    <>
      <tr>
        <td>{productItem.name}</td>
        <td>{productItem.price}</td>
      </tr>
    </>
  );
}
