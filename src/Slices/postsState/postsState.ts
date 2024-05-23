import { createSlice } from "@reduxjs/toolkit";
import koteczek from "../../assets/kotek.webp";
import { PostType } from "../../types/post";

const initialState: { posts: PostType[] } = {
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
        date: new Date("2023-12-11"),
        description:
          "Kotek znaleziony dnia 11.12.2023r. przy galerii w okolicy centrum. Aktualnie jest u mnie w domu.",
        type: 1,
      },
      id: "Nazwa uzytkownika1",
      isLiked: false,
    },
    {
      img: `${koteczek}`,
      details: {
        animal: "Pies",
        age: "10 lat",
        gender: "On",
        color: "Czarno-biały",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-01-12"),
        description: "Piesek pląta się po ulicy od 2 dni.",
        type: 1,
      },
      id: "Nazwa uzytkownika1",
      isLiked: false,
    },
    {
      img: `${koteczek}`,
      details: {
        animal: "Pies",
        age: "Pół roku",
        gender: "Ona",
        color: "Czarny",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-06-05"),
        description: "Szukam pieska, wymknął się przez otwarte drzwi.",
        type: 0,
      },
      id: "Nazwa uzytkownika1",
      isLiked: false,
    },
    {
      img: `${koteczek}`,
      details: {
        animal: "Kot",
        age: "5 lat",
        gender: "On",
        color: "Rudy",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-05-16"),
        description:
          "Kotek od paru dni przychodzi do ogrodu, nie zgubił się komuś?",
        type: 1,
      },
      id: "Nazwa uzytkownika1",
      isLiked: false,
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state) => {
      state.posts[0].isLiked = !state.posts[0].isLiked;
    },
  },
});

export const selectPost = (state: { posts: { posts: PostType[] } }) =>
  state.posts.posts[0];

export const { likePost } = postsSlice.actions;

export default postsSlice.reducer;
