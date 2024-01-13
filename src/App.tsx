import { AddNewAnimalButton } from "./components/Main/AddNewAnimalButton/AddNewAnimalButton";
import { BottomMainMenuBar } from "./components/Main/BottomMainMenuBar/BottomMainMenuBar";
import { PhotoAndUserName } from "./components/Main/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./components/Main/SearchEngine/SearchEngine";
import PetsIcon from "@mui/icons-material/Pets";
import BlockIcon from "@mui/icons-material/Block";
import {
  Category,
  CategoryButton,
  CommonCategories,
  Heading,
  LostFindButtons,
  MainContent,
} from "./styled";

function App() {
  return (
    <>
      <MainContent>
        <div style={{ display: "flex" }}>
          <PhotoAndUserName />
          <AddNewAnimalButton />
        </div>
        <SearchEngine />
        <Heading>Najczęstsze kategorie</Heading>
        <CommonCategories>
          <Category>
            <CategoryButton>
              <PetsIcon />
            </CategoryButton>
            <div>Kotki</div>
          </Category>
          <Category>
            <CategoryButton>
              <PetsIcon />
            </CategoryButton>
            <div>Pieski</div>
          </Category>
          <Category>
            <CategoryButton>
              <PetsIcon />
            </CategoryButton>
            <div>Inne</div>
          </Category>
          <Category>
            <CategoryButton>
              <BlockIcon fontSize="medium" />
            </CategoryButton>
          </Category>
        </CommonCategories>
        <div style={{ paddingTop: 10 }}>
          <LostFindButtons>Zgubione</LostFindButtons>
          <LostFindButtons>Znalezione</LostFindButtons>
        </div>
        <Heading>Najnowsze ogłoszenia</Heading>
      </MainContent>

      <BottomMainMenuBar />
    </>
  );
}

export default App;
