import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {},
});

export const selectUser = (state: { user: { isLoggedIn: boolean } }) =>
  state.user.isLoggedIn;

export default userSlice.reducer;
