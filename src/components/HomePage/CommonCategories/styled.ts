import { styled } from "@mui/material";

export const CommonCategories = styled("div")({
  display: "flex",
  paddingTop: 15,
  width: "100%",
  justifyContent: "space-between",
});

export const Category = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  color: props.theme.palette.primary.main,
  fontSize: 13,
  alignItems: "center",
  fontWeight: "bold",
}));

export const CategoryButton = styled("button")((props) => ({
  border: "none",
  backgroundColor: props.theme.palette.secondary.main,
  height: 40,
  width: 40,
  borderRadius: 10,
  color: "white",
  fontSize: 25,
}));

export const RectangularButtons = styled("button")((props) => ({
  border: "none",
  backgroundColor: props.theme.palette.secondary.main,
  height: 30,
  width: "auto",
  borderRadius: 5,
  color: "white",
  marginRight: 5,
  fontWeight: 900,
}));
