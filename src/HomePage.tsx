import { AddNewAnimalButton } from "./components/HomePage/AddNewAnimalButton/AddNewAnimalButton";
import { BottomMainMenuBar } from "./components/HomePage/BottomMainMenuBar/BottomMainMenuBar";
import { MainCommonCategories } from "./components/HomePage/CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./components/HomePage/LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "./components/HomePage/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./components/HomePage/SearchEngine/SearchEngine";

import { Heading, MainContent, UserAndAddButton } from "./styled";

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
