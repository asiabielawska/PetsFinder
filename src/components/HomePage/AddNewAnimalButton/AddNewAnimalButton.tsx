import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const AddNewAnimalButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        style={{
          border: "none",
          background: "none",
          color: "rgb(166, 61, 64)",
        }}
        onClick={() => navigate("/form")}
      >
        <AddIcon fontSize="large" />
      </button>
    </>
  );
};
