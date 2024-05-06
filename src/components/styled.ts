import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, styled } from "@mui/material";

export const LoginHeading = styled("h1")((props) => ({
  color: props.theme.palette.secondary.main,
  marginBottom: "30%",
}));

export const DarkButton = styled("button")({
  backgroundColor: "#917B60",
  border: "1px solid #917B60",
  height: 40,
  width: "100%",
  borderRadius: 20,
  color: "white",
  marginTop: 15,
});
export const LightButton = styled("button")({
  background: "none",
  border: "1px solid #917B60",
  height: 40,
  width: "100%",
  color: "#917B60",
  borderRadius: 20,
  marginTop: 15,
});

export const IconContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Icon = styled(FontAwesomeIcon)((props) => ({
  color: props.theme.palette.secondary.main,
  width: 70,
  height: 70,
  marginBottom: 15,
}));

export const Input = styled(TextField)({
  marginBottom: 15,
});

export const TextError = styled("div")({
  color: "red",
  fontSize: 12,
});
