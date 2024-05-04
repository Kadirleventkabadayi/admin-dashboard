import React, { useEffect, useState } from "react";
import "./styles/news.css";
import fetchData from "../utils/FetchData";
import CardFilter from "./CardFilter";
import NewsItem from "./NewsItem";

function News() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  useEffect(() => {
    fetchData("http://localhost:4000/news").then((data) => setItems(data));
  }, []);
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          News & Updates <span>/{filter}</span>
        </h5>
        <div className="news">
          {items &&
            items.length > 0 &&
            items.map((item) => <NewsItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default News;
