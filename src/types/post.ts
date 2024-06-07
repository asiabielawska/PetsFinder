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
    userName: string;
    location: string;
    date: number;
    description: string;
    type: PostsTypes;
  };
  id: string;
  isLiked: boolean;
};
