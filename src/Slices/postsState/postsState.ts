import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        img: "",
        details: {
          animal: "",
          age: "",
          gender: "",
          color: "",
          createdBy: "",
          location: "",
          date: "",
          description: "",
        },
        id: "",
      },
    ],
  },
  reducers: {},
});

export default postsSlice.reducer;
