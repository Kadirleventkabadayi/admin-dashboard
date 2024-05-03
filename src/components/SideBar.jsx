import "./styles/sideBar.css";

import NAVLIST from "../data/navItems";
import NavItem from "./NavItem";

function SideBar({ isSidebarOpen }) {
  return (
    <aside id="sidebar" className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <NavItem link="/" icon="bi bi-grid" text="Dashboard" />

        {/* Documents */}
        <NavItem
          link="#components-nav"
          icon="bi bi-menu-button-wide"
          text="Documents"
          isCollapsed={true}
        >
          <NavItem link="#" text="Customers" />
          <NavItem link="#" text="Suppliers" />
          <NavItem link="#" text="Logistic" />
        </NavItem>

        {/* Forms */}
        <NavItem
          link="#forms-nav"
          icon="bi bi-journal-text"
          text="Forms"
          isCollapsed={true}
        >
          <NavItem link="#" text="Application Form" />
          <NavItem link="#" text="Release Form" />
          <NavItem link="#" text="Cancellation Form" />
        </NavItem>

        {/* Tables */}
        <NavItem
          link="#tables-nav"
          icon="bi bi-layout-text-window-reverse"
          text="Tables"
          isCollapsed={true}
        >
          <NavItem link="#" text="General Tables" />
          <NavItem link="#" text="Data Tables" />
        </NavItem>

        {/* Charts */}
        <NavItem
          link="#charts-nav"
          icon="bi bi-bar-chart"
          text="Charts"
          isCollapsed={true}
        >
          <NavItem link="#" text="Line Chart" />
          <NavItem link="#" text="Bar Chart" />
          <NavItem link="#" text="Pie Chart" />
        </NavItem>

        {/* Icons */}
        <NavItem
          link="#icons-nav"
          icon="bi bi-gem"
          text="Icons"
          isCollapsed={true}
        >
          <NavItem link="#" text="Bootstrap Icons" />
          <NavItem link="#" text="Remix Icons" />
          <NavItem link="#" text="Boxicons" />
        </NavItem>

        {/* Pages */}
        <li className="nav-heading">Pages</li>
        {NAVLIST.map((nav) => (
          <NavItem
            key={nav._id}
            link="#"
            icon={nav.icon}
            text={nav.name}
            isCollapsed={true}
            isPage={true}
          />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
