import React, { useState, useEffect } from "react";
import "./styles/recentSales.css";
import CardFilter from "./CardFilter";
import RecentSalesTable from "./RecentSalesTable";
import fetchData from "../utils/FetchData";

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  useEffect(() => {
    fetchData("http://localhost:4000/recentsales").then((data) =>
      setItems(data)
    );
  }, []);

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Sales <span>/{filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}

export default RecentSales;
