import { useNavigate } from "react-router-dom";
import { PhotoAndName, UserImage, UserName } from "./styled";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../Slices/userState/userState";

export const PhotoAndUserName = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  return (
    <>
      <PhotoAndName>
        <UserImage onClick={() => navigate("/user-profile")}></UserImage>
        <UserName onClick={() => navigate("/user-profile")}>
          {userName}
        </UserName>
      </PhotoAndName>
    </>
  );
};
