import {
  Category,
  CategoryButton,
  CommonCategories,
  LostFindButtons,
} from "./styled";
import PetsIcon from "@mui/icons-material/Pets";
import BlockIcon from "@mui/icons-material/Block";

export const MainCommonCategories = () => {
  return (
    <>
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
    </>
  );
};
