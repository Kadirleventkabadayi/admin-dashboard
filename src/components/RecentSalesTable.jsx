import React from "react";

function RecentSalesTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
        break;
      case "Pending":
        return "warning";
        break;
      case "Rejected":
        return "danger";
        break;
      default:
        return "success";
    }
  };
  return (
    <table className=" table table-borderless datatable">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.customer}</td>
              <td>
                <a href="#" className="text-primary">
                  {item.product}
                </a>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.satatus)}`}>
                  {item.satatus}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default RecentSalesTable;
