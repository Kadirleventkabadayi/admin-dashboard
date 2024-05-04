import React, { useState, useEffect } from "react";
import "./styles/dashboard.css";
import fetchData from "../utils/FetchData";
import Card from "./Card";
import Reports from "./Reports";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";

function Dashboard() {
  const [cards, setCards] = useState();
  useEffect(() => {
    fetchData("http://localhost:4000/cards").then((data) => setCards(data));
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => (
                <Card name={card.name} key={card._id} card={card}></Card>
              ))}
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
              <RecentSales />
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
