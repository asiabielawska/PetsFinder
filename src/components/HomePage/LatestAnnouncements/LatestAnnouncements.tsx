import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDescendingPosts } from "../../../Slices/postsState/postsState";

export const LatestAnnouncements = () => {
  const navigate = useNavigate();
  const posts = useSelector(selectDescendingPosts);
  return (
    <>
      {posts.map((post) => (
        <Announcement onClick={() => navigate("/pet-profile")} key={post.id}>
          <AnnouncementImg src={post.img} />
          <AnnouncementText>
            <Animal>{post.details.animal}</Animal>
            <div>{post.details.gender}</div>
            <div>{post.details.age}</div>
          </AnnouncementText>
        </Announcement>
      ))}
    </>
  );
};
