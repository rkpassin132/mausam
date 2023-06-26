import * as React from "react";
import { Divider, Grid, ListItem } from "@mui/material";
import WeeklyForcastItemDetail from "./WeeklyForcastItemDetail";

function WeeklyForcastItem({ item, day, src, description }) {
  return (
    <>
      <ListItem
        sx={{ paddingX: 0, paddingY: 2 }}
        secondaryAction={
          <>
            <WeeklyForcastItemDetail type="wind" value={item.wind + " m/s"} />
            <WeeklyForcastItemDetail
              type="humidity"
              value={item.humidity + " %"}
            />
          </>
        }
      >
        <Grid container>
          <Grid item xs={5}>
            <Grid xs={12}>{day}</Grid>
            <WeeklyForcastItemDetail
              value={description}
              type={"img"}
              src={src}
            />
          </Grid>
          <Grid item xs={4}>
            <WeeklyForcastItemDetail
              type="temperature"
              value={Math.round(item.temp) + " °C"}
            />
            <WeeklyForcastItemDetail type="clouds" value={item.clouds + " %"} />
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default WeeklyForcastItem;
