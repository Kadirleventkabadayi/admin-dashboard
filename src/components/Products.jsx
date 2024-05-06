import React, { useState, useEffect } from "react";
import "./styles/products.css";
import fetchData from "../utils/FetchData";

import Product from "./Product";
import NewProductButton from "./NewProductButton";
import Sort from "./Sort";
import Pagination from "./Pagination";

function Products() {
  const [filter, setFilter] = useState("_id");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchData("http://localhost:4000/products").then((data) => {
      setFilteredProducts(data);
    });
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);

    const filtered = filteredProducts.sort((a, b) => {
      if (a[filter] < b[filter]) {
        return -1;
      }
      if (a[filter] > b[filter]) {
        return 1;
      }
      return 0;
    });
    setFilteredProducts(filtered);
  };
  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    filteredProducts.length
  );

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const productKeys =
    currentProducts.length > 0 ? Object.keys(currentProducts[0]) : [];
  return (
    <section className="dashboard section products-page">
      <div className="row">
        <div
          className="d-flex justify-content-end col-lg 1 sort-and-select"
          style={{ height: "50px" }}
        >
          <h3 className="headers select"></h3>
          <Sort status={filter} filterChange={handleFilterChange} />
        </div>
        <div className="col-lg-12 lg-12-column">
          <div className="headers-wraper">
            <h3 />
            <div className="card product-headers lg-11">
              <div className="headers">
                {productKeys.map((key) => (
                  <h3 key={key}>{key === "_id" ? "ID" : key.toUpperCase()}</h3>
                ))}
              </div>
            </div>
          </div>
          <ul>
            {currentProducts.map((item) => (
              <Product isSelected={false} key={item._id} item={item} />
            ))}
          </ul>
          <NewProductButton />
          <Pagination
            activePage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
