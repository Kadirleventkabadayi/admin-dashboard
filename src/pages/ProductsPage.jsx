import React from "react";
import "../components/styles/main.css";
import PageTitle from "../components/PageTitle";
import Products from "../components/Products";

function ProductsPage({ isSidebarOpen }) {
  return (
    <main id="main" className={`main${isSidebarOpen ? "-sidebar-open" : ""}`}>
      <PageTitle page={"Products"}></PageTitle>
      <Products />
    </main>
  );
}
export default ProductsPage;
