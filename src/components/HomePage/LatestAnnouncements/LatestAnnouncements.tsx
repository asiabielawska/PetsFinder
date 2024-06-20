import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDescendingPosts } from "../../../Slices/postsState/postsState";

type Props = {
  filterValue: string;
};

export const LatestAnnouncements = ({ filterValue }: Props) => {
  const navigate = useNavigate();
  const posts = useSelector(selectDescendingPosts);
  const filteredPosts = posts.filter(
    (post) => post.details.animal === filterValue || filterValue === ""
  );
  return (
    <>
      {filteredPosts.map((post) => (
        <Announcement
          onClick={() => navigate(`/pet-profile?postId=${post.id}`)}
          key={post.id}
        >
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
