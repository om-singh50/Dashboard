function Select({ value, onChange, children, style }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: "0.5rem 0.75rem",
        borderRadius: "0.5rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--inputBg)",
        color: "var(--text)",
        ...style,
      }}
    >
      {children}
    </select>
  );
}

export default Select;
