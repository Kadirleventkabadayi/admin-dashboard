import React, { useState } from "react";

function Pagination() {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <nav className="d-flex p-2 justify-content-center" aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            tabIndex="-1"
            onClick={() => handlePageChange(activePage - 1)}
          >
            Previous
          </a>
        </li>
        <li className={`page-item ${activePage === 1 ? "active" : ""}`}>
          <a className="page-link" href="#" onClick={() => handlePageChange(1)}>
            1
          </a>
        </li>
        <li className={`page-item ${activePage === 2 ? "active" : ""}`}>
          <a className="page-link" href="#" onClick={() => handlePageChange(2)}>
            2
          </a>
        </li>
        <li className={`page-item ${activePage === 3 ? "active" : ""}`}>
          <a className="page-link" href="#" onClick={() => handlePageChange(3)}>
            3
          </a>
        </li>
        <li className={`page-item ${activePage > 3 ? "active" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => handlePageChange(activePage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
