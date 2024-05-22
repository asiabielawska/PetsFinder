import { createSlice } from "@reduxjs/toolkit";
import koteczek from "../../assets/kotek.webp";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        img: `${koteczek}`,
        details: {
          animal: "Kot",
          age: "2 lata",
          gender: "Ona",
          color: "Brązowy",
          createdBy: "Nazwa uzytkownika",
          location: "Lokalizacja",
          date: "",
          description:
            "Kotek znaleziony dnia 11.01.2024 r. przy galerii w okolicy centrum. Aktualnie jest u mnie w domu.",
        },
        id: "",
        isLiked: false,
      },
    ],
  },
  reducers: {
    likePost: (state) => {
      state.posts[0].isLiked = !state.posts[0].isLiked;
    },
  },
});

export const selectLiked = (state: {
  posts: { posts: [{ isLiked: boolean }] };
}) => state.posts.posts[0].isLiked;

console.log(selectLiked);

export const { likePost } = postsSlice.actions;

export default postsSlice.reducer;
