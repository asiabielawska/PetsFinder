import { styled } from "@mui/material";

export const CommonCategories = styled("div")({
  display: "flex",
  flexDirection: "row",
  paddingTop: 15,
  width: "100%",
  justifyContent: "space-between",
});

export const Category = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "#5E503F",
  fontSize: 13,
  alignItems: "center",
  fontWeight: "bold",
});

export const CategoryButton = styled("button")({
  border: "none",
  backgroundColor: "#D6C3AE",
  height: 40,
  width: 40,
  borderRadius: 10,
  color: "white",
  fontSize: 25,
});

export const LostFindButtons = styled("button")({
  border: "none",
  backgroundColor: "#D6C3AE",
  height: 30,
  width: "auto",
  borderRadius: 5,
  color: "white",
  marginRight: 5,
  fontWeight: 900,
});
