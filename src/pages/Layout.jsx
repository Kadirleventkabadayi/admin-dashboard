import React from "react";
import "../components/styles/main.css";
import PageTitle from "../components/PageTitle";

//manin in açılıp kapanamsı ayaralancak
function Layout({ isSidebarOpen }) {
  return (
    <main id="main" className={`main${isSidebarOpen ? "-sidebar-open" : ""}`}>
      <PageTitle page={"Layout"}></PageTitle>
    </main>
  );
}

export default Layout;
