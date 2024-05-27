import { useNavigate } from "react-router-dom";
import { PhotoAndName, UserImage, UserName } from "./styled";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../Slices/userState/userState";

export const PhotoAndUserName = () => {
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  return (
    <>
      <PhotoAndName>
        <UserImage onClick={() => navigate("/user-profile")}></UserImage>
        <UserName onClick={() => navigate("/user-profile")}>{userId}</UserName>
      </PhotoAndName>
    </>
  );
};
