import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";

function Topbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <header
      style={{
        height: "56px",
        backgroundColor: "var(--topbarBg)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ color: "var(--text-muted)" }}>
        User Management Dashboard
      </div>

      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: "0.4rem 0.8rem",
          borderRadius: "0.5rem",
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        {mode === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Topbar;
