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

export const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContent>
        <PhotoAndUserName />
        <Heading>Ostatnio dodane</Heading>
        <Announcement onClick={() => navigate("pet-profile")}>
          <AnnouncementImg src={koteczek} />
          <AnnouncementText></AnnouncementText>
        </Announcement>
        <Announcement onClick={() => navigate("pet-profile")}>
          <AnnouncementImg src={koteczek} />
          <AnnouncementText></AnnouncementText>
        </Announcement>
        <Announcement onClick={() => navigate("pet-profile")}>
          <AnnouncementImg src={koteczek} />
          <AnnouncementText></AnnouncementText>
        </Announcement>
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
