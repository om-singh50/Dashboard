function Card({ children, title, style }) {
  return (
    <div
      style={{
        borderRadius: "0.75rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--card)",
        padding: "1rem",
        ...style,
      }}
    >
      {title && (
        <h2 style={{ marginTop: 0, marginBottom: "0.75rem" }}>{title}</h2>
      )}
      {children}
    </div>
  );
}

export default Card;
