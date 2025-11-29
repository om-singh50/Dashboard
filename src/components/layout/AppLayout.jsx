import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "var(--bg2)",
      }}
    >
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <main
          style={{
            flex: 1,
            padding: "1.5rem",
            backgroundColor: "var(--bg)",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
