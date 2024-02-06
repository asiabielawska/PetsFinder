import { styled } from "@mui/material";

export const ReturnButton = styled("button")({
  border: "none",
  backgroundColor: "white",
  borderRadius: 10,
  position: "absolute",
  top: 10,
  left: 10,
});

export const Liked = styled("button")({
  background: "none",
  border: "none",
  position: "absolute",
  top: 10,
  right: 10,
});

export const PetProfileImg = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "contain",
});

export const PetDetails = styled("div")({
  display: "flex",
  flexDirection: "row",
  paddingTop: 15,
  width: "100%",
  justifyContent: "space-between",
  color: "#5E503F",
  marginBottom: 15,
});

export const Detail = styled("div")({
  backgroundColor: "#D6C3AE",
  display: "flex",
  height: 40,
  width: 60,
  borderRadius: 10,
  fontWeight: "bold",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
});

export const DateAndLocation = styled("div")({
  fontSize: 12,
  color: "#5E503F",
  display: "flex",
  marginTop: 15,
  justifyContent: "space-between",
});

export const Date = styled("div")({});

export const Description = styled("div")({
  marginTop: 20,
  color: "#5E503F",
  fontSize: 15,
});

export const Contact = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 15,
  position: "fixed",
  bottom: 0,
  width: "100%",
  height: "10vh",
  background: "white",
});

export const Message = styled("button")({
  background: "none",
  border: "1px solid #917B60",
  height: 40,
  width: 130,
  color: "#917B60",
  borderRadius: 20,
});

export const Adopt = styled("button")({
  backgroundColor: "#917B60",
  border: "1px solid #917B60",
  height: 40,
  width: 130,
  borderRadius: 20,
  color: "white",
});
