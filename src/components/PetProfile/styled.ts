import { styled } from "@mui/material";

export const ReturnButton = styled("button")({
  border: "none",
  backgroundColor: "white",
  borderRadius: 10,
  position: "absolute",
  top: 10,
  left: 10,
  display: "flex",
});

export const Liked = styled("button", {
  shouldForwardProp: (propName) => propName !== "isPetLiked",
})<{ isPetLiked: boolean }>((props) => ({
  background: "none",
  border: "none",
  position: "absolute",
  top: 10,
  right: 10,
  color: props.isPetLiked ? "red" : "grey",
}));

export const PetProfileImg = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});

export const PetDetails = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  paddingTop: 15,
  width: "100%",
  justifyContent: "space-between",
  color: props.theme.palette.primary.main,
  marginBottom: 15,
}));

export const Detail = styled("div")((props) => ({
  backgroundColor: props.theme.palette.secondary.main,
  display: "flex",
  height: 40,
  width: 60,
  borderRadius: 10,
  fontWeight: "bold",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
}));

export const DateAndLocation = styled("div")((props) => ({
  fontSize: 12,
  color: props.theme.palette.primary.main,
  display: "flex",
  marginTop: 15,
  justifyContent: "space-between",
}));

export const Date = styled("div")({});

export const Description = styled("div")((props) => ({
  marginTop: 20,
  color: props.theme.palette.primary.main,
  fontSize: 15,
}));

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
  width: "95%",
  borderRadius: 20,
  color: "white",
});
