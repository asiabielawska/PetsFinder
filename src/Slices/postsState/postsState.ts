import { createSlice } from "@reduxjs/toolkit";
import { PostType, PostsTypes } from "../../types/post";
import spresiu from "../../assets/Spresiu.jpeg";
import burasek from "../../assets/Burasek.jpeg";
import mila from "../../assets/Mila.jpeg";
import lili from "../../assets/Lili.jpeg";
import dayjs from "dayjs";

const initialState: { posts: PostType[] } = {
  posts: [
    {
      img: `${spresiu}`,
      details: {
        animal: "Kot",
        age: "2 lata",
        gender: "On",
        color: "Czarny",
        createdBy: "JanKowalski",
        location: "Lokalizacja",
        date: dayjs("2023-12-11").valueOf(),
        description:
          "Kotek znaleziony dnia 11.12.2023r. przy galerii w okolicy centrum. Aktualnie jest u mnie w domu.",
        type: PostsTypes.Znaleziono,
      },
      id: "111",
      isLiked: false,
    },
    {
      img: `${lili}`,
      details: {
        animal: "Pies",
        age: "3 miesiące",
        gender: "Ona",
        color: "Bezowy",
        createdBy: "AlinaNowak",
        location: "Lokalizacja",
        date: dayjs("2024-01-12").valueOf(),
        description: "Piesek pląta się po ulicy od 2 dni.",
        type: PostsTypes.Znaleziono,
      },
      id: "222",
      isLiked: false,
    },
    {
      img: `${mila}`,
      details: {
        animal: "Pies",
        age: "3 lata",
        gender: "Ona",
        color: "Brązowo-biały",
        createdBy: "PaulinaKowalska",
        location: "Lokalizacja",
        date: dayjs("2024-05-27").valueOf(),
        description: "Szukam pieska, wymknął się przez otwarte drzwi.",
        type: PostsTypes.Zgubiono,
      },
      id: "333",
      isLiked: false,
    },
    {
      img: `${burasek}`,
      details: {
        animal: "Kot",
        age: "Pół roku",
        gender: "On",
        color: "Bury",
        createdBy: "WłodekNowak",
        location: "Lokalizacja",
        date: dayjs("2024-05-16").valueOf(),
        description:
          "Kotek od paru dni przychodzi do ogrodu, nie zgubił się komuś?",
        type: PostsTypes.Znaleziono,
      },
      id: "444",
      isLiked: false,
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state, action) => {
      state.posts.forEach((post) => {
        if (post.id === action.payload) {
          post.isLiked = !post.isLiked;
        }
      });
    },
    addNewAnnoucement: (state, action: { payload: PostType }) => {
      state.posts.push(action.payload);
    },
    editAnnoucement: (state, action: { payload: PostType }) => {
      const post = state.posts.find((post) => post.id === action.payload.id);
      if (post) {
        post.details = action.payload.details;
        post.img = action.payload.img;
        post.isLiked = action.payload.isLiked;
      }
    },
  },
});

export const selectPost = (state: { posts: { posts: PostType[] } }) =>
  state.posts.posts;

export const selectDescendingPosts = (state: {
  posts: { posts: PostType[] };
}) => {
  const table = [...state.posts.posts];
  return table.sort((post1, post2) => post2.details.date - post1.details.date);
};

export const selectUserPosts = (state: {
  posts: { posts: PostType[] };
  user: { userId: string };
}) => {
  return state.posts.posts.filter(
    (post) => post.details.createdBy === state.user.userId
  );
};

export const selectLikedPosts = (state: { posts: { posts: PostType[] } }) => {
  return state.posts.posts.filter((post) => post.isLiked);
};

export const { likePost, addNewAnnoucement, editAnnoucement } =
  postsSlice.actions;

export default postsSlice.reducer;
