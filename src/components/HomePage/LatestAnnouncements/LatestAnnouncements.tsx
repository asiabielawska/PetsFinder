import { Announcement, AnnouncementImg, AnnouncementText } from "./styled";
import koteczek from "../../../assets/kotek.webp";
import { useNavigate } from "react-router-dom";

export const LatestAnnouncements = () => {
  const navigate = useNavigate();
  return (
    <>
      <Announcement onClick={() => navigate("pet-profile")}>
        <AnnouncementImg src={koteczek} />
        <AnnouncementText></AnnouncementText>
      </Announcement>
      <Announcement onClick={() => navigate("pet-profile")}>
        <AnnouncementImg src={koteczek} />
        <AnnouncementText></AnnouncementText>
      </Announcement>
    </>
  );
};
