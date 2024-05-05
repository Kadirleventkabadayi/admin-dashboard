import React, { useState, useEffect } from "react";
import "./styles/products.css";
import fetchData from "../utils/FetchData";

import Product from "./Product";
import NewProductButton from "./NewProductButton";
import Sort from "./Sort";

const DUMMY_DATA = [
  { _id: 123, brand: "marka 8", name: "ürün ismi 1", price: 123, stock: 12 },
  { _id: 234, brand: "marka 7", name: "ürün ismi 2", price: 11, stock: 11 },
  { _id: 345, brand: "marka 6", name: "ürün ismi 3", price: 23, stock: 0 },
  { _id: 456, brand: "marka 5", name: "ürün ismi 4", price: 30, stock: 2 },
  { _id: 567, brand: "marka 4", name: "ürün ismi 5", price: 123, stock: 34 },
  { _id: 678, brand: "marka 3", name: "ürün ismi 6", price: 111, stock: 1 },
  { _id: 789, brand: "marka 2", name: "ürün ismi 7", price: 223, stock: 14 },
  { _id: 890, brand: "marka 1", name: "ürün ismi 8", price: 301, stock: 0 },
];

function Products() {
  const [filter, setFilter] = useState("_id");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = DUMMY_DATA.sort((a, b) => {
      if (a._id < b._id) {
        return -1;
      }
      if (a._id > b._id) {
        return 1;
      }
      return 0;
    });
    setFilteredProducts(filtered);
    console.log("filter:", filter, "DATA: ", filtered);
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);
    const filtered = DUMMY_DATA.sort((a, b) => {
      if (a[filter] < b[filter]) {
        return -1;
      }
      if (a[filter] > b[filter]) {
        return 1;
      }
      return 0;
    });
    setFilteredProducts(filtered);
    console.log("filter:", filter, "DATA: ", filtered);
  };

  const productKeys = Object.keys(DUMMY_DATA[0]);
  return (
    <section className="dashboard section products-page">
      <div className="row">
        <div
          className="d-flex justify-content-end col-lg 1 "
          style={{ height: "50px" }}
        >
          <Sort status={filter} filterChange={handleFilterChange} />
        </div>
        <div className="col-lg-12">
          <div className="headers-wraper">
            <h3 />
            <div className="card product-headers lg-11">
              <div className="headers">
                {productKeys.map((key) => (
                  <h3 key={key}>{key === "_id" ? "ID" : key}</h3>
                ))}
              </div>
            </div>
          </div>
          <ul>
            {filteredProducts.map((item) => (
              <Product key={item._id} item={item} />
            ))}
          </ul>
          <NewProductButton />
        </div>
      </div>
    </section>
  );
}

export default Products;
