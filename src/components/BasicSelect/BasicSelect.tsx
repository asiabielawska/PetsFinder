import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { SelectFormControl } from "./styled";
import { MenuItem } from "@mui/material";

type Props = {
  selectLabel: string;
  selectValue: string[];
};

export const BasicSelect = ({ selectValue, selectLabel }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectFormControl fullWidth>
        <InputLabel id={selectLabel}>{selectLabel}</InputLabel>
        <Select
          labelId={selectLabel}
          value={value}
          label={selectLabel}
          onChange={handleChange}
        >
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
