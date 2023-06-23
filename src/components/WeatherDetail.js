import * as React from 'react';
import { Grid, Stack } from "@mui/material";
import CurrentWeather from './Weather/CurrentWeather';
import TodayForcast from './Weather/TodayForcast';
import AirCondition from './Weather/AirCondition';
import WeeklyForcast from './Weather/WeeklyForcast';

function WeatherDetail() {
  return (
    <Grid container spacing={2} marginTop={5}>
      <Grid item xs={12} sm={12} md={8}>
        <Stack spacing={2}>
          <CurrentWeather />
          <TodayForcast />
          <AirCondition />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <WeeklyForcast />
      </Grid>
    </Grid>
  );
}

export default WeatherDetail;
