import React, { useState } from "react";

function NavItem({ link, icon, text, children, isCollapsed, isPage }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isCollapsed ? "collapsed" : ""}`}
        href={link}
        onClick={isCollapsed ? handleSubMenuToggle : undefined}
      >
        <i className={icon}></i> <span>{text}</span>
        {!isPage && <i className="bi bi-chevron-down ms-auto"></i>}
      </a>
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
