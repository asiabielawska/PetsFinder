import { TextField, styled } from "@mui/material";

export const FormTextField = styled(TextField)({
  marginTop: 15,
  borderRadius: 15,
  "& label.Mui-focused": {
    color: "#917B60",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#917B60",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#917B60",
    },
  },
  "& .MuiInputBase-input": {
    color: "#917B60",
  },
  "& label.MuiFormLabel-root": {
    color: "#917B60",
  },
  "& div.MuiInputBase-root": {
    borderRadius: 30,
  },
});

export const TwoButtons = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: 15,
  width: "100%",
  height: "10vh",
  background: "white",
});

export const WhiteBackgroundButton = styled("button")({
  background: "none",
  border: "1px solid #917B60",
  height: 40,
  width: 130,
  color: "#917B60",
  borderRadius: 20,
});

export const BrownBackgroundButton = styled("button")({
  backgroundColor: "#917B60",
  border: "1px solid #917B60",
  height: 40,
  width: 130,
  borderRadius: 20,
  color: "white",
});
