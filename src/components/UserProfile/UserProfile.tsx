import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import koteczek from "../../assets/kotek.webp";
import { PhotoAndUserName } from "../HomePage/PhotoAndUserName/PhotoAndUserName";
import { Heading, MainContent } from "../../styled";
import { BottomMainMenuBar } from "../HomePage/BottomMainMenuBar/BottomMainMenuBar";

const mockPets = [
  {
    petImg: koteczek,
    petText: { animal: "Kotek", age: "2 lata", gender: "Ona" },
    id: 1,
  },
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
