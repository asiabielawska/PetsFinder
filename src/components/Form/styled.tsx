import { TextField, styled } from "@mui/material";

export const Content = styled("div")({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingBottom: "12vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const FormTextField = styled(TextField)({
  marginTop: 15,
  borderRadius: 15,
  width: "100%",
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
    color: "#917B60 ",
  },
  "& label.MuiFormLabel-root": {
    color: "#917B60",
  },
  "& div.MuiInputBase-root": {
    borderRadius: 30,
  },
});

export const Select = styled("select")({
  marginTop: 15,
  border: "1px solid #917B60 !important",
  borderRadius: 30,
  color: "#917B60",
  width: "100%",
  height: "10vh",
  padding: 10,
});

export const TwoButtons = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "10vh",
  background: "white",
});

export const WhiteBackgroundButton = styled("button")({
  background: "none",
  border: "1px solid #917B60",
  height: 40,
  width: "45%",
  color: "#917B60",
  borderRadius: 20,
});

export const BrownBackgroundButton = styled("button")({
  backgroundColor: "#917B60",
  border: "1px solid #917B60",
  height: 40,
  width: "45%",
  borderRadius: 20,
  color: "white",
});

export const AddImg = styled("button")((props) => ({
  marginTop: 15,
  backgroundColor: props.theme.palette.secondary.main,
  border: "1px solid #917B60",
  height: 40,
  width: "100%",
  color: "black",
  borderRadius: 20,
}));

export const AddedImg = styled("img")({
  borderRadius: 20,
  marginTop: 15,
  maxWidth: "100%",
});
