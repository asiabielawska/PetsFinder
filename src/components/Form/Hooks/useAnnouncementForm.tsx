import { useState } from "react";
import { PostType, PostsTypes } from "../../../types/post";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../Slices/userState/userState";

export const useAnnouncementForm = () => {
  const userId = useSelector(selectUserId);
  const [newAnnouncement, setNewAnnouncement] = useState<PostType>({
    img: ``,
    details: {
      animal: "",
      age: "",
      gender: "",
      color: "",
      createdBy: userId,
      location: "",
      date: dayjs().valueOf(),
      description: "",
      type: PostsTypes.Szukam,
    },
    id: Date.now().toString(),
    isLiked: false,
  });
  return [newAnnouncement, setNewAnnouncement] as const;
};
