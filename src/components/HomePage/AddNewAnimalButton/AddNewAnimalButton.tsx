import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { AddAnimalButton } from "./styled";

export const AddNewAnimalButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <AddAnimalButton onClick={() => navigate("/form")}>
        <AddIcon fontSize="large" />
      </AddAnimalButton>
    </>
  );
};
