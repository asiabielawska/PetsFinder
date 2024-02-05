import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectFormControl } from "./styled";
import { MenuItem } from "@mui/material";

type Props = {
  selectLabel: string;
  selectValue: string[];
  value: string;
  onChange: (el: string) => void;
};

export const BasicSelect = ({
  selectValue,
  selectLabel,
  value,
  onChange,
}: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectFormControl fullWidth>
        <InputLabel>{selectLabel}</InputLabel>
        <Select value={value} label={selectLabel} onChange={handleChange}>
          {selectValue.map((el) => (
            <MenuItem value={el} key={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </SelectFormControl>
    </Box>
  );
};
