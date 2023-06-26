import * as React from "react";
import { ImageList, Paper, Stack, Typography } from "@mui/material";
import TodayForcastItem from "./TodayForcastItem";

function TodayForcast({ todayWeather, todayForecast }) {
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
      <Stack maxWidth="100%">
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
          Today's Forcast
        </Typography>
        <ImageList
          className="horizontalBody"
          sx={{
            gridAutoFlow: "column",
            paddingY: 2,
            marginY: 1,
          }}
        >
          {todayForecast.map((item, idx) => (
            <TodayForcastItem
              key={idx}
              data={todayWeather}
              item={item}
            />
          ))}
        </ImageList>
      </Stack>
    </Paper>
  );
}

export default TodayForcast;
