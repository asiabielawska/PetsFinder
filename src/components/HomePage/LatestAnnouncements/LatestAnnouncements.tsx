import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "./styled";
import koteczek from "../../../assets/kotek.webp";
import { useNavigate } from "react-router-dom";

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

export const LatestAnnouncements = () => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};
