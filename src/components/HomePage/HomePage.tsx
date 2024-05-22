import { AddNewAnimalButton } from "./AddNewAnimalButton/AddNewAnimalButton";
import { MainCommonCategories } from "./CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./SearchEngine/SearchEngine";

import { Heading, UserAndAddButton } from "../../styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../Slices/userState/userState";

export const HomePage = () => {
  const userLogged = useSelector(selectUser);
  return (
    <>
      {userLogged && (
        <UserAndAddButton>
          <PhotoAndUserName />
          <AddNewAnimalButton />
        </UserAndAddButton>
      )}
      <SearchEngine />
      <Heading>Najczęstsze kategorie</Heading>
      <MainCommonCategories />
      <Heading>Najnowsze ogłoszenia</Heading>
      <LatestAnnouncements />
    </>
  );
};
