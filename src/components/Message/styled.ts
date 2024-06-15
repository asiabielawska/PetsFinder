import { TextField, styled } from "@mui/material";

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
