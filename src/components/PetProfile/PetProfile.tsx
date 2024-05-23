import { Category } from "../../components/HomePage/CommonCategories/styled";
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
import { likePost, selectPost } from "../../Slices/postsState/postsState";

export const PetProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  return (
    <>
      <ReturnButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </ReturnButton>
      <Liked onClick={() => dispatch(likePost())} isPetLiked={post.isLiked}>
        <FavoriteIcon />
      </Liked>
      <PetProfileImg src={post.img} />
      <MainContent>
        <PetDetails>
          <Category>
            <div>Zwierzę</div>
            <Detail>{post.details.animal}</Detail>
          </Category>
          <Category>
            <div>Wiek</div>
            <Detail>{post.details.age}</Detail>
          </Category>
          <Category>
            <div>Płeć</div>
            <Detail>{post.details.gender}</Detail>
          </Category>
          <Category>
            <div>Kolor</div>
            <Detail>{post.details.color}</Detail>
          </Category>
        </PetDetails>
        <PhotoAndName>
          <UserImage></UserImage>
          <UserName>{post.details.createdBy}</UserName>
        </PhotoAndName>
        <DateAndLocation>
          <div>{post.details.location}</div>
          <Date>{post.details.date}</Date>
        </DateAndLocation>
        <Description>{post.details.description}</Description>
      </MainContent>
      <Contact>
        <Adopt>Napisz wiadomość</Adopt>
      </Contact>
    </>
  );
};
