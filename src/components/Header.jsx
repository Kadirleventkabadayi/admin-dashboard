import React from "react";
import "./header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav/Nav";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
}

export default Header;
