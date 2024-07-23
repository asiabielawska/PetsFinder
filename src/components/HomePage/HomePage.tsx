import { AddNewAnimalButton } from "./AddNewAnimalButton/AddNewAnimalButton";
import { MainCommonCategories } from "./CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./SearchEngine/SearchEngine";
import { Heading, UserAndAddButton } from "../../styled";
import { useState } from "react";

export const HomePage = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <UserAndAddButton>
        <PhotoAndUserName />
        <AddNewAnimalButton />
      </UserAndAddButton>
      <SearchEngine />
      <Heading>Najczęstsze kategorie</Heading>
      <MainCommonCategories setFilter={setFilter} />
      <Heading>Najnowsze ogłoszenia</Heading>
      <LatestAnnouncements filterValue={filter} />
    </>
  );
};
