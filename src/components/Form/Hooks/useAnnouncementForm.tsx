import { useState } from "react";
import { PostType, PostsTypes } from "../../../types/post";
import dayjs from "dayjs";

export const useAnnouncementForm = () => {
  const [newAnnouncement, setNewAnnouncement] = useState<PostType>({
    img: ``,
    details: {
      animal: "",
      age: "",
      gender: "",
      color: "",
      createdBy: "",
      location: "",
      date: dayjs(),
      description: "",
      type: PostsTypes.Szukam,
    },
    id: "",
    isLiked: false,
  });
  return [newAnnouncement, setNewAnnouncement] as const;
};
