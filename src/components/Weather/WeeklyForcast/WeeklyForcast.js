import * as React from "react";
import { List, Paper, Stack, Typography } from "@mui/material";
import WeeklyForcastItem from "./WeeklyForcastItem";
import { getWeekDays } from "../../../utilities/DatetimeUtils";
import { weatherIcon } from "../../../utilities/IconsUtils";

function WeeklyForcast({ data }) {
  const forecastDays = getWeekDays();

  return (
    <Paper
      component="body"
      sx={{ p: 3, display: "flex", alignItems: "center", borderRadius: 5 }}
    >
      <Stack width="100%" maxWidth={"100%"} spacing={2}>
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
          Weekly Forcast
        </Typography>
        <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "transparent" }}>
          {data.list.map((item, idx) => (
            <WeeklyForcastItem
              key={idx}
              item={item}
              day={forecastDays[idx]}
              src={weatherIcon(`${item.icon}`)}
              description={item.description}
            />
          ))}
        </List>
      </Stack>
    </Paper>
  );
}

export default WeeklyForcast;
