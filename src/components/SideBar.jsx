import "./styles/sideBar.css";

import NAVLIST from "../data/navItems";
import NavItem from "./NavItem";

function SideBar({ isSidebarOpen }) {
  return (
    <aside id="sidebar" className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <NavItem
          isCollapsed={false}
          link="/"
          icon="bi bi-grid"
          text="Dashboard"
        />

        {/* Documents */}
        <NavItem
          link="#components-nav"
          icon="bi bi-menu-button-wide"
          text="Documents"
          isCollapsed={true}
        >
          <NavItem isCollapsed={false} link="/products" text="Products" />
          <NavItem isCollapsed={false} link="#" text="Customers" />
          <NavItem isCollapsed={false} link="#" text="Suppliers" />
          <NavItem isCollapsed={false} link="#" text="Logistic" />
        </NavItem>

        {/* Forms */}
        <NavItem
          link="#forms-nav"
          icon="bi bi-journal-text"
          text="Forms"
          isCollapsed={true}
        >
          <NavItem isCollapsed={false} link="#" text="Application Form" />
          <NavItem isCollapsed={false} link="#" text="Release Form" />
          <NavItem isCollapsed={false} link="#" text="Cancellation Form" />
        </NavItem>

        {/* Tables */}
        <NavItem
          link="#tables-nav"
          icon="bi bi-layout-text-window-reverse"
          text="Tables"
          isCollapsed={true}
        >
          <NavItem isCollapsed={false} link="#" text="General Tables" />
          <NavItem isCollapsed={false} link="#" text="Data Tables" />
        </NavItem>

        {/* Charts */}
        <NavItem
          link="#charts-nav"
          icon="bi bi-bar-chart"
          text="Charts"
          isCollapsed={true}
        >
          <NavItem isCollapsed={false} link="#" text="Line Chart" />
          <NavItem isCollapsed={false} link="#" text="Bar Chart" />
          <NavItem isCollapsed={false} link="#" text="Pie Chart" />
        </NavItem>

        {/* Pages */}
        <li className="nav-heading">Pages</li>
        {NAVLIST.map((nav) => (
          <NavItem
            key={nav._id}
            link="#"
            icon={nav.icon}
            text={nav.name}
            isCollapsed={false}
          />
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
