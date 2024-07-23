import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { AddAnimalButton } from "./styled";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../Slices/userState/userState";
export const AddNewAnimalButton = () => {
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);
  if (!userId) return null;
  return (
    <>
      <AddAnimalButton onClick={() => navigate("/form")}>
        <AddIcon fontSize="large" />
      </AddAnimalButton>
    </>
  );
};
