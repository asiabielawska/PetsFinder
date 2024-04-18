import { useNavigate } from "react-router-dom";
import { MainContent } from "../../styled";
import { TextField } from "@mui/material";
import {
  DarkButton,
  Icon,
  IconContainer,
  Input,
  LightButton,
  LoginHeading,
} from "./styled";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <MainContent>
      <LoginHeading>Witaj ponownie!</LoginHeading>
      <IconContainer>
        <Icon icon={faPaw}></Icon>
      </IconContainer>
      <Input label="Email" variant="outlined" />
      <TextField label="Hasło" variant="outlined" />
      <DarkButton>Zaloguj się</DarkButton>
      <LightButton onClick={() => navigate("/")}>
        Kontunuuj bez logowania
      </LightButton>
    </MainContent>
  );
};
