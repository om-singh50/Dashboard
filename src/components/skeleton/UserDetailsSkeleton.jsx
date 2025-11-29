import Skeleton from "./Skeleton";
import Card from "../ui/Card";

function UserDetailsSkeleton() {
  return (
    <div>
      <Skeleton width="120px" height="32px" style={{ marginBottom: "1rem" }} />

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
        }}
      >
        {/* Left Card */}
        <Card>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Skeleton width="64px" height="64px" style={{ borderRadius: "999px" }} />
            <div style={{ width: "100%" }}>
              <Skeleton width="60%" height="20px" />
              <Skeleton width="40%" height="14px" style={{ marginTop: "0.4rem" }} />
              <Skeleton width="35%" height="14px" style={{ marginTop: "0.6rem" }} />
            </div>
          </div>

          <Skeleton width="50%" height="14px" style={{ marginTop: "1rem" }} />
          <Skeleton width="80%" height="38px" style={{ marginTop: "1rem" }} />
        </Card>

        {/* Right Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Card title="">
            <Skeleton width="100px" height="18px" style={{ marginBottom: "1rem" }} />
            <Skeleton width="60%" height="14px" />
            <Skeleton width="50%" height="14px" style={{ marginTop: "0.5rem" }} />
            <Skeleton width="70%" height="14px" style={{ marginTop: "0.5rem" }} />
          </Card>

          <Card>
            <Skeleton width="120px" height="18px" style={{ marginBottom: "1rem" }} />

            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                width="90%"
                height="14px"
                style={{
                  marginBottom: i === 4 ? 0 : "0.75rem",
                }}
              />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsSkeleton;
