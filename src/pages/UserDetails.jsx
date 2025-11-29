import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/common/Modal";
import UserDetailsSkeleton from "../components/skeleton/UserDetailsSkeleton";


import { selectUsers } from "../features/users/usersSelectors";
import { updateUser } from "../features/users/usersSlice";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const user = users.find((u) => u.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState(user?.name || "");
  const [editStatus, setEditStatus] = useState(user?.status || "active");
  const [error, setError] = useState("");
  const [loading] = useState(false);
  if (loading) return <UserDetailsSkeleton />;


  if (!user) {
    return (
      <div>
        <Button variant="outline" onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
          Back
        </Button>
        <p>User not found.</p>
      </div>
    );
  }

  const handleOpenModal = () => {
    setEditName(user.name);
    setEditStatus(user.status);
    setError("");
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!editName.trim()) {
      setError("Name is required.");
      return;
    }
    dispatch(updateUser({ id: user.id, updates: { name: editName.trim(), status: editStatus } }));
    setIsModalOpen(false);
  };

  // Mock activity data
  const activitySummary = {
    totalLogins: 42,
    lastLogin: "2025-11-25T15:45:00Z",
    lastAction: "Updated profile settings",
  };

  const lastActions = [
    "Logged in from Chrome on Windows",
    "Viewed Analytics dashboard",
    "Updated notification preferences",
    "Reset password",
    "Logged in from mobile device",
  ];

  return (
    <div>
      <Button variant="outline" onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        Back
      </Button>

      <div
        style={{
          display: "grid",
          gap: "1.25rem",
          gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)",
        }}
      >
        {/* Profile Card */}
        <Card>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: "64px", height: "64px", borderRadius: "999px" }}
            />

            <div>
              <h1 style={{ margin: 0 }}>{user.name}</h1>
              <p style={{ margin: "0.25rem 0", color: "var(--text-muted)" }}>{user.email}</p>

              <Badge color={user.status === "active" ? "success" : "danger"}>
                {user.status}
              </Badge>
            </div>
          </div>

          <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            <strong style={{ color: "var(--text-muted)" }}>Member since:</strong>
            <div>{new Date(user.createdAt).toLocaleString()}</div>
          </div>

          <Button onClick={handleOpenModal} style={{ marginTop: "1.2rem" }}>
            Edit User
          </Button>
        </Card>

        {/* Right Side — Activity Summary + Last Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Card title="Activity Summary">
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.9rem" }}>
              <div>
                <div style={{ color: "var(--text-muted)" }}>Total logins</div>
                <strong>{activitySummary.totalLogins}</strong>
              </div>
              <div>
                <div style={{ color: "var(--text-muted)" }}>Last login</div>
                <strong>{new Date(activitySummary.lastLogin).toLocaleString()}</strong>
              </div>
              <div>
                <div style={{ color: "var(--text-muted)" }}>Last action</div>
                <strong>{activitySummary.lastAction}</strong>
              </div>
            </div>
          </Card>

          <Card title="Last 5 Actions">
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {lastActions.map((action, i) => (
                <li
                  key={i}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: i === lastActions.length - 1 ? "none" : "1px solid var(--border)",
                  }}
                >
                  {action}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit User"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label>Name</label>
            <Input value={editName} onChange={(e) => setEditName(e.target.value)} />
          </div>

          <div>
            <label>Status</label>
            <Select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </div>

          {error && <p style={{ color: "var(--danger)" }}>{error}</p>}
        </div>
      </Modal>
    </div>
  );
}

export default UserDetails;
