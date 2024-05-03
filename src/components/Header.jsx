import React from "react";
import "./styles/header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav/Nav";

function Header({ setIsSidebarOpen }) {
  const handleToggleSideBar = () => {
    setIsSidebarOpen((prev) => {
      return !prev;
    });
  };
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo handleToggleSideBar={handleToggleSideBar} />
      <SearchBar />
      <Nav />
    </header>
  );
}

export default Header;
