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
import { loginUser } from "../../userState/userState";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    password: string;
    email: string;
    repeatPassword: string;
  }>();

  return (
    <MainContent>
      <LoginHeading>Zarejestruj się</LoginHeading>
      <IconContainer>
        <Icon icon={faPaw}></Icon>
      </IconContainer>
      <form
        onSubmit={handleSubmit(() => {
          dispatch(loginUser());
          navigate("/");
        })}
      >
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
        <DarkButton type="submit">Zarejestruj się</DarkButton>
        <LightButton onClick={() => navigate("/")}>
          Kontunuuj bez rejestracji
        </LightButton>
      </form>
    </MainContent>
  );
};
