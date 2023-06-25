import * as React from "react";
import { Divider, Grid, ListItem } from "@mui/material";
import WeeklyForcastItemDetail from "./WeeklyForcastItemDetail";

function WeeklyForcastItem() {
  return (
    <>
      <ListItem
        sx={{ paddingX: 0, paddingY:2 }}
        secondaryAction={
          <>
            <WeeklyForcastItemDetail value={"25 m/5"} type={"clouds"} />
            <WeeklyForcastItemDetail value={"25 m/5"} type={"clouds"} />
          </>
        }
      >
        <Grid container>
          <Grid item xs={5}>
            <Grid xs={12}>Monday</Grid>
            <WeeklyForcastItemDetail value={"25 m/5"} type={"clouds"} />
          </Grid>
          <Grid item xs={4}>
            <WeeklyForcastItemDetail value={"25 m/5"} type={"clouds"} />
            <WeeklyForcastItemDetail value={"25 m/5"} type={"clouds"} />
          </Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default WeeklyForcastItem;
