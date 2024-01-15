import { Announcement, AnnouncementImg, AnnouncementText } from "./styled";
import koteczek from "../../../assets/kotek.webp";

export const LatestAnnouncements = () => {
  return (
    <>
      <Announcement>
        <AnnouncementImg src={koteczek} />
        <AnnouncementText>Treść</AnnouncementText>
      </Announcement>
      <Announcement>
        <AnnouncementImg src={koteczek} />
        <AnnouncementText>Treść</AnnouncementText>
      </Announcement>
    </>
  );
};
