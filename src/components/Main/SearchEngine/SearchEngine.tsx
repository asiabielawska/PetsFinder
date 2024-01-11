import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export const SearchEngine = () => {
  return (
    <div
      style={{
        paddingTop: 15,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "90%",
          borderRadius: 10,
          border: "1px solid #917B60",
          boxShadow: "none",
        }}
      >
        <IconButton sx={{ p: "10px", color: "#917B60" }} aria-label="filtruj">
          <TuneIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
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
      </Paper>
    </div>
  );
};
