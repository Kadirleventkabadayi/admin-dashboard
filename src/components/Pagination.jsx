import React from "react";
import { Link } from "react-router-dom";

function Pagination({ activePage, productsPerPage, totalProducts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex p-2 justify-content-center" aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
          <Link className="page-link" to="#" onClick={() => paginate(1)}>
            Previous
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === activePage ? "active" : ""}`}
          >
            <Link to="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
        <li
          className={`page-item ${
            activePage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <Link
            className="page-link"
            to="#"
            onClick={() => paginate(activePage + 1)}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
