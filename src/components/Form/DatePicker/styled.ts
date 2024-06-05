import { styled } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";

export const DatePicker = styled(DesktopDatePicker)({
  marginTop: 15,
  width: "100%",
  ".MuiFormControl-root": {
    borderRadius: 30,
    border: "1px solid #917B60",
  },
  " fieldset.MuiOutlinedInput-notchedOutline": {
    borderRadius: 30,
    border: "1px solid #917B60 !important",
  },
  " & .MuiSvgIcon-root": {
    fill: "#917B60",
  },
  " & .MuiFormLabel-root.MuiInputLabel-root": {
    color: "#917B60",
  },
  " & .MuiInputBase-input.MuiOutlinedInput-input": {
    color: "#917B60",
  },
});
