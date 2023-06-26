import { Grid, Typography } from "@mui/material";
import * as React from "react";
import AirConditionIcon from "../AirCondition/AirConditionIcon";

function WeeklyForcastItemDetail({ type, value, src }) {
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Typography
          marginTop={0}
          color="#9fa4ac"
          variant="span"
          fontWeight="600"
          component="span"
          fontSize="14px"
          sx={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          <span>
            <AirConditionIcon
              type={type}
              src={src}
              iconStyle={{
                fontSize: "18px",
                color: "#9fa4ac",
                margin: "auto",
                lineHeight: 1,
              }}
            />
          </span>
          <span>{value}</span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WeeklyForcastItemDetail;
