import { FormControl, styled } from "@mui/material";

export const SelectFormControl = styled(FormControl)({
  marginTop: 15,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #917B60 !important",
    borderRadius: 30,
  },
  "& .MuiSvgIcon-root": {
    color: "#917B60",
  },
  " & .MuiInputBase-root": {
    color: "#917B60",
  },
  "& label.MuiFormLabel-root": {
    color: "#917B60",
  },
});
