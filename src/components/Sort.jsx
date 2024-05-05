import React from "react";
import "./styles/sort.css";

function Sort({ status, filterChange }) {
  return (
    <div className="card sort-wraper ">
      <div className="card sort-btn" data-bs-toggle="dropdown">
        <a className="icon" href="#">
          SORT BY {status.toUpperCase()}
        </a>
        <i className="bi bi-filter"></i>
      </div>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>SORT</h6>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("_id")}>
            by ID
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("brand")}>
            by brand
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("name")}>
            by name
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("price")}>
            by price
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("stock")}>
            by stock
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sort;
