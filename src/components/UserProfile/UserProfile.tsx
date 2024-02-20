import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import koteczek from "../../assets/kotek.webp";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { Heading } from "../../styled";

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
      <PhotoAndUserName />
      <Heading>Ostatnio dodane</Heading>

      {mockPets.map(({ petImg, petText: { animal, age, gender }, id }) => (
        <Announcement onClick={() => navigate("/pet-profile")} key={id}>
          <AnnouncementImg src={petImg} />
          <AnnouncementText>
            <Animal>{animal}</Animal>
            <div>{gender}</div>
            <div>{age}</div>
          </AnnouncementText>
        </Announcement>
      ))}
    </>
  );
};
