import { BottomMenuBar, Option } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const BottomMainMenuBar = () => {
  return (
    <>
      <BottomMenuBar>
        <Option>
          <HomeIcon fontSize="large" />
          Strona główna
        </Option>
        <Option>
          <EmailIcon fontSize="large" />
          Wiadomości
        </Option>
        <Option>
          <FavoriteIcon fontSize="large" />
          Polubienia
        </Option>
        <Option>
          <AccountCircleIcon fontSize="large" />
          Profil
        </Option>
      </BottomMenuBar>
    </>
  );
};
