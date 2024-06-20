import {
  Category,
  CategoryButton,
  CommonCategories,
  LostFindButtons,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const MainCommonCategories = ({ setFilter }: Props) => {
  return (
    <>
      <CommonCategories>
        <Category>
          <CategoryButton onClick={() => setFilter("Kotek")}>
            <FontAwesomeIcon icon={faCat} />
          </CategoryButton>
          <div>Kotki</div>
        </Category>
        <Category>
          <CategoryButton onClick={() => setFilter("Piesek")}>
            <FontAwesomeIcon icon={faDog} />
          </CategoryButton>
          <div>Pieski</div>
        </Category>
        <Category>
          <CategoryButton onClick={() => setFilter("Inne")}>
            <FontAwesomeIcon icon={faPaw} />
          </CategoryButton>
          <div>Inne</div>
        </Category>
        <Category>
          <CategoryButton onClick={() => setFilter("")}>
            <FontAwesomeIcon icon={faBan} />
          </CategoryButton>
        </Category>
      </CommonCategories>
      <div style={{ paddingTop: 10 }}>
        <LostFindButtons>Zgubione</LostFindButtons>
        <LostFindButtons>Znalezione</LostFindButtons>
        <LostFindButtons>Oddam</LostFindButtons>
        <LostFindButtons>Szukam</LostFindButtons>
      </div>
    </>
  );
};
