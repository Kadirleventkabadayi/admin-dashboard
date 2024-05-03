import React from "react";
import "./styles/main.css";
import PageTitle from "./PageTitle";
import Dashboard from "./Dashboard";

//manin in açılıp kapanamsı ayaralancak
function Main({ isSidebarOpen }) {
  return (
    <main id="main" className={`main${isSidebarOpen ? "-sidebar-open" : ""}`}>
      <PageTitle page={"Dashboard"}></PageTitle>
      <Dashboard />
    </main>
  );
}

export default Main;
