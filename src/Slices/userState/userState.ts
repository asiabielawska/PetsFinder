import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: true,
    userId: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
  },
});

export const selectUser = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export const selectUserId = (state: { user: { userId: string } }) =>
  state.user.userId;

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
