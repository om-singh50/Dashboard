// src/components/common/Modal.jsx
function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15,23,42,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "#020617",
          borderRadius: "0.75rem",
          border: "1px solid #1f2937",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.75)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.05rem" }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              color: "#9ca3af",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
        <div style={{ marginBottom: "1rem" }}>{children}</div>
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
