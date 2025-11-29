import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useMemo } from "react";

import Table from "../components/ui/Table";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

import {
  setSearch,
  setStatus,
  setSortBy,
  setSortOrder,
  setPage,
} from "../features/filters/filtersSlice";

function UsersList() {
  const dispatch = useDispatch();

  const { search, status, sortBy, sortOrder, page, limit } = useSelector(
    (state) => state.filters
  );

  const users = useSelector((state) => state.users.list);

  // ⭐ Debounced value — triggers filtering only when user stops typing
  const debouncedSearch = useDebounce(search, 350);

  // ⭐ MASTER FILTERING + SORTING + PAGINATION LOGIC
  const { paginatedUsers, totalPages } = useMemo(() => {
    let result = [...users];

    // 1️⃣ Search
    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      );
    }

    // 2️⃣ Status filter
    if (status !== "all") {
      result = result.filter((u) => u.status === status);
    }

    // 3️⃣ Sorting
    result.sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      const da = new Date(a.createdAt);
      const db = new Date(b.createdAt);
      return sortOrder === "asc" ? da - db : db - da;
    });

    // 4️⃣ Pagination
    const totalPages = Math.max(1, Math.ceil(result.length / limit));
    const start = (page - 1) * limit;
    const paginatedUsers = result.slice(start, start + limit);

    return { paginatedUsers, totalPages };
  }, [users, debouncedSearch, status, sortBy, sortOrder, page, limit]);

  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Users</h1>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          style={{ minWidth: "220px" }}
        />

        <Select
          value={status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>

        <Select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="createdAt">Created Date</option>
          <option value="name">Name</option>
        </Select>

        <Select
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </Select>
      </div>

      {/* Table */}
      <Table
        columns={["User", "Email", "Status", "Created", "Actions"]}
        data={paginatedUsers}
        renderRow={(user) => (
          <tr key={user.id} style={{ borderBottom: "1px solid var(--border)" }}>
            <td style={{ padding: "0.75rem", display: "flex", gap: "0.75rem" }}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{ width: 32, height: 32, borderRadius: "999px" }}
              />
              <div>{user.name}</div>
            </td>

            <td style={{ padding: "0.75rem" }}>{user.email}</td>

            <td style={{ padding: "0.75rem" }}>
              <Badge color={user.status === "active" ? "success" : "danger"}>
                {user.status}
              </Badge>
            </td>

            <td style={{ padding: "0.75rem" }}>
              {new Date(user.createdAt).toLocaleDateString()}
            </td>

            <td style={{ padding: "0.75rem" }}>
              <Link
                to={`/users/${user.id}`}
                style={{
                  padding: "0.35rem 0.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--primary)",
                  backgroundColor: "var(--primary)",
                  color: "var(--primaryText)",
                  textDecoration: "none",
                }}
              >
                View
              </Link>
            </td>
          </tr>
        )}
      />

      {/* Pagination */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => dispatch(setPage(page - 1))}
        >
          Prev
        </Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => dispatch(setPage(page + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default UsersList;
