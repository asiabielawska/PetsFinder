import { styled } from "@mui/material";

export const BottomMenuBar = styled("div")({
  display: "flex",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "10vh",
  "& > button": {
    backgroundColor: "#917B60",
    borderLeft: "none",
    borderTop: "none",
    borderBottom: "none",
    borderRight: "1px solid white",
  },
  "& > button:last-child": {
    borderRight: "none",
  },
});

export const Option = styled("button")({
  color: "white",
  flex: 1,
  fontSize: "1.5vh",
  minWidth: 65,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
