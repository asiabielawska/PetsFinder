import { useNavigate } from "react-router-dom";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../HomePage/PhotoAndUserName/styled";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../HomePage/BottomMainMenuBar/BottomMainMenuBar";

export const Messages = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContent>
        <PhotoAndName>
          <UserImage onClick={() => navigate("/user-profile")}></UserImage>
          <UserName onClick={() => navigate("/user-profile")}>
            Nazwa uzytkownika
          </UserName>
        </PhotoAndName>
        <Heading>Wiadomości</Heading>
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
