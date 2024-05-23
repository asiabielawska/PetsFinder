import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userId: "123-456",
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
