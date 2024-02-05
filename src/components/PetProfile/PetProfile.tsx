import { Category } from "../../components/HomePage/CommonCategories/styled";
import koteczek from "../../assets/kotek.webp";
import {
  Adopt,
  Contact,
  Date,
  DateAndLocation,
  Description,
  Detail,
  Liked,
  PetDetails,
  PetProfileImg,
  Message,
  ReturnButton,
} from "./styled";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../HomePage/PhotoAndUserName/styled";
import { MainContent } from "../../styled";
import SmsIcon from "@mui/icons-material/Sms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

export const PetProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <ReturnButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </ReturnButton>
      <Liked>
        <FavoriteBorderIcon />
      </Liked>
      <PetProfileImg src={koteczek} />
      <MainContent>
        <PetDetails>
          <Category>
            <div>Zwierzę</div>
            <Detail>Kot</Detail>
          </Category>
          <Category>
            <div>Wiek</div>
            <Detail>2 lata</Detail>
          </Category>
          <Category>
            <div>Płeć</div>
            <Detail>Ona</Detail>
          </Category>
          <Category>
            <div>Kolor</div>
            <Detail>Brązowy</Detail>
          </Category>
        </PetDetails>
        <PhotoAndName>
          <UserImage></UserImage>
          <UserName>Nazwa uzytkownika</UserName>
        </PhotoAndName>
        <DateAndLocation>
          <div>Lokalizacja</div>
          <Date>11.01.2024r.</Date>
        </DateAndLocation>
        <Description>
          Kotek znaleziony dnia 11.01.2024 r. przy galerii w okolicy centrum.
          Aktualnie jest zabezpieczony u mnie w domu.
        </Description>
      </MainContent>
      <Contact>
        <Message>
          <SmsIcon />
        </Message>
        <Adopt>Przygarnij</Adopt>
      </Contact>
    </>
  );
};
