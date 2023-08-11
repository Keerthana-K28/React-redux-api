import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/userSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
