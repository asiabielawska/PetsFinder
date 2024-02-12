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

export const MainCommonCategories = () => {
  return (
    <>
      <CommonCategories>
        <Category>
          <CategoryButton>
            <FontAwesomeIcon icon={faCat} />
          </CategoryButton>
          <div>Kotki</div>
        </Category>
        <Category>
          <CategoryButton>
            <FontAwesomeIcon icon={faDog} />
          </CategoryButton>
          <div>Pieski</div>
        </Category>
        <Category>
          <CategoryButton>
            <FontAwesomeIcon icon={faPaw} />
          </CategoryButton>
          <div>Inne</div>
        </Category>
        <Category>
          <CategoryButton>
            <FontAwesomeIcon icon={faBan} />
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
