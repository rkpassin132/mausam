import * as React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import AirConditionItem from "./AirConditionItem";

function AirCondition() {
  return (
    <Paper
      component="body"
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
        <Stack width="100%" spacing={1}>
        <Typography
          sx={{
            marginTop: 0,
            color: "#b6b9be",
            variant: "span",
            fontWeight: "600",
            component: "span",
            fontSize: "15px",
            fontVariant: "all-petite-caps",
          }}
        >
          Air Condition
        </Typography>
        <Grid container spacing={2}>
          <AirConditionItem title="Real Feel" value="30 °C" type="temperature" />
          <AirConditionItem title="Wind" value="0.2 Km/h" type="wind" />
          <AirConditionItem title="Clouds" value="0%" type="clouds" />
          <AirConditionItem title="Humidity" value="3" type="humidity" />
        </Grid>
      </Stack>
    </Paper>
  );
}

export default AirCondition;
