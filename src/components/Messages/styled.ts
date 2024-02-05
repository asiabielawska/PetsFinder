import { styled } from "@mui/material";

export const Message = styled("div")({
  display: "flex",
  alignItems: "center",
  flex: 2,
  marginTop: 15,
});

export const NameAndContent = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const Content = styled("div")({
  fontSize: 10,
  paddingLeft: 10,
  paddingTop: 5,
});
