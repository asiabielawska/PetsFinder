import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { MainContent } from "../../styled";
import {
  DarkButton,
  Icon,
  IconContainer,
  Input,
  LightButton,
  LoginHeading,
  TextError,
} from "../styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Slices/userState/userState";
import { useForm } from "react-hook-form";
import { client } from "../../supabase";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<{
    password: string;
    email: string;
    repeatPassword: string;
    userName: string;
  }>();
  const onRegister = handleSubmit(async (data) => {
    try {
      const result = await client.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (result.error != null) {
        setError("root", { message: "Nie udało się zarejestrować" });
        return;
      }
      dispatch(
        loginUser({
          userName: result.data.user?.email,
          id: result.data.user?.id,
        })
      ); // @TODO handle user name as well
      navigate("/");
    } catch (_e) {
      setError("root", { message: "Nie udało się zarejestrować" });
    }
  });
  return (
    <MainContent>
      <LoginHeading>Zarejestruj się</LoginHeading>
      <IconContainer>
        <Icon icon={faPaw}></Icon>
      </IconContainer>
      <form onSubmit={onRegister}>
        <Input
          {...register("email", { required: "To pole jest wymagane" })}
          label="Email"
          variant="outlined"
        />
        <Input
          {...register("password", {
            required:
              "Hasło musi mieć długość przynajmniej 8 znaków i musi zawierać przynajmniej jedną dużą literę, liczbę oraz znak specjalny.",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
              message:
                "Hasło musi mieć długość przynajmniej 8 znaków i musi zawierać przynajmniej jedną dużą literę, liczbę oraz znak specjalny.",
            },
          })}
          label="Hasło"
          variant="outlined"
          type="password"
        />
        {errors.password?.message && (
          <TextError>{errors.password?.message}</TextError>
        )}
        <Input
          {...register("repeatPassword", {
            validate: (value, formValues) => {
              if (value === formValues.password) {
                return true;
              }
              return "Hasła muszą być takie same.";
            },
          })}
          label="Powtórz hasło"
          variant="outlined"
          type="password"
        />
        {errors.repeatPassword?.message && (
          <TextError>{errors.repeatPassword?.message}</TextError>
        )}
        <Input
          {...register("userName", { required: "To pole jest wymagane" })}
          label="Nazwa użytkownika"
          variant="outlined"
        />
        {errors.root?.message && <TextError>{errors.root?.message}</TextError>}
        <DarkButton type="submit">Zarejestruj się</DarkButton>
        <LightButton onClick={() => navigate("/")}>
          Kontynuuj bez rejestracji
        </LightButton>
      </form>
    </MainContent>
  );
};
