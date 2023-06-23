import * as React from "react";
import { Paper } from "@mui/material";

function CurrentWeather() {
  return (
    <Paper
      component="weatherData"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <h4>City - Current Weather</h4>
    </Paper>
  );
}

export default CurrentWeather;
