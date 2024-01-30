import { Announcement, AnnouncementImg, AnnouncementText } from "./styled";
import koteczek from "../../../assets/kotek.webp";
import { useNavigate } from "react-router-dom";

const mockPets = [
  { petImg: koteczek, petText: "treść", id: 1 },
  { petImg: koteczek, petText: "treść", id: 2 },
  { petImg: koteczek, petText: "treść", id: 3 },
];

export const LatestAnnouncements = () => {
  const navigate = useNavigate();
  return (
    <>
      {mockPets.map(({ petImg, petText, id }) => (
        <Announcement onClick={() => navigate("/pet-profile")} key={id}>
          <AnnouncementImg src={petImg} />
          <AnnouncementText>{petText}</AnnouncementText>
        </Announcement>
      ))}
    </>
  );
};
