import dayjs from "dayjs";

export enum PostsTypes {
  "Zgubiono" = "Zgubiono",
  "Znaleziono" = "Znaleziono",
  "Oddam" = "Oddam",
  "Szukam" = "Szukam",
}

export type PostType = {
  img: string;
  details: {
    animal: string;
    age: string;
    gender: string;
    color: string;
    createdBy: string;
    location: string;
    date: dayjs.Dayjs;
    description: string;
    type: PostsTypes;
  };
  id: string;
  isLiked: boolean;
};
