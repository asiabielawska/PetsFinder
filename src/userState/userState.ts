import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const selectUser = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
