import React from "react";

function TopSellingItem({ item }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={item.img} alt=""></img>
        </a>
      </th>
      <td>
        <a href="#" className="text-primary fw-bold">
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className="fw-bold">{item.sold}</td>
      <td>${(item.price * item.sold).toLocaleString("en-US")}</td>
    </tr>
  );
}

export default TopSellingItem;
