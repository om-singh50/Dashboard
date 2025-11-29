function Badge({ children, color = "success" }) {
  const colors = {
    success: {
      backgroundColor: "var(--successBg)",
      color: "var(--successText)",
    },
    danger: {
      backgroundColor: "var(--dangerBg)",
      color: "var(--dangerText)",
    },
  };

  return (
    <span
      style={{
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.75rem",
        ...colors[color],
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
