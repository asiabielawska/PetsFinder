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

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [passwordRep, setPasswordRep] = useState<string | undefined>(undefined);
  const [registerStatus, setRegisterStatus] = useState("");
  const register = () => {
    if (password === passwordRep && email) {
      setRegisterStatus("Success");
      dispatch(loginUser());
      navigate("/");
    } else {
      setRegisterStatus("Error");
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
        onChange={(event) => setPasswordRep(event.target.value)}
      />
      {registerStatus === "Error" && <div>Niewłaściwy email lub hasło</div>}
      <DarkButton onClick={register}>Zarejestruj się</DarkButton>
      <LightButton onClick={() => navigate("/")}>
        Kontunuuj bez rejestracji
      </LightButton>
    </MainContent>
  );
};
