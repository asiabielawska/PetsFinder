import { useNavigate } from "react-router-dom";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../common/PhotoAndUserName/styled";
import { Heading } from "../../styled";
import { Content, Message, NameAndContent } from "./styled";
import { useSelector } from "react-redux";
import { selectUserName } from "../../Slices/userState/userState";

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
  const userName = useSelector(selectUserName);
  return (
    <>
      <PhotoAndName>
        <UserImage onClick={() => navigate("/user-profile")}></UserImage>
        <UserName onClick={() => navigate("/user-profile")}>
          {userName}
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
    </>
  );
};
