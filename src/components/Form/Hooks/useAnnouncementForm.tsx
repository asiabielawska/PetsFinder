import { useState } from "react";
import { PostType, PostsTypes } from "../../../types/post";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../Slices/userState/userState";
import { useSearchParams } from "react-router-dom";
import { selectUserPosts } from "../../../Slices/postsState/postsState";

export const useAnnouncementForm = () => {
  const [searchParams] = useSearchParams();
  const userPosts = useSelector(selectUserPosts);
  const postId = searchParams.get("postId");
  const post =
    postId === null
      ? undefined
      : userPosts.find((element) => element.id === postId);
  const userId = useSelector(selectUserId);
  const [newAnnouncement, setNewAnnouncement] = useState<PostType>({
    img: post?.img ?? ``,
    details: {
      animal: post?.details?.animal ?? "",
      age: post?.details?.age ?? "",
      gender: post?.details?.gender ?? "",
      color: post?.details?.color ?? "",
      createdBy: post?.details?.createdBy ?? userId,
      location: post?.details?.location ?? "",
      date: post?.details?.date ?? dayjs().valueOf(),
      description: post?.details?.description ?? "",
      type: post?.details?.type ?? PostsTypes.Szukam,
    },
    id: post?.id ?? Date.now().toString(),
    isLiked: post?.isLiked ?? false,
  });
  const isEdit = post !== undefined;
  return [newAnnouncement, setNewAnnouncement, isEdit] as const;
};
