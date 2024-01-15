import { AddNewAnimalButton } from "./components/Main/AddNewAnimalButton/AddNewAnimalButton";
import { BottomMainMenuBar } from "./components/Main/BottomMainMenuBar/BottomMainMenuBar";
import { MainCommonCategories } from "./components/Main/CommonCategories/MainCommonCategories";
import { LatestAnnouncements } from "./components/Main/LatestAnnouncements/LatestAnnouncements";
import { PhotoAndUserName } from "./components/Main/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./components/Main/SearchEngine/SearchEngine";

import { Heading, MainContent, UserAndAddButton } from "./styled";

function App() {
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
}

export default App;
