import * as React from "react";
import { Paper } from "@mui/material";

function AirCondition() {
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
      <h4>Air consition</h4>
    </Paper>
  );
}

export default AirCondition;
