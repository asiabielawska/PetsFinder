import { configureStore } from "@reduxjs/toolkit";
import userStateReducer from "../Slices/userState/userState";
import postsStateReducer from "../Slices/postsState/postsState";

export default configureStore({
  reducer: {
    user: userStateReducer,
    posts: postsStateReducer,
  },
});
