//icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

//Bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default App;
