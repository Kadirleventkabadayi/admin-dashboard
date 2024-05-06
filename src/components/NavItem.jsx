import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({ link, icon, text, children, isCollapsed }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className={`nav-item ${text === "Dashboard" ? "main-item" : ""}`}>
      <Link
        className={`nav-link ${isCollapsed ? "collapsed" : ""}`}
        to={link}
        onClick={isCollapsed ? handleSubMenuToggle : undefined}
      >
        <i className={icon}></i> <span>{text}</span>
        {isCollapsed && <i className="bi bi-chevron-down ms-auto"></i>}
      </Link>
      {isCollapsed && (
        <ul
          className="nav-content collapse"
          style={{ display: isSubMenuOpen ? "block" : "none" }}
        >
          {children}
        </ul>
      )}
    </li>
  );
}

export default NavItem;
