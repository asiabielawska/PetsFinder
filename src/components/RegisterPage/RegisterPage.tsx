import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { MainContent } from "../../styled";
import {
  DarkButton,
  Icon,
  IconContainer,
  Input,
  LightButton,
  LoginHeading,
} from "../styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userState/userState";

const mockUser = {
  login: "Asia",
  password: "Admin!123",
};

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const register = () => {
    if (email === mockUser.login && password === mockUser.password) {
      dispatch(loginUser());
      navigate("/");
    }
  };
  return (
    <MainContent>
      <LoginHeading>Zarejestruj się</LoginHeading>
      <IconContainer>
        <Icon icon={faPaw}></Icon>
      </IconContainer>
      <Input
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        label="Hasło"
        variant="outlined"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        label="Powtórz hasło"
        variant="outlined"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <DarkButton onClick={register}>Zarejestruj się</DarkButton>
      <LightButton onClick={() => navigate("/")}>
        Kontunuuj bez rejestracji
      </LightButton>
    </MainContent>
  );
};
