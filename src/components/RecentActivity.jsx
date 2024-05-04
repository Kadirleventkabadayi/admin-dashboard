import React, { useEffect, useState } from "react";
import fetchData from "../utils/FetchData";
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";

import "./styles/recentActivity.css";

function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  useEffect(() => {
    fetchData("http://localhost:4000/recentactivities").then((data) =>
      setItems(data)
    );
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activitiy <span>/{filter}</span>
        </h5>
        <div className="activity">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <RecentActivityItem key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default RecentActivity;
