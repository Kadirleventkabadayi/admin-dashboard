import React from "react";
import "./sideBar.css";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-gird"></i> <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i> <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Logistic</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-journal-text"></i> <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Application Form</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Release Form</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Cancellation Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-layout-text-window-reverse"></i>{" "}
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            I
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-bar-chart"></i> <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Line Chart</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Bar Chart</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Pie Chart</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-gem"></i> <span>Icons</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Remix Icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i> <span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
