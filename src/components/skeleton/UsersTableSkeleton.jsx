import Skeleton from "./Skeleton";

function UsersTableSkeleton({ rows = 5 }) {
  return (
    <div
      style={{
        borderRadius: "0.75rem",
        border: "1px solid var(--border)",
        overflow: "hidden",
        marginTop: "1rem",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "var(--tableHead)" }}>
          <tr>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>
              <Skeleton width="40%" height="14px" />
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>
              <Skeleton width="50%" height="14px" />
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>
              <Skeleton width="30%" height="14px" />
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>
              <Skeleton width="40%" height="14px" />
            </th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>
              <Skeleton width="60%" height="14px" />
            </th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "0.75rem" }}>
                <Skeleton width="80%" height="14px" />
              </td>
              <td style={{ padding: "0.75rem" }}>
                <Skeleton width="90%" height="14px" />
              </td>
              <td style={{ padding: "0.75rem" }}>
                <Skeleton width="60%" height="14px" />
              </td>
              <td style={{ padding: "0.75rem" }}>
                <Skeleton width="70%" height="14px" />
              </td>
              <td style={{ padding: "0.75rem" }}>
                <Skeleton width="50%" height="14px" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTableSkeleton;
