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

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar isSidebarOpen={isSidebarOpen} />
      <Main isSidebarOpen={isSidebarOpen} />
      <Footer />
      <GoTop />
    </>
  );
}

export default App;
