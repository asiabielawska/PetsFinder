import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { SelectFormControl } from "./styled";

export const BasicSelect = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Typ zgłoszenia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Typ zgłoszenia"
          onChange={handleChange}
        >
          <MenuItem value={"zgubiono"}>Zgubiono</MenuItem>
          <MenuItem value={"znaleziono"}>Znaleziono</MenuItem>
          <MenuItem value={"oddam"}>Oddam</MenuItem>
          <MenuItem value={"szukam"}>Szukam</MenuItem>
        </Select>
      </SelectFormControl>
    </Box>
  );
};
