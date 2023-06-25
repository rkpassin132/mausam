import * as React from "react";
import { Grid, Typography } from "@mui/material";
import AirConditionIcon from "./AirConditionIcon";

function AirConditionItem({ title, value, type }) {

  return (
    <Grid container item xs={6} padding="0 !important" marginY={1}>
      <Grid item xs={2} paddingY={1}>
        <AirConditionIcon type={type} />
      </Grid>
      <Grid item xs={10}>
        <Typography
          marginTop={0}
          color="#9fa4ac"
          variant="span"
          fontWeight="600"
          component="span"
          fontSize="14px"
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="600"
          component="h4"
          fontSize="24px"
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AirConditionItem;
