import { useState } from "react";
import { CircularProgress, Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchCities } from "../../service/OpenWeatherService";

function SearchModalBar({ setSearchList }) {
  const [searchValue, setSearchValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchChange = (e) => setSearchValue(e.target.value);
  const loadOptions = async (inputValue) => {
    setIsLoading(true);
    const citiesList = await fetchCities(inputValue);
    setIsLoading(false);

    return citiesList.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });
  };

  const onEnter = async (e) => {
    if (e.key == "Enter") {
      setSearchList(await loadOptions(searchValue));
    }
  };

  return (
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
        autoFocus={true}
        placeholder="Type city name and enter to search city"
        value={searchValue}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onSearchChange}
        onKeyDown={onEnter}
      />
      {isLoading && (<CircularProgress size={24} />)}
    </Paper>
  );
}

export default SearchModalBar;
