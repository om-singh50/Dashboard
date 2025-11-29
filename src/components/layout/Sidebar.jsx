import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        backgroundColor: "var(--sidebarBg)",
        padding: "1.5rem 1rem",
        borderRight: "1px solid var(--border)",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem" }}>User Admin</h1>

      <nav>
        <NavLink
          to="/users"
          style={({ isActive }) => ({
            display: "block",
            padding: "0.6rem 0.9rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            color: isActive ? "var(--primaryText)" : "var(--text-muted)",
            backgroundColor: isActive ? "var(--primary)" : "transparent",
          })}
        >
          Users
        </NavLink>

        <NavLink
          to="/analytics"
          style={({ isActive }) => ({
            display: "block",
            padding: "0.6rem 0.9rem",
            marginTop: "0.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            color: isActive ? "var(--primaryText)" : "var(--text-muted)",
            backgroundColor: isActive ? "var(--primary)" : "transparent",
          })}
        >
          Analytics
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
