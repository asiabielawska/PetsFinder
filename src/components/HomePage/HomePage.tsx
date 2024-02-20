import { AddNewAnimalButton } from "./AddNewAnimalButton/AddNewAnimalButton";
import { BottomMainMenuBar } from "../common/BottomMainMenuBar/BottomMainMenuBar";
import { MainCommonCategories } from "./CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "../common/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./SearchEngine/SearchEngine";

import { Heading, MainContent, UserAndAddButton } from "../../styled";

export const HomePage = () => {
  return (
    <>
      <MainContent>
        <UserAndAddButton>
          <PhotoAndUserName />
          <AddNewAnimalButton />
        </UserAndAddButton>
        <SearchEngine />
        <Heading>Najczęstsze kategorie</Heading>
        <MainCommonCategories />
        <Heading>Najnowsze ogłoszenia</Heading>
        <LatestAnnouncements />
      </MainContent>
      <BottomMainMenuBar />
    </>
  );
};
