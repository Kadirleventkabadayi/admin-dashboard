import React from "react";
import "./styles/main.css";
import PageTitle from "./PageTitle";
import Products from "./Products";

function ProductsPage({ isSidebarOpen }) {
  return (
    <main id="main" className={`main${isSidebarOpen ? "-sidebar-open" : ""}`}>
      <PageTitle page={"Products"}></PageTitle>
      <Products />
    </main>
  );
}
export default ProductsPage;
