import { useNavigate } from "react-router-dom";
import { PhotoAndName, UserImage, UserName } from "./styled";

export const PhotoAndUserName = () => {
  const navigate = useNavigate();
  return (
    <>
      <PhotoAndName>
        <UserImage onClick={() => navigate("user-profile")}></UserImage>
        <UserName onClick={() => navigate("user-profile")}>
          Nazwa uzytkownika
        </UserName>
      </PhotoAndName>
    </>
  );
};
