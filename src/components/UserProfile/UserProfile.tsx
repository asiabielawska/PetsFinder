import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { Heading } from "../../styled";
import EditIcon from "@mui/icons-material/Edit";
import { Edit } from "./styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../Slices/userState/userState";
import { useEffect } from "react";
import { selectUserPosts } from "../../Slices/postsState/postsState";

export const UserProfile = () => {
  const navigate = useNavigate();
  const userLogged = useSelector(selectUser);
  const userPosts = useSelector(selectUserPosts);

  useEffect(() => {
    if (userLogged === false) {
      navigate("/login-page");
    }
  }, []);

  return (
    <>
      <PhotoAndUserName />
      <Heading>Ostatnio dodane</Heading>

      {userPosts.map(({ img, details, id }) => (
        <Announcement onClick={() => navigate("/pet-profile")} key={id}>
          <AnnouncementImg src={img} />
          <AnnouncementText>
            <Animal>{details.animal}</Animal>
            <div>{details.gender}</div>
            <div>{details.age}</div>
          </AnnouncementText>
          <Edit>
            <EditIcon />
          </Edit>
        </Announcement>
      ))}
    </>
  );
};
