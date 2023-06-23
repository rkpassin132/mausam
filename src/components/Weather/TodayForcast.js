import * as React from "react";
import { Paper } from "@mui/material";

function TodayForcast() {
  return (
    <Paper
      component="body"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <h4>Today's forcast</h4>
    </Paper>
  );
}

export default TodayForcast;
