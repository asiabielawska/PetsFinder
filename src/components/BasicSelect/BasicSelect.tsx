import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectFormControl } from "./styled";
import { MenuItem } from "@mui/material";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (el: any) => void;
};

export const BasicSelect = ({ label, options, value, onChange }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectFormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map((el) => (
            <MenuItem value={el} key={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </SelectFormControl>
    </Box>
  );
};
