import { createSlice } from "@reduxjs/toolkit";
import { users as initialUsers } from "../../data/users";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: initialUsers,
  },
  reducers: {
    updateUser(state, action) {
      const { id, updates } = action.payload;
      const index = state.list.findIndex((u) => u.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updates };
      }
    },
  },
});

export const { updateUser } = usersSlice.actions;
export default usersSlice.reducer;
