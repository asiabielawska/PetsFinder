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
  ReturnButton,
} from "./styled";
import {
  PhotoAndName,
  UserImage,
  UserName,
} from "../common/PhotoAndUserName/styled";
import { MainContent } from "../../styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likePost, selectLiked } from "../../Slices/userState/userState";

export const PetProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLiked = useSelector(selectLiked);

  return (
    <>
      <ReturnButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </ReturnButton>
      <Liked onClick={() => dispatch(likePost())} isPetLiked={isLiked}>
        <FavoriteIcon />
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
          Aktualnie jest u mnie w domu.
        </Description>
      </MainContent>
      <Contact>
        <Adopt>Napisz wiadomość</Adopt>
      </Contact>
    </>
  );
};
