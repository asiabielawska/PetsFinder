import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    isLiked: false,
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    likePost: (state) => {
      state.isLiked = !state.isLiked;
    },
  },
});

export const selectUser = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export const selectLiked = (state: { user: { isLiked: boolean } }) =>
  state.user.isLiked;

export const { loginUser, likePost } = userSlice.actions;

export default userSlice.reducer;
