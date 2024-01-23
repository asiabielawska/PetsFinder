import { useNavigate } from "react-router-dom";
import {
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import koteczek from "../../assets/kotek.webp";
import { PhotoAndUserName } from "../HomePage/PhotoAndUserName/PhotoAndUserName";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../HomePage/BottomMainMenuBar/BottomMainMenuBar";

const mockPets = [
  { petImg: koteczek, petText: "treść", id: 1 },
  { petImg: koteczek, petText: "treść", id: 2 },
  { petImg: koteczek, petText: "treść", id: 3 },
];

export const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContent>
        <PhotoAndUserName />
        <Heading>Ostatnio dodane</Heading>
        {mockPets.map(({ petImg, petText, id }) => (
          <Announcement onClick={() => navigate("/pet-profile")} key={id}>
            <AnnouncementImg src={petImg} />
            <AnnouncementText>{petText}</AnnouncementText>
          </Announcement>
        ))}
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
