import Skeleton from "./Skeleton";
import Card from "../ui/Card";

function AnalyticsSkeleton() {
  return (
    <div>
      <Skeleton width="160px" height="32px" style={{ marginBottom: "1rem" }} />

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
        }}
      >
        <Card>
          <Skeleton width="60%" height="20px" style={{ marginBottom: "1rem" }} />
          <Skeleton width="100%" height="220px" />
        </Card>

        <Card>
          <Skeleton width="50%" height="20px" style={{ marginBottom: "1rem" }} />
          <Skeleton
            width="160px"
            height="160px"
            style={{ borderRadius: "1000px", margin: "0 auto" }}
          />
        </Card>
      </div>
    </div>
  );
}

export default AnalyticsSkeleton;
