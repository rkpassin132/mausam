import * as React from "react";
import { Grid, Stack } from "@mui/material";
import CurrentWeather from "./Weather/CurrentWeather";
import TodayForcast from "./Weather/TodayForcast/TodayForcast";
import AirCondition from "./Weather/AirCondition/AirCondition";
import WeeklyForcast from "./Weather/WeeklyForcast/WeeklyForcast";

function WeatherDetail({ todayWeather, todayForecast, weekForecast }) {
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} sm={12} md={12} lg={7}>
        <Stack spacing={2}>
          <CurrentWeather todayWeather={todayWeather} />
          <TodayForcast todayWeather={todayWeather} todayForecast={todayForecast} />
          <AirCondition todayWeather={todayWeather} />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <WeeklyForcast data={weekForecast} />
      </Grid>
    </Grid>
  );
}

export default WeatherDetail;
