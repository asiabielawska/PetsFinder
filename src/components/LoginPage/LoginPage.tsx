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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userState/userState";

const mockUser = {
  login: "Asia",
  password: "Admin!123",
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const login = () => {
    if (email === mockUser.login && password === mockUser.password) {
      dispatch(loginUser());
      navigate("/");
    }
  };
  return (
    <MainContent>
      <LoginHeading>Witaj ponownie!</LoginHeading>
      <IconContainer>
        <Icon icon={faPaw}></Icon>
      </IconContainer>
      <Input
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Hasło"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
      />
      <DarkButton onClick={login}>Zaloguj się</DarkButton>
      <LightButton onClick={() => navigate("/")}>
        Kontunuuj bez logowania
      </LightButton>
    </MainContent>
  );
};
