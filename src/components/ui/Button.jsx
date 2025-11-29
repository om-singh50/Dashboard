function Button({
  children,
  variant = "primary",
  onClick,
  disabled,
  style,
}) {
  const variants = {
    primary: {
      backgroundColor: "var(--primary)",
      color: "var(--primaryText)",
      borderColor: "var(--primary)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--text)",
      borderColor: "var(--border)",
    },
    danger: {
      backgroundColor: "var(--danger)",
      color: "#fff",
      borderColor: "var(--dangerBorder)",
    },
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: "0.45rem 0.9rem",
        borderRadius: "0.5rem",
        border: "1px solid",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
