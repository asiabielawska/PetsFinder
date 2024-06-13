import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userId: 0,
    userName: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload;
      state.userId = dayjs().valueOf();
    },
    logOutUser: (state) => {
      state.isLoggedIn = false;
      state.userName = "";
      state.userId = 0;
    },
  },
});

export const selectUser = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export const selectUserName = (state: { user: { userName: string } }) =>
  state.user.userName;

export const selectUserId = (state: { user: { userId: string } }) =>
  state.user.userId;

export const { loginUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
