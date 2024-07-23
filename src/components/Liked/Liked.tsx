import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import { Heading } from "../../styled";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { useSelector } from "react-redux";
import { selectLikedPosts } from "../../Slices/postsState/postsState";
import { useAuth } from "../../hooks/useAuth";

export const Liked = () => {
  const navigate = useNavigate();
  useAuth();
  const likedPosts = useSelector(selectLikedPosts);

  return (
    <>
      <PhotoAndUserName />
      <Heading>Twoje polubienia</Heading>
      {likedPosts.map(({ img, details, id }) => (
        <Announcement
          onClick={() => navigate(`/pet-profile?postId=${id}`)}
          key={id}
        >
          <AnnouncementImg src={img} />
          <AnnouncementText>
            <Animal>{details.animal}</Animal>
            <div>{details.gender}</div>
            <div>{details.age}</div>
          </AnnouncementText>
        </Announcement>
      ))}
    </>
  );
};
