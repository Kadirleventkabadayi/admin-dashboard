import React from "react";
import "./nav.css";
import NavNotice from "./NavNotice";
import NavMesaage from "./NavMesaage";
import NavAvatar from "./NavAvatar";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMesaage />
        <NavAvatar />
      </ul>
    </nav>
  );
}

export default Nav;
