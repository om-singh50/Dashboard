import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.list;
export const selectFilters = (state) => state.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, filters) => {
    let list = [...users];
    const { search, status, sortBy, sortOrder } = filters;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      );
    }

    // Status filter
    if (status !== "all") {
      list = list.filter((u) => u.status === status);
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      const da = new Date(a.createdAt);
      const db = new Date(b.createdAt);
      return sortOrder === "asc" ? da - db : db - da;
    });

    return list;
  }
);

export const selectPaginatedUsers = createSelector(
  [selectFilteredUsers, selectFilters],
  (filtered, { page, limit }) => {
    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }
);

export const selectTotalPages = createSelector(
  [selectFilteredUsers, selectFilters],
  (filtered, { limit }) => Math.max(1, Math.ceil(filtered.length / limit))
);
