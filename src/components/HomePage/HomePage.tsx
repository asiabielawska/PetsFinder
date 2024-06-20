import { AddNewAnimalButton } from "./AddNewAnimalButton/AddNewAnimalButton";
import { MainCommonCategories } from "./CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./SearchEngine/SearchEngine";
import { Heading, UserAndAddButton } from "../../styled";
import { useSelector } from "react-redux";
import { selectUser } from "../../Slices/userState/userState";
import { useState } from "react";

export const HomePage = () => {
  const userLogged = useSelector(selectUser);
  const [filter, setFilter] = useState("");

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
      <MainCommonCategories setFilter={setFilter} />
      <Heading>Najnowsze ogłoszenia</Heading>
      <LatestAnnouncements filterValue={filter} />
    </>
  );
};
