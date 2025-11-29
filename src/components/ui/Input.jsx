function Input({ value, onChange, placeholder, type = "text", style }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "0.5rem 0.75rem",
        borderRadius: "0.5rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--inputBg)",
        color: "var(--text)",
        ...style,
      }}
    />
  );
}

export default Input;
