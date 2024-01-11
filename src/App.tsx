import { BottomMainMenuBar } from "./components/Main/BottomMainMenuBar/BottomMainMenuBar";
import { PhotoAndUserName } from "./components/Main/PhotoAndUserName/PhotoAndUserName";
import { SearchEngine } from "./components/Main/SearchEngine/SearchEngine";

function App() {
  return (
    <>
      <PhotoAndUserName />
      <SearchEngine />
      <BottomMainMenuBar />
    </>
  );
}

export default App;
