import { useState } from "react";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "./SearchModal";

function SearchBar({ searchChangeCity }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper
        component="body"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search City"
          inputProps={{ "aria-label": "search google maps" }}
          onClick={handleOpen}
        />
      </Paper>
      <SearchModal
        open={open}
        handleClose={handleClose}
        searchChangeCity={searchChangeCity}
      />
    </>
  );
}

export default SearchBar;
