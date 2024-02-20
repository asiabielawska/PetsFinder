import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import koteczek from "../../assets/kotek.webp";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../common/BottomMainMenuBar/BottomMainMenuBar";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";

const mockPets = [
  {
    petImg: koteczek,
    petText: { animal: "Kotek", age: "2 lata", gender: "Ona" },
    id: 1,
  },
  {
    petImg: koteczek,
    petText: { animal: "Kotek", age: "5 lat", gender: "On" },
    id: 2,
  },
  {
    petImg: koteczek,
    petText: { animal: "Kotek", age: "3 miesiące", gender: "Ona" },
    id: 3,
  },
  {
    petImg: koteczek,
    petText: { animal: "Kotek", age: "tydzień", gender: "Ona" },
    id: 4,
  },
];

export const Liked = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContent>
        <PhotoAndUserName />
        <Heading>Twoje polubienia</Heading>
        {mockPets.map(({ petImg, petText, id }) => (
          <Announcement onClick={() => navigate("/pet-profile")} key={id}>
            <AnnouncementImg src={petImg} />
            <AnnouncementText>
              <Animal>{petText.animal}</Animal>
              <div>{petText.gender}</div>
              <div>{petText.age}</div>
            </AnnouncementText>
          </Announcement>
        ))}
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
