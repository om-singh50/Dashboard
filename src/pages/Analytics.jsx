import { useSelector } from "react-redux";
import Card from "../components/ui/Card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import { selectUsers } from "../features/users/usersSelectors";

function getLast7DaysData(users) {
  const days = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);

    const label = d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });

    const count = users.filter((u) => {
      const created = new Date(u.createdAt);
      return (
        created.getFullYear() === d.getFullYear() &&
        created.getMonth() === d.getMonth() &&
        created.getDate() === d.getDate()
      );
    }).length;

    days.push({ date: label, signups: count });
  }

  return days;
}

function getActiveInactiveData(users) {
  return [
    { name: "Active", value: users.filter((u) => u.status === "active").length },
    { name: "Inactive", value: users.filter((u) => u.status === "inactive").length },
  ];
}

const pieColors = ["#22c55e", "#ef4444"];

// Custom tooltip respecting theme
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        padding: "0.5rem 0.75rem",
        borderRadius: "0.5rem",
        fontSize: "0.8rem",
      }}
    >
      <div style={{ marginBottom: "0.25rem", color: "var(--text-muted)" }}>{label}</div>
      {payload.map((item, i) => (
        <div key={i}>
          {item.name}: <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

function Analytics() {
  const users = useSelector(selectUsers);
  const trendData = getLast7DaysData(users);
  const statusData = getActiveInactiveData(users);

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Analytics</h1>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
        }}
      >
        {/* Signup Trend Chart */}
        <Card title="User Signup Trend (Last 7 Days)" style={{ minHeight: "280px" }}>
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={trendData}>
              {/* Background grid */}
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

              {/* Axes */}
              <XAxis dataKey="date" stroke="var(--text-muted)" />
              <YAxis stroke="var(--text-muted)" allowDecimals={false} />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="signupGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              {/* Tooltip */}
              <Tooltip content={<CustomTooltip />} />

              {/* Line with gradient area */}
              <Line
                type="monotone"
                dataKey="signups"
                name="Signups"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{ r: 4, strokeWidth: 2, stroke: "#1d4ed8", fill: "#3b82f6" }}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
              />
              {/* “Fake” area using strokeOpacity=0 + fill */}
              <Line
                type="monotone"
                dataKey="signups"
                stroke="transparent"
                fill="url(#signupGradient)"
                strokeWidth={0}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Active vs Inactive */}
        <Card title="Active vs Inactive Users" style={{ minHeight: "280px" }}>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                innerRadius={40}
                paddingAngle={3}
                label={({ name, value }) => `${name} (${value})`}
                isAnimationActive={true}
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={24}
                wrapperStyle={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

export default Analytics;
