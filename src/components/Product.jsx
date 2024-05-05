import React, { useState } from "react";
import "./styles/product.css";

function Product({ item }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li className="product">
      <input
        className="form-check-input"
        type="checkbox"
        name="flexRadioDefault"
        id={item._id}
        onClick={toggleSelected}
        style={{ cursor: "pointer" }}
        checked={selected}
      />

      <div
        onClick={toggleSelected}
        className={`card product-item lg-11 ${item.stock > 0 ? "" : "danger"} ${
          selected > 0 ? "selected" : ""
        }`}
      >
        <div className="product-info">
          <h3>#{item._id}</h3>
          <h3>{item.brand}</h3>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
          <h3>{item.stock}</h3>
        </div>
      </div>
    </li>
  );
}

export default Product;
