import { configureStore } from "@reduxjs/toolkit";
import userStateReducer from "../userState/userState";

export default configureStore({
  reducer: {
    user: userStateReducer,
  },
});
