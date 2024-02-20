import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { Form } from "./styled";

export const SearchEngine = () => {
  return (
    <div
      style={{
        paddingTop: 25,
      }}
    >
      <Form>
        <IconButton sx={{ p: "10px", color: "#917B60" }} aria-label="filtruj">
          <TuneIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#5E503F" }}
          placeholder="Wyszukaj"
          inputProps={{ "aria-label": "Wyszukaj" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#917B60" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Form>
    </div>
  );
};
