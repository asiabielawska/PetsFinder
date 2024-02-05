import { useNavigate } from "react-router-dom";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../HomePage/PhotoAndUserName/styled";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../HomePage/BottomMainMenuBar/BottomMainMenuBar";
import { Content, Message, NameAndContent } from "./styled";

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
        <Message>
          <UserImage></UserImage>
          <NameAndContent>
            <UserName>Nazwa uytkownika</UserName>
            <Content>Jestem zainteresowana przygarnięciem kotka</Content>
          </NameAndContent>
        </Message>
        <Message>
          <UserImage></UserImage>
          <NameAndContent>
            <UserName>Nazwa uytkownika</UserName>
            <Content>Jestem zainteresowana przygarnięciem kotka</Content>
          </NameAndContent>
        </Message>
        <Message>
          <UserImage></UserImage>
          <NameAndContent>
            <UserName>Nazwa uytkownika</UserName>
            <Content>Jestem zainteresowana przygarnięciem kotka</Content>
          </NameAndContent>
        </Message>
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
