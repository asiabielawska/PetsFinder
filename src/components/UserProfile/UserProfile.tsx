import { useNavigate } from "react-router-dom";
import {
  Animal,
  Announcement,
  AnnouncementImg,
  AnnouncementText,
} from "../HomePage/LatestAnnouncements/styled";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { Heading } from "../../styled";
import EditIcon from "@mui/icons-material/Edit";
import { Edit } from "./styled";
import { advertisementDatabase } from "../announcementDatabase";

export const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <PhotoAndUserName />
      <Heading>Ostatnio dodane</Heading>

      {advertisementDatabase.map(({ img, animal, gender, age, id }) => (
        <Announcement onClick={() => navigate("/pet-profile")} key={id}>
          <AnnouncementImg src={img} />
          <AnnouncementText>
            <Animal>{animal}</Animal>
            <div>{gender}</div>
            <div>{age}</div>
          </AnnouncementText>
          <Edit>
            <EditIcon />
          </Edit>
        </Announcement>
      ))}
    </>
  );
};
