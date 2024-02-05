import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const AddNewAnimalButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        style={{ border: "none", background: "none" }}
        onClick={() => navigate("/form")}
      >
        <AddIcon fontSize="large" />
      </button>
    </>
  );
};
