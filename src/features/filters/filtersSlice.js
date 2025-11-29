import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "all",
    sortBy: "createdAt",
    sortOrder: "desc",
    page: 1,
    limit: 5,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.page = 1;
    },
    setStatus(state, action) {
      state.status = action.payload;
      state.page = 1;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const {
  setSearch,
  setStatus,
  setSortBy,
  setSortOrder,
  setPage,
  setLimit,
} = filtersSlice.actions;

export default filtersSlice.reducer;
