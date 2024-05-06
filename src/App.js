//icons
import "bootstrap-icons/font/bootstrap-icons.css";

//Bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import { useState } from "react";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import ProductsPage from "./pages/ProductsPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  createBrowserRouter,
  Routes,
} from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  // const myRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootPage />,
  //     errorElement: <ErrorPage />,
  //     children: [],
  //   },
  // ]);
  return (
    <BrowserRouter>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Main />} />
        <Route
          path="products"
          element={<ProductsPage isSidebarOpen={isSidebarOpen} />}
        />
      </Routes>
      <Footer />
      <GoTop />
    </BrowserRouter>
  );
}

export default App;
