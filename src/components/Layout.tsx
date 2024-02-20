import { MainContent } from "../styled";
import { BottomMainMenuBar } from "./common/BottomMainMenuBar/BottomMainMenuBar";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <MainContent>{props.children}</MainContent>
      <BottomMainMenuBar />
    </>
  );
};
