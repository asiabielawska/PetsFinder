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
import { Edit, LogOut } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUserPosts } from "../../Slices/postsState/postsState";
import { client } from "../../supabase";
import { logOutUser } from "../../Slices/userState/userState";
import { useAuth } from "../../hooks/useAuth";

export const UserProfile = () => {
  const navigate = useNavigate();
  const userPosts = useSelector(selectUserPosts);
  const dispatch = useDispatch();

  useAuth();
  const logout = async () => {
    await client.auth.signOut();
    dispatch(logOutUser());
    navigate("/login-page");
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <PhotoAndUserName />
        <LogOut onClick={logout}>Wyloguj</LogOut>
      </div>

      <Heading>Ostatnio dodane</Heading>

      {userPosts.map(({ img, details, id }) => (
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
          <Edit
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/form?postId=${id}`);
            }}
          >
            <EditIcon />
          </Edit>
        </Announcement>
      ))}
    </>
  );
};
