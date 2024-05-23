import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../types/post";
import spresiu from "../../assets/Spresiu.jpeg";
import burasek from "../../assets/Burasek.jpeg";
import mila from "../../assets/Mila.jpeg";
import lili from "../../assets/Lili.jpeg";

const initialState: { posts: PostType[] } = {
  posts: [
    {
      img: `${spresiu}`,
      details: {
        animal: "Kot",
        age: "2 lata",
        gender: "On",
        color: "Czarny",
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
      img: `${lili}`,
      details: {
        animal: "Pies",
        age: "3 miesiące",
        gender: "Ona",
        color: "Bezowy",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-01-12"),
        description: "Piesek pląta się po ulicy od 2 dni.",
        type: 1,
      },
      id: "Nazwa uzytkownika2",
      isLiked: false,
    },
    {
      img: `${mila}`,
      details: {
        animal: "Pies",
        age: "3 lata",
        gender: "Ona",
        color: "Brązowo-biały",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-06-05"),
        description: "Szukam pieska, wymknął się przez otwarte drzwi.",
        type: 0,
      },
      id: "Nazwa uzytkownika3",
      isLiked: false,
    },
    {
      img: `${burasek}`,
      details: {
        animal: "Kot",
        age: "Pół roku",
        gender: "On",
        color: "Bury",
        createdBy: "Nazwa uzytkownika",
        location: "Lokalizacja",
        date: new Date("2024-05-16"),
        description:
          "Kotek od paru dni przychodzi do ogrodu, nie zgubił się komuś?",
        type: 1,
      },
      id: "Nazwa uzytkownika4",
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

export const selectDescendingPosts = (state: {
  posts: { posts: PostType[] };
}) => {
  const table = [...state.posts.posts];

  return table.sort(
    (post1, post2) =>
      post2.details.date.getTime() - post1.details.date.getTime()
  );
};
export const { likePost } = postsSlice.actions;

export default postsSlice.reducer;
