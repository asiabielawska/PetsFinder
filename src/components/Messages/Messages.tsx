import { useNavigate } from "react-router-dom";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../HomePage/PhotoAndUserName/styled";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../HomePage/BottomMainMenuBar/BottomMainMenuBar";
import { Content, Message, NameAndContent } from "./styled";

const mockMessages = [
  {
    userName: "Nazwa uzytkownika1",
    content: "Jestem zainteresowana przygarnięciem kotka",
  },
  {
    userName: "Nazwa uzytkownika2",
    content: "Proszę o informację ile kotek ma lat",
  },
  {
    userName: "Nazwa uzytkownika3",
    content: "Jestem zainteresowana przygarnięciem pieska",
  },
];

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
        {mockMessages.map(({ userName, content }) => (
          <Message key={userName}>
            <UserImage></UserImage>
            <NameAndContent>
              <UserName>{userName}</UserName>
              <Content>{content}</Content>
            </NameAndContent>
          </Message>
        ))}
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
