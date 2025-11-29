import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import filtersReducer from "../features/filters/filtersSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});
