import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
    userName: "",
  },
  reducers: {
    loginUser: (state, action) => {
      const { userName, id } = action.payload;
      state.userName = userName;
      state.userId = id;
    },
    logOutUser: (state) => {
      state.userName = "";
      state.userId = "";
    },
  },
});

export const selectUserName = (state: { user: { userName: string } }) =>
  state.user.userName;

export const selectUserId = (state: { user: { userId: string } }) =>
  state.user.userId;

export const { loginUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
