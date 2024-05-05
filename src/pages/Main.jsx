import React from "react";
import "../components/styles/main.css";
import PageTitle from "../components/PageTitle";
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";

//manin in açılıp kapanamsı ayaralancak
function Main({ isSidebarOpen }) {
  return (
    <main id="main" className={`main${isSidebarOpen ? "-sidebar-open" : ""}`}>
      <PageTitle page={"Dashboard"}></PageTitle>
      <Dashboard />
      <Products />
    </main>
  );
}

export default Main;
