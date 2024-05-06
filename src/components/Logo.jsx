import React from "react";
import "./styles/logo.css";
import logopic from "../images/logopic.png";
import { Link } from "react-router-dom";

function Logo({ handleToggleSideBar }) {
  // const handleToggleSideBar = () => {
  //   document.body.classList.toggle("toggle-sidebar");
  // };

  return (
    <div
      className="d-flex align-items-center ustify-content-between"
      onClick={handleToggleSideBar}
    >
      <Link href="" className="logo d-flex align-items-center">
        <img src={logopic} alt="logo" />
        <span className="d-none d-lg-block">AdminDashboard</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>
  );
}

export default Logo;
