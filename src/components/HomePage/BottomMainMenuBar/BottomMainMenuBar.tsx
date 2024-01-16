import { BottomMenuBar, Option } from "./styled";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider } from "@mui/material";

export const BottomMainMenuBar = () => {
  return (
    <>
      <BottomMenuBar>
        <Option>
          <HomeIcon fontSize="large" />
          Strona główna
        </Option>
        <Divider orientation="vertical" variant="middle" />
        <Option>
          <EmailIcon fontSize="large" />
          Wiadomości
        </Option>
        <Divider orientation="vertical" variant="middle" />
        <Option>
          <FavoriteIcon fontSize="large" />
          Polubienia
        </Option>
        <Divider orientation="vertical" variant="middle" />
        <Option>
          <AccountCircleIcon fontSize="large" />
          Profil
        </Option>
      </BottomMenuBar>
    </>
  );
};
