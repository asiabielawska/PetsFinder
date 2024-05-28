import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "./styled";
import dayjs from "dayjs";

type Props = {
  value: number;
  onChange: (val: dayjs.Dayjs) => void;
};

export const BasicDatePicker = ({ value, onChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dayjs(value)}
        // @ts-ignore
        onChange={onChange}
        label="Data*"
        format="DD-MM-YYYY"
        slotProps={{
          popper: {
            sx: {
              ".MuiDateCalendar-root": {
                maxWidth: "100vw",
                color: "#917B60",
                border: "1px solid #917B60",
                borderRadius: 5,
              },
              ".MuiPaper-root": {
                boxShadow: "none",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};
