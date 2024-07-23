import { useNavigate } from "react-router-dom";
import { MainContent } from "../../styled";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Slices/userState/userState";
import {
  DarkButton,
  Icon,
  IconContainer,
  Input,
  LightButton,
  LoginHeading,
  TextError,
} from "../styled";
import { client } from "../../supabase";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>();

  const login = async () => {
    if (email && password) {
      try {
        const result = await client.auth.signInWithPassword({
          email,
          password,
        });
        if (result.error) {
          setError("Nieprawidłowy email lub hasło");
        } else {
          dispatch(
            loginUser({
              userName: result.data.user.email,
              id: result.data.user.id,
            })
          );
          navigate("/");
        }
      } catch (_e) {
        setError("Nieprawidłowy email lub hasło");
      }
    }
  };
  return (
    <MainContent>
      <LoginHeading>Witaj!</LoginHeading>
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
      <DarkButton onClick={login}>Zaloguj się</DarkButton>
      {error && <TextError>{error}</TextError>}
      <LightButton onClick={() => navigate("/register-page")}>
        Zarejestruj się
      </LightButton>
      <LightButton onClick={() => navigate("/")}>
        Kontynuuj bez logowania
      </LightButton>
    </MainContent>
  );
};
