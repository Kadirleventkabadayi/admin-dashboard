import React from "react";
import "./logo.css";
import logopic from "../images/logopic.png";

function Logo({ handleToggleSideBar }) {
  // const handleToggleSideBar = () => {
  //   document.body.classList.toggle("toggle-sidebar");
  // };

  return (
    <div
      className="d-flex align-items-center ustify-content-between"
      onClick={handleToggleSideBar}
    >
      <a href="/" className="logo d-flex align-items-center">
        <img src={logopic} alt="logo" />
        <span className="d-none d-lg-block">AdminDashboard</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>
  );
}

export default Logo;
