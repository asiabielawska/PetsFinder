import { AddNewAnimalButton } from "./components/Main/AddNewAnimalButton/AddNewAnimalButton";
import { BottomMainMenuBar } from "./components/Main/BottomMainMenuBar/BottomMainMenuBar";
import { PhotoAndUserName } from "./components/Main/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./components/Main/SearchEngine/SearchEngine";
import { MainContent } from "./styled";

function App() {
  return (
    <>
      <MainContent>
        <div style={{ display: "flex" }}>
          <PhotoAndUserName />
          <AddNewAnimalButton />
        </div>
        <SearchEngine />
        <div
          style={{
            marginTop: 20,
            color: "#5E503F",
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          Najczęstsze kategorie
        </div>
      </MainContent>

      <BottomMainMenuBar />
    </>
  );
}

export default App;
