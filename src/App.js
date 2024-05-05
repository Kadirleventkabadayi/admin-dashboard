//icons
import "bootstrap-icons/font/bootstrap-icons.css";

//Bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import ProductsPage from "./components/ProductsPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar isSidebarOpen={isSidebarOpen} />

      {/* Router Eklenecek */}
      {show ? (
        <ProductsPage isSidebarOpen={isSidebarOpen} />
      ) : (
        <Main isSidebarOpen={isSidebarOpen} />
      )}

      <Footer />
      <GoTop />
    </>
  );
}

export default App;
