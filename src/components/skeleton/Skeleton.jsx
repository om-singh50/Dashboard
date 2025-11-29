function Skeleton({ width = "100%", height = "16px", style }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "6px",
        background: "linear-gradient(90deg, var(--bg2), var(--bg), var(--bg2))",
        backgroundSize: "200% 100%",
        animation: "skeleton-shimmer 1.4s ease-in-out infinite",
        ...style,
      }}
    ></div>
  );
}

export default Skeleton;
