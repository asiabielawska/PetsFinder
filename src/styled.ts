import { styled } from "@mui/material";

export const MainContent = styled("div")({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingBottom: "12vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const Heading = styled("div")((props) => ({
  marginTop: 20,
  color: props.theme.palette.primary.main,
  fontWeight: 900,
  fontSize: 15,
}));

export const UserAndAddButton = styled("div")({
  display: "flex",
});
