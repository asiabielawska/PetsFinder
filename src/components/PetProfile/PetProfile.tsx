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
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likePost, selectPost } from "../../Slices/postsState/postsState";
import dayjs from "dayjs";
import { selectUserId } from "../../Slices/userState/userState";

export const PetProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const posts = useSelector(selectPost);
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");
  if (postId === null) {
    return "No post ID";
  }
  const post = posts.find((element) => element.id === postId);
  if (post === undefined) {
    return "This post doesn't exist";
  }

  return (
    <>
      <ReturnButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </ReturnButton>
      {userId && (
        <Liked
          onClick={() => dispatch(likePost(post.id))}
          isPetLiked={post.isLiked}
        >
          <FavoriteIcon />
        </Liked>
      )}

      <PetProfileImg src={post.img} />
      <MainContent>
        <PetDetails>
          <Category>
            <div>Typ</div>
            <Detail>{post.details.type}</Detail>
          </Category>
          <Category>
            <div>Wiek</div>
            <Detail>{post.details.age}</Detail>
          </Category>
          <Category>
            <div>Zwierzę</div>
            <Detail>{post.details.animal}</Detail>
          </Category>
          <Category>
            <div>Płeć</div>
            <Detail>{post.details.gender}</Detail>
          </Category>
        </PetDetails>
        <PhotoAndName>
          <UserImage></UserImage>
          <UserName>{post.details.userName}</UserName>
        </PhotoAndName>
        <DateAndLocation>
          <div>{post.details.location}</div>
          <Date>{dayjs(post.details.date).format("DD/MM/YYYY")}</Date>
        </DateAndLocation>
        <Description>{post.details.description}</Description>
      </MainContent>
      <Contact>
        <Adopt
          onClick={() => {
            navigate("/message");
          }}
        >
          Napisz wiadomość
        </Adopt>
      </Contact>
    </>
  );
};
