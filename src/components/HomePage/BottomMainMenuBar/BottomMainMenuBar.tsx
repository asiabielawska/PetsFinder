import { BottomMenuBar, Option } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DividerComponent } from "../Divider";
import { useNavigate } from "react-router-dom";

export const BottomMainMenuBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <BottomMenuBar>
        <Option onClick={() => navigate("/")}>
          <HomeIcon fontSize="large" />
          Strona główna
        </Option>
        <DividerComponent />
        <Option>
          <EmailIcon fontSize="large" />
          Wiadomości
        </Option>
        <DividerComponent />
        <Option>
          <FavoriteIcon fontSize="large" />
          Polubienia
        </Option>
        <DividerComponent />
        <Option onClick={() => navigate("user-profile")}>
          <AccountCircleIcon fontSize="large" />
          Profil
        </Option>
      </BottomMenuBar>
    </>
  );
};
