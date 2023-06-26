import * as React from "react";
import { Grid, Stack, Container, Typography, Box } from "@mui/material";
import { getDayMonthFromDate } from "../../utilities/DatetimeUtils";
import { weatherIcon } from "../../utilities/IconsUtils";

const dayMonth = getDayMonthFromDate();

function CurrentWeather({todayWeather}) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4" fontWeight="600" component="h4" fontSize="28px">
                {todayWeather.name}, {todayWeather.sys.country}
              </Typography>
              <Typography
                marginTop={0}
                color="#747b86"
                variant="span"
                fontWeight="600"
                component="span"
                fontSize="16px"
              >
                {dayMonth}
              </Typography>
            </div>
            <div>
              <Typography variant="h3" fontWeight="600" component="h3" fontSize="48px">
                {todayWeather.main.temp} °C
              </Typography>
              <Typography
                marginTop={0}
                color="#747b86"
                variant="span"
                fontWeight="600"
                component="span"
                fontSize="16px"
              >
                {todayWeather.weather[0].description}
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4} margin="auto">
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              margin: "0 auto",
              padding: "0",
            }}
            alt="weather"
            src={weatherIcon(`${todayWeather.weather[0].icon}.png`)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CurrentWeather;
