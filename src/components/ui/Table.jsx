function Table({ columns, data, renderRow }) {
  return (
    <div
      style={{
        borderRadius: "0.75rem",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "var(--tableHead)" }}>
          <tr>
            {columns.map((col, i) => (
              <th key={i} style={{ padding: "0.75rem", textAlign: "left" }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => renderRow(row, i))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                style={{ padding: "1rem", textAlign: "center" }}
              >
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
